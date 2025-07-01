import { createEntityAdapter } from '@reduxjs/toolkit';
import { activityQueryProps, activityTransform, } from '../helpers/activity';
import { TAGS, apexApi } from './apexApi';
export const openPositionsAdapter = createEntityAdapter({
    selectId: item => item.PositionId,
    sortComparer: (a, b) => new Date(b.DateOpened).valueOf() - new Date(a.DateOpened).valueOf(),
});
export const closedPositionsAdapter = createEntityAdapter({
    selectId: item => item.PositionId,
    sortComparer: (a, b) => new Date(b.DateClosed).valueOf() - new Date(a.DateClosed).valueOf(),
});
export const marginApi = apexApi.injectEndpoints({
    endpoints: builder => ({
        getMarginKVP: builder.query({
            queryFn: async (_args, _api, _extraOptions, baseQuery) => {
                const marginVL = await baseQuery({
                    url: '/GetGeneralKVP',
                    method: 'POST',
                    body: { Key: 'MarginVerificationLevels' },
                });
                const minDepositValue = await baseQuery({
                    url: '/GetGeneralKVP',
                    method: 'POST',
                    body: { Key: 'MarginMinimumAccountValue' },
                });
                if (!('data' in marginVL) || !('data' in minDepositValue)) {
                    return {
                        error: marginVL.error ?? minDepositValue.error,
                    };
                }
                const levels = marginVL.data.Value.split(',')
                    .map(l => {
                    if (l.includes('-')) {
                        const [min, max] = l.split('-').map(Number);
                        return Array.from({ length: max - min + 1 }, (_, i) => min + i);
                    }
                    return Number(l);
                })
                    .flat();
                return {
                    data: {
                        marginVerificationLevels: levels,
                        minDepositValue: minDepositValue.data.Value || 0,
                    },
                };
            },
        }),
        requestMarginAccount: builder.mutation({
            query: () => ({
                url: '/RequestMarginAccount',
                method: 'POST',
                body: {},
                validateStatus(response, body) {
                    return response.status === 200 && !!body.AccountId;
                },
            }),
            invalidatesTags: [TAGS.USER_ACCOUNTS, TAGS.SUMMARY_BALANCES],
        }),
        GetAccountPositionSummary: builder.query({
            query: ({ accountId }) => ({
                url: '/GetAccountPositionSummary',
                method: 'POST',
                body: { OMSId: 1, AccountId: accountId },
            }),
            providesTags: [TAGS.SUMMARY_BALANCES],
        }),
        GetMarginAccountInfo: builder.query({
            query: ({ accountId }) => ({
                url: '/GetMarginAccountInfo',
                method: 'POST',
                body: { OMSId: 1, AccountId: accountId },
            }),
        }),
        getAllMarginProductsConfigs: builder.query({
            query: () => ({
                url: '/GetAllMarginProductConfigs',
                method: 'POST',
                body: { OMSId: 1 },
            }),
        }),
        getAllMarginInstrumentConfigs: builder.query({
            query: () => ({
                url: '/GetAllMarginInstrumentConfigs',
                method: 'POST',
                body: { OMSId: 1 },
            }),
        }),
        getMarginPositions: builder.query({
            providesTags: [TAGS.OPEN_MARGIN_POSITIONS],
            query: ({ accountId, instrumentId, offset, depth }) => ({
                url: '/GetMarginPositions',
                method: 'POST',
                body: {
                    OMSId: 1,
                    AccountId: accountId,
                    PositionInstrumentId: instrumentId,
                    StartIndex: offset,
                    Limit: depth,
                },
            }),
            transformResponse: (arr, ...props) => activityTransform(openPositionsAdapter, arr, ...props),
            ...activityQueryProps(openPositionsAdapter),
        }),
        getAccountMarginBalances: builder.query({
            query: ({ accountId, hideSmallAmounts }) => ({
                url: '/GetAccountMarginBalances',
                method: 'POST',
                body: {
                    OMSId: 1,
                    AccountId: accountId,
                    HideSmallAmounts: hideSmallAmounts,
                },
            }),
        }),
        getMarginAccountEquity: builder.query({
            query: payload => ({
                url: '/GetMarginAccountEquity',
                method: 'POST',
                body: {
                    OMSId: 1,
                    ...payload,
                },
            }),
        }),
        getMarginPositionHistory: builder.query({
            providesTags: [TAGS.CLOSED_MARGIN_POSITIONS],
            query: ({ accountId, instrumentId, depth = 25, offset = 0 }) => ({
                url: '/GetMarginPositionHistory',
                method: 'POST',
                body: {
                    OMSId: 1,
                    AccountId: accountId,
                    PositionInstrumentId: instrumentId,
                    StartIndex: offset,
                    Limit: depth,
                    // BorrowProductId?: number;
                    // StartTimestamp?: string;
                    // EndTimestamp?: string;
                },
            }),
            transformResponse: (arr, ...props) => activityTransform(closedPositionsAdapter, arr, ...props),
            ...activityQueryProps(closedPositionsAdapter),
        }),
        cancelMarginPosition: builder.mutation({
            query: ({ AccountId, PositionId, PositionInstrumentId }) => ({
                url: '/CloseMarginPosition',
                method: 'POST',
                invalidatesTags: [TAGS.CLOSED_MARGIN_POSITIONS, TAGS.SUMMARY_BALANCES],
                body: {
                    AccountId,
                    PositionId,
                    PositionInstrumentId,
                },
                validateStatus(response, body) {
                    return response.status === 200 && body.result;
                },
            }),
        }),
        closeMarginPosition: builder.mutation({
            invalidatesTags: [TAGS.OPEN_MARGIN_POSITIONS, TAGS.SUMMARY_BALANCES],
            query: ({ AccountId, PositionId, PositionInstrumentId, RepaymentAssets, }) => ({
                url: '/CloseMarginPosition',
                method: 'POST',
                invalidatesTags: [TAGS.CLOSED_MARGIN_POSITIONS, TAGS.SUMMARY_BALANCES],
                body: {
                    AccountId,
                    PositionId,
                    PositionInstrumentId,
                    RepaymentAssets,
                },
                validateStatus(response, body) {
                    return response.status === 200 && body.result;
                },
            }),
        }),
        getRepaymentAssetOptions: builder.query({
            query: ({ AccountId, PositionId }) => ({
                url: '/GetRepaymentAssetOptions',
                method: 'POST',
                body: {
                    OMSId: 1,
                    AccountId,
                    PositionId,
                },
            }),
        }),
    }),
});
export const { useGetMarginKVPQuery, useRequestMarginAccountMutation, useGetMarginAccountInfoQuery, useGetAllMarginInstrumentConfigsQuery, useGetMarginPositionsQuery, useGetMarginPositionHistoryQuery, useLazyGetMarginPositionsQuery, useLazyGetMarginPositionHistoryQuery, useCloseMarginPositionMutation, useGetAccountPositionSummaryQuery, useGetAccountMarginBalancesQuery, useGetMarginAccountEquityQuery, useGetAllMarginProductsConfigsQuery, useGetRepaymentAssetOptionsQuery, useCancelMarginPositionMutation, } = marginApi;
