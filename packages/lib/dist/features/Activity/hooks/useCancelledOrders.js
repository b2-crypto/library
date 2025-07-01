import { useCallback } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useGetOrdersHistoryQuery, useLazyGetOrdersHistoryQuery, } from '../../../services/activityApi';
import { useGetInstrumentWithLevel1Object, useUserCurrentAccount, } from '../../../hooks';
import { cancelledOrdersAdapter } from '../../../helpers/activity';
import { increment2digits } from '../../../helpers/format';
export const useCancelledOrders = (props) => {
    const { data: instruments, isLoading: isInstrumentsLoading } = useGetInstrumentWithLevel1Object();
    const { currentAccount } = useUserCurrentAccount();
    const { data, originalArgs, isLoading: isCancelledOrdersLoading, isUninitialized, refetch, } = useGetOrdersHistoryQuery(currentAccount?.AccountId && !isInstrumentsLoading
        ? {
            accountId: currentAccount.AccountId,
            depth: props.depth,
            instrumentId: props.instrumentId,
            resetCache: true,
        }
        : skipToken, {
        selectFromResult: ({ data: res, ...rest }) => ({
            data: {
                ...res,
                orders: cancelledOrdersAdapter
                    .getSelectors()
                    .selectAll(res?.items ?? cancelledOrdersAdapter.getInitialState())
                    .filter(item => !['Working', 'FullyExecuted'].includes(item.status))
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
                        iconSymbols: details?.Product1Symbol && details?.Product2Symbol
                            ? [
                                details?.Product1Symbol,
                                details?.Product2Symbol,
                            ]
                            : undefined,
                        fullName: details?.Product1Symbol,
                        symbol: details?.VenueSymbol,
                    };
                }),
            },
            ...rest,
        }),
    });
    const [getCancelledOrders] = useLazyGetOrdersHistoryQuery();
    const isLoading = isInstrumentsLoading || isCancelledOrdersLoading;
    const isRefetching = isLoading && !!data?.orders?.length && !originalArgs?.offset;
    const loadMore = useCallback(() => {
        if (!isLoading && data?.hasMore && currentAccount?.AccountId) {
            getCancelledOrders({
                accountId: currentAccount.AccountId,
                offset: data?.orders?.length,
                depth: props.depth,
                instrumentId: props.instrumentId,
            });
        }
    }, [data, isLoading, currentAccount?.AccountId, getCancelledOrders]);
    return {
        cancelledOrders: data.orders,
        isLoading,
        isRefetching,
        isUninitialized,
        hasMore: !!data?.hasMore,
        loadMore,
        refetch,
    };
};
