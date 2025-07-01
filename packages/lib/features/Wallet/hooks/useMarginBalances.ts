import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useCallback, useMemo } from 'react';

import { useMarginAccount, useMarginAccountInfo } from '../../Margin';
import { useGetProductsQuery } from '../../../services/apexApi';
import { useGetAccountMarginBalancesQuery } from '../../../services/marginApi';
import { MARGIN_REFRESH_INTERVAL } from '../../../helpers/constants';
import {
  IMarginProductConfig,
  IProduct,
  MarginBalanceResponse,
} from '../../../types/apiResponses';
import { useNotionalProduct } from '../../../hooks/useNotionalProduct';

import { useMarginProductConfig } from './useMarginProductConfig';

const transformPosition = (
  balance: MarginBalanceResponse,
  products: IProduct[],
  marginProductConfigs: IMarginProductConfig[],
  notionalProduct: IProduct | undefined,
) => {
  const product = products?.find(p => p.ProductId === balance.ProductId);
  const productConfig = marginProductConfigs?.find(
    config => config.ProductId === balance.ProductId,
  );
  return {
    ...balance,
    NotionalProductSymbol: notionalProduct?.Product || '',
    ProductSymbol: product?.Product || '',
    ProductFullName: product?.ProductFullName || '',
    DecimalPlaces: product?.DecimalPlaces || 2,
    CollateralEnabled: productConfig?.CollateralEnabled || false,
  };
};

export function useMarginBalances(hideSmallAmounts?: boolean) {
  const { refetch: refetchMarginAccountInfo } = useMarginAccountInfo();
  const { data: account } = useMarginAccount();
  const { notionalProduct } = useNotionalProduct();
  const { data: products } = useGetProductsQuery(undefined, {
    pollingInterval: MARGIN_REFRESH_INTERVAL,
  });
  const { data: marginProductConfigs } = useMarginProductConfig();

  const { data: accountMarginBalances, refetch: refetchAccountMarginBalances } =
    useGetAccountMarginBalancesQuery(
      account ? { accountId: account.AccountId, hideSmallAmounts } : skipToken,
      { pollingInterval: MARGIN_REFRESH_INTERVAL },
    );

  const transformedPositions = useMemo(
    () =>
      accountMarginBalances?.map(balance =>
        transformPosition(
          balance,
          products || [],
          marginProductConfigs || [],
          notionalProduct,
        ),
      ),
    [accountMarginBalances, products, marginProductConfigs, notionalProduct],
  );

  // Refetch after a transfer
  const refetchAll = useCallback(() => {
    refetchAccountMarginBalances();
    refetchMarginAccountInfo();
  }, [refetchAccountMarginBalances, refetchMarginAccountInfo]);

  return {
    data: transformedPositions,
    refetch: refetchAll,
  };
}
