import { useCallback, useMemo } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useFocusEffect } from '@react-navigation/native';

import {
  useGetAccountPositionsQuery,
  useGetProductsQuery,
} from '../services/apexApi';
import { IAccountPosition, IProduct } from '../types/apiResponses';
import { useMarginProductConfig } from '../features/Wallet/hooks/useMarginProductConfig';
import { MARGIN_REFRESH_INTERVAL } from '../helpers';

import { useAppState } from './useAppState';
import { useUserCurrentAccount } from './useUserCurrentAccount';

// FIXME: provide more strict type for the wallet item and avoid merging of
// the bunch of object that can lead to unexpected outcome.
export type UserWallet = IAccountPosition &
  IProduct & {
    AvailableBalance: number;
    NotionalDecimalPlaces: number;
    CollateralEnabled: boolean;
  };

export function useWallets({
  hideSmallAmounts = false,
  skipQuery = false,
  includePending = false,
}) {
  const { currentAccount: userInfo, isMarginAccount } = useUserCurrentAccount();
  const { data: marginProductConfigs } = useMarginProductConfig();
  const {
    data: products,
    isLoading: productsLoading,
    refetch: refetchProducts,
  } = useGetProductsQuery(undefined, {
    skip: skipQuery,
    pollingInterval: MARGIN_REFRESH_INTERVAL,
  });

  const {
    data: accountPositions,
    isLoading: accountPositionsLoading,
    isUninitialized,
    refetch: refetchPositions,
  } = useGetAccountPositionsQuery(
    userInfo?.AccountId && !skipQuery
      ? { accountId: userInfo?.AccountId, includePending, hideSmallAmounts }
      : skipToken,
    { pollingInterval: MARGIN_REFRESH_INTERVAL },
  );

  const wallets: UserWallet[] = useMemo(() => {
    if (!accountPositions || !products) {
      return [];
    }

    const formattedWallets = accountPositions.reduce((acc, position) => {
      const product = products.find(p => p.ProductId === position.ProductId);
      const notionalProduct = products.find(
        p => p.ProductId === position.NotionalProductId,
      );
      const marginProductConfig = marginProductConfigs?.find(
        p => p.ProductId === position.ProductId,
      );
      if (product) {
        acc.push({
          ...position,
          ...product,
          AvailableBalance: position.Amount - (position.Hold || 0),
          NotionalDecimalPlaces: notionalProduct?.DecimalPlaces || 2,
          CollateralEnabled: marginProductConfig?.CollateralEnabled || false,
        });
      }
      return acc;
    }, [] as UserWallet[]);

    return formattedWallets.sort((a, b) => a.ProductId - b.ProductId);
  }, [accountPositions, products, marginProductConfigs]);

  useFocusEffect(
    useCallback(() => {
      if (!skipQuery && !isUninitialized) {
        refetchPositions();
      }
    }, [isUninitialized, refetchPositions, skipQuery]),
  );
  useAppState({
    onForeground: () => {
      if (!skipQuery && !isUninitialized) {
        refetchPositions();
      }
    },
  });

  const refetch = useCallback(() => {
    refetchPositions();
    refetchProducts();
  }, [refetchPositions, refetchProducts]);

  return {
    data: wallets,
    isLoading: productsLoading || accountPositionsLoading,
    refetch,
    isMarginAccount,
  };
}
