import { useCallback } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';

import {
  useGetDepositTicketsQuery,
  useLazyGetDepositTicketsQuery,
} from '../../../services/activityApi';
import { useUserCurrentAccount , useWallets } from '../../../hooks';
import { depositTicketsAdapter } from '../../../helpers/activity';

export const useDepositTickets = (props: {
  depth?: number;
  productId?: number;
}) => {
  const { data: wallets, isLoading: isInstrumentsLoading } = useWallets({});
  const { currentAccount } = useUserCurrentAccount();
  const {
    data,
    originalArgs,
    isLoading: isDepositsLoading,
    isUninitialized,
    refetch,
  } = useGetDepositTicketsQuery(
    currentAccount?.AccountId && !isInstrumentsLoading
      ? {
          accountId: currentAccount.AccountId,
          depth: props.depth,
          productId: props.productId,
          resetCache: true,
        }
      : skipToken,
    {
      selectFromResult: ({ data: res, ...rest }) => ({
        data: {
          ...res,
          tickets: depositTicketsAdapter
            .getSelectors()
            .selectAll(res?.items ?? depositTicketsAdapter.getInitialState())
            .map(item => {
              const details = wallets.find(
                wallet => wallet.ProductId === item.productId,
              );
              return {
                ...item,
                decimalPlaces: details?.DecimalPlaces,
                currency: details?.Product,
                iconSymbol: details?.ProductSymbol,
                symbol: details?.ProductSymbol,
                fullName: details?.ProductFullName,
                notionalSymbol: details?.NotionalProductSymbol,
                notionalRate: details?.NotionalRate,
                notionalPlaces: details?.NotionalDecimalPlaces,
              };
            }),
        },
        ...rest,
      }),
    },
  );
  const [getDepositTickets] = useLazyGetDepositTicketsQuery();

  const isLoading = isInstrumentsLoading || isDepositsLoading;
  const isRefetching =
    isLoading && !!data?.tickets?.length && !originalArgs?.offset;

  const loadMore = useCallback(async () => {
    if (!isLoading && data?.hasMore && currentAccount?.AccountId) {
      await getDepositTickets({
        accountId: currentAccount.AccountId,
        offset: data?.tickets?.length,
        depth: props.depth,
        productId: props.productId,
      }).unwrap();
    }
  }, [data, isLoading, currentAccount?.AccountId, getDepositTickets]);

  return {
    depositTickets: data?.tickets || [],
    isLoading,
    isRefetching,
    isUninitialized,
    hasMore: !!data?.hasMore,
    loadMore,
    refetch,
  };
};
