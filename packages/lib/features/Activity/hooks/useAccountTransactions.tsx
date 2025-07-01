import { useCallback } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';

import {
  useGetAccountTransactionsQuery,
  useLazyGetAccountTransactionsQuery,
} from '../../../services/activityApi';
import { useUserInfo , useWallets } from '../../../hooks';
import { accountTransactionsAdapter } from '../../../helpers/activity';

export const useAccountTransactions = (props: {
  depth?: number;
  productId?: number;
}) => {
  const { data: wallets, isLoading: isInstrumentsLoading } = useWallets({});
  const { data: userInfo, isLoading: isInfoLoading } = useUserInfo();
  const {
    data,
    originalArgs,
    isLoading: isAccountTransactionsLoading,
    isUninitialized,
    refetch,
  } = useGetAccountTransactionsQuery(
    userInfo?.AccountId && !isInstrumentsLoading
      ? {
          accountId: userInfo.AccountId,
          depth: props.depth,
          productId: props.productId,
          resetCache: true,
          refTypes: ['Trade', 'Deposit', 'Withdraw'],
        }
      : skipToken,
    {
      selectFromResult: ({ data: res, ...rest }) => ({
        data: {
          ...res,
          transactions: accountTransactionsAdapter
            .getSelectors()
            .selectAll(
              res?.items ?? accountTransactionsAdapter.getInitialState(),
            )
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
  const [getAccountTransactions] = useLazyGetAccountTransactionsQuery();

  const isLoading =
    isInstrumentsLoading || isInfoLoading || isAccountTransactionsLoading;
  const isRefetching =
    isLoading && !!data?.transactions?.length && !originalArgs?.offset;

  const loadMore = useCallback(() => {
    if (!isLoading && data?.hasMore && userInfo?.AccountId) {
      getAccountTransactions({
        accountId: userInfo.AccountId,
        offset: data?.transactions?.length,
        depth: props.depth,
        productId: props.productId,
      });
    }
  }, [data, isLoading, userInfo?.AccountId, getAccountTransactions]);

  return {
    accountTransactions: data.transactions,
    isLoading,
    isRefetching,
    isUninitialized,
    hasMore: !!data?.hasMore,
    loadMore,
    refetch,
  };
};
