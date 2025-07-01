import { accountTradesAdapter, depositTicketsAdapter, openOrdersAdapter, cancelledOrdersAdapter, withdrawTicketsAdapter, activityTransform, activityQueryProps, mapAccountTransactionToActivityItem, mapOrderItemToActivity, mapAccountTradeToActivity, mapDepositToActivity, mapWithdrawToActivity, accountTransactionsAdapter, } from '../helpers/activity';
import { apexApi, TAGS } from './apexApi';
const activityApi = apexApi.injectEndpoints({
    endpoints: builder => ({
        GetOpenOrders: builder.query({
            providesTags: [TAGS.OPEN_ORDERS],
            query: ({ accountId, instrumentId, depth = 25, offset = 0 }) => ({
                url: '/GetOpenOrders',
                method: 'POST',
                body: {
                    OMSId: 1,
                    AccountId: accountId,
                    Limit: depth,
                    StartIndex: offset,
                    InstrumentId: instrumentId,
                },
            }),
            transformResponse: (arr, ...props) => activityTransform(openOrdersAdapter, mapOrderItemToActivity(arr), ...props),
            ...activityQueryProps(openOrdersAdapter),
        }),
        GetAccountTrades: builder.query({
            query: ({ accountId, instrumentId, depth = 25, offset = 0 }) => ({
                url: '/GetAccountTrades',
                method: 'POST',
                body: {
                    OMSId: 1,
                    AccountId: accountId,
                    Count: depth,
                    StartIndex: offset,
                    InstrumentId: instrumentId,
                },
            }),
            transformResponse: (arr, ...props) => activityTransform(accountTradesAdapter, mapAccountTradeToActivity(arr), ...props),
            ...activityQueryProps(accountTradesAdapter),
        }),
        GetDepositTickets: builder.query({
            query: ({ accountId, productId, depth = 25, offset = 0 }) => ({
                url: '/GetDepositTickets',
                method: 'POST',
                body: {
                    OMSId: 1,
                    OperatorId: 1,
                    AccountId: accountId,
                    Limit: depth,
                    StartIndex: offset,
                    ProductId: productId,
                },
            }),
            transformResponse: (arr, ...props) => activityTransform(depositTicketsAdapter, mapDepositToActivity(arr), ...props),
            ...activityQueryProps(depositTicketsAdapter),
        }),
        GetWithdrawTickets: builder.query({
            query: ({ accountId, productId, depth = 25, offset = 0 }) => ({
                url: '/GetWithdrawTickets',
                method: 'POST',
                body: {
                    OMSId: 1,
                    OperatorId: 1,
                    AccountId: accountId,
                    Limit: depth,
                    StartIndex: offset,
                    ProductId: productId,
                },
            }),
            transformResponse: (arr, ...props) => activityTransform(withdrawTicketsAdapter, mapWithdrawToActivity(arr), ...props),
            ...activityQueryProps(withdrawTicketsAdapter),
        }),
        GetAccountTransactions: builder.query({
            query: ({ accountId, productId, depth = 25, offset = 0, refTypes }) => ({
                url: '/GetAccountTransactions',
                method: 'POST',
                body: {
                    OMSId: 1,
                    OperatorId: 1,
                    AccountId: accountId,
                    Depth: depth,
                    StartIndex: offset,
                    ProductId: productId,
                    TransactionReferenceTypes: refTypes,
                },
            }),
            transformResponse: (arr, ...props) => activityTransform(accountTransactionsAdapter, mapAccountTransactionToActivityItem(arr), ...props),
            ...activityQueryProps(accountTransactionsAdapter),
        }),
        getOrdersHistory: builder.query({
            providesTags: [TAGS.CANCELLED_ORDERS],
            query: ({ accountId, instrumentId, depth = 25, offset = 0 }) => ({
                url: '/GetOrderHistory',
                method: 'POST',
                body: {
                    OMSId: 1,
                    AccountId: accountId,
                    InstrumentId: instrumentId,
                    StartIndex: offset,
                    Depth: depth,
                    // StartTimeStamp: 0,
                    // EndTimeStamp: 0,
                },
            }),
            transformResponse: (arr, ...props) => activityTransform(cancelledOrdersAdapter, mapOrderItemToActivity(arr), ...props),
            ...activityQueryProps(cancelledOrdersAdapter),
        }),
    }),
});
export const { useGetOpenOrdersQuery, useLazyGetOpenOrdersQuery, useGetDepositTicketsQuery, useLazyGetDepositTicketsQuery, useGetWithdrawTicketsQuery, useLazyGetWithdrawTicketsQuery, useGetAccountTradesQuery, useLazyGetAccountTradesQuery, useGetAccountTransactionsQuery, useLazyGetAccountTransactionsQuery, useGetOrdersHistoryQuery, useLazyGetOrdersHistoryQuery, } = activityApi;
