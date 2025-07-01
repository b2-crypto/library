import { useCallback } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useGetWithdrawTicketsQuery, useLazyGetWithdrawTicketsQuery, } from '../../../services/activityApi';
import { useUserInfo, useWallets } from '../../../hooks';
import { withdrawTicketsAdapter } from '../../../helpers/activity';
export const useWithdrawTickets = (props) => {
    const { data: wallets, isLoading: isInstrumentsLoading } = useWallets({});
    const { data: userInfo, isLoading: isInfoLoading } = useUserInfo();
    const { data, originalArgs, isLoading: isWithdrawTicketsLoading, isUninitialized, refetch, } = useGetWithdrawTicketsQuery(userInfo?.AccountId && !isInstrumentsLoading
        ? {
            accountId: userInfo.AccountId,
            depth: props.depth,
            productId: props.productId,
            resetCache: true,
        }
        : skipToken, {
        selectFromResult: ({ data: res, ...rest }) => ({
            data: {
                ...res,
                tickets: withdrawTicketsAdapter
                    .getSelectors()
                    .selectAll(res?.items ?? withdrawTicketsAdapter.getInitialState())
                    .map(item => {
                    const details = wallets.find(wallet => wallet.ProductId === item.productId);
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
    });
    const [getWithdrawTickets] = useLazyGetWithdrawTicketsQuery();
    const isLoading = isInstrumentsLoading || isInfoLoading || isWithdrawTicketsLoading;
    const isRefetching = isLoading && !!data?.tickets?.length && !originalArgs?.offset;
    const loadMore = useCallback(async () => {
        if (!isLoading && data?.hasMore && userInfo?.AccountId) {
            await getWithdrawTickets({
                accountId: userInfo.AccountId,
                offset: data?.tickets.length,
                depth: props.depth,
                productId: props.productId,
            });
        }
    }, [data, userInfo, isLoading, userInfo?.AccountId, getWithdrawTickets]);
    return {
        withdrawTickets: data?.tickets || [],
        isLoading,
        isRefetching,
        isUninitialized,
        hasMore: !!data?.hasMore,
        loadMore,
        refetch,
    };
};
