import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useCallback } from 'react';
import { useNotionalProduct } from '../../../hooks';
import { useGetInstrumentsQuery, useGetProductsQuery, } from '../../../services/apexApi';
import { openPositionsAdapter, useGetMarginPositionsQuery, useLazyGetMarginPositionsQuery, } from '../../../services/marginApi';
import { useMarginAccount } from '../../Margin';
import { createMarginPositionItem } from './createMarginPositionItem';
export const useOpenMarginPositions = (props) => {
    const { data: instruments, isLoading: isInstrumentsLoading } = useGetInstrumentsQuery();
    const { data: products } = useGetProductsQuery();
    const { data: marginAccount, isLoading: isLoadingAccount } = useMarginAccount();
    const { notionalProduct } = useNotionalProduct();
    const { data, originalArgs, isLoading: isPositionsLoading, isUninitialized, refetch, } = useGetMarginPositionsQuery(marginAccount?.AccountId && !isInstrumentsLoading
        ? {
            accountId: marginAccount.AccountId,
            depth: props.depth,
            instrumentId: props.instrumentId,
            resetCache: true,
        }
        : skipToken, {
        selectFromResult: ({ data: res, ...rest }) => ({
            data: {
                ...res,
                positions: openPositionsAdapter
                    .getSelectors()
                    .selectAll(res?.items ?? openPositionsAdapter.getInitialState())
                    .map(item => createMarginPositionItem(item, instruments || [], products || [], notionalProduct)),
            },
            ...rest,
        }),
    });
    const [getOpenPositions] = useLazyGetMarginPositionsQuery();
    const isLoading = isPositionsLoading || isLoadingAccount || isInstrumentsLoading;
    const isRefetching = isLoading && !!data?.positions?.length && !originalArgs?.offset;
    const loadMore = useCallback(() => {
        if (!isLoading && data?.hasMore && marginAccount?.AccountId) {
            getOpenPositions({
                accountId: marginAccount.AccountId,
                offset: data?.positions?.length,
                depth: props.depth,
                instrumentId: props.instrumentId,
            });
        }
    }, [
        isLoading,
        data?.hasMore,
        data?.positions?.length,
        marginAccount?.AccountId,
        getOpenPositions,
        props.depth,
        props.instrumentId,
    ]);
    return {
        positions: data.positions,
        isLoading,
        isRefetching,
        isUninitialized,
        hasMore: !!data?.hasMore,
        loadMore,
        refetch,
    };
};
