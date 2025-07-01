import { useCallback } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';

import {
  useGetAccountTradesQuery,
  useLazyGetAccountTradesQuery,
} from '../../../services/activityApi';
import {
  useGetInstrumentWithLevel1Object,
  useUserCurrentAccount,
} from '../../../hooks';
import { accountTradesAdapter } from '../../../helpers/activity';
import { increment2digits } from '../../../helpers/format';

export const useFilledOrders = (props: {
  depth?: number;
  instrumentId?: number;
}) => {
  const { data: instruments, isLoading: isInstrumentsLoading } =
    useGetInstrumentWithLevel1Object();
  const { currentAccount } = useUserCurrentAccount();
  const {
    data,
    originalArgs,
    isLoading: isTradesLoading,
    isUninitialized,
    refetch,
  } = useGetAccountTradesQuery(
    currentAccount?.AccountId && !isInstrumentsLoading
      ? {
          accountId: currentAccount.AccountId,
          depth: props.depth,
          offset: 0,
          instrumentId: props.instrumentId,
          resetCache: true,
        }
      : skipToken,
    {
      selectFromResult: ({ data: res, ...rest }) => ({
        data: {
          ...res,
          items: accountTradesAdapter
            .getSelectors()
            .selectAll(res?.items ?? accountTradesAdapter.getInitialState())
            .map(item => {
              const details = item.instrumentId
                ? instruments[item.instrumentId]
                : undefined;
              return {
                ...item,
                decimalPlaces: details?.QuantityIncrement
                  ? increment2digits(details.QuantityIncrement)
                  : undefined,
                currency: details?.Product1Symbol,
                iconSymbols:
                  details?.Product1Symbol && details?.Product2Symbol
                    ? ([
                        details?.Product1Symbol,
                        details?.Product2Symbol,
                      ] as const)
                    : undefined,
                fullName: details?.Product1Symbol,
                symbol: details?.VenueSymbol,
              };
            }),
        },
        ...rest,
      }),
    },
  );
  const [getAccountTrades] = useLazyGetAccountTradesQuery();

  const isLoading = isInstrumentsLoading || isTradesLoading;
  const isRefetching =
    isLoading && !!data?.items?.length && !originalArgs?.offset;

  const loadMore = useCallback(async () => {
    if (!isLoading && data?.hasMore && currentAccount?.AccountId) {
      await getAccountTrades({
        accountId: currentAccount.AccountId,
        offset: data?.items?.length,
        depth: props.depth,
        instrumentId: props.instrumentId,
      }).unwrap();
    }
  }, [data, isLoading, currentAccount?.AccountId, getAccountTrades]);

  return {
    filledOrders: data?.items || [],
    isLoading,
    isRefetching,
    isUninitialized,
    hasMore: !!data?.hasMore,
    loadMore,
    refetch,
  };
};
