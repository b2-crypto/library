import {
  AccountTradeItem,
  AccountTransaction,
  AccountTransactionActivity,
  DepositTicket,
  OpenOrderItem,
  OrderActivity,
  OrderHistoryResponse,
  WalletActivity,
  WithdrawTicket,
} from '../types/apiResponses';
import {
  accountTradesAdapter,
  depositTicketsAdapter,
  openOrdersAdapter,
  cancelledOrdersAdapter,
  withdrawTicketsAdapter,
  ActivityResponse,
  activityTransform,
  activityQueryProps,
  mapAccountTransactionToActivityItem,
  mapOrderItemToActivity,
  mapAccountTradeToActivity,
  mapDepositToActivity,
  mapWithdrawToActivity,
  accountTransactionsAdapter,
} from '../helpers/activity';

import { apexApi, TAGS } from './apexApi';

type ActivityInstrumentRequest = {
  accountId: number;
  depth?: number;
  offset?: number;
  instrumentId?: number;
  resetCache?: boolean;
};

type ActivityProductRequest = {
  accountId: number;
  depth?: number;
  offset?: number;
  productId?: number;
  resetCache?: boolean;
  refTypes?: Array<string>;
};

const activityApi = apexApi.injectEndpoints({
  endpoints: builder => ({
    GetOpenOrders: builder.query<
      ActivityResponse<OrderActivity>,
      ActivityInstrumentRequest
    >({
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
      transformResponse: (arr: Array<OpenOrderItem>, ...props) =>
        activityTransform<OrderActivity>(
          openOrdersAdapter,
          mapOrderItemToActivity(arr),
          ...props,
        ),
      ...activityQueryProps(openOrdersAdapter),
    }),
    GetAccountTrades: builder.query<
      ActivityResponse<OrderActivity>,
      ActivityInstrumentRequest
    >({
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
      transformResponse: (arr: Array<AccountTradeItem>, ...props) =>
        activityTransform<OrderActivity>(
          accountTradesAdapter,
          mapAccountTradeToActivity(arr),
          ...props,
        ),
      ...activityQueryProps(accountTradesAdapter),
    }),
    GetDepositTickets: builder.query<
      ActivityResponse<WalletActivity>,
      ActivityProductRequest
    >({
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
      transformResponse: (arr: Array<DepositTicket>, ...props) =>
        activityTransform<WalletActivity>(
          depositTicketsAdapter,
          mapDepositToActivity(arr),
          ...props,
        ),
      ...activityQueryProps(depositTicketsAdapter),
    }),
    GetWithdrawTickets: builder.query<
      ActivityResponse<WalletActivity>,
      ActivityProductRequest
    >({
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
      transformResponse: (arr: Array<WithdrawTicket>, ...props) =>
        activityTransform<WalletActivity>(
          withdrawTicketsAdapter,
          mapWithdrawToActivity(arr),
          ...props,
        ),
      ...activityQueryProps(withdrawTicketsAdapter),
    }),
    GetAccountTransactions: builder.query<
      ActivityResponse<AccountTransactionActivity>,
      ActivityProductRequest
    >({
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
      transformResponse: (arr: Array<AccountTransaction>, ...props) =>
        activityTransform<AccountTransactionActivity>(
          accountTransactionsAdapter,
          mapAccountTransactionToActivityItem(arr),
          ...props,
        ),
      ...activityQueryProps(accountTransactionsAdapter),
    }),
    getOrdersHistory: builder.query<
      ActivityResponse<OrderActivity>,
      ActivityInstrumentRequest
    >({
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
      transformResponse: (arr: OrderHistoryResponse, ...props) =>
        activityTransform<OrderActivity>(
          cancelledOrdersAdapter,
          mapOrderItemToActivity(arr),
          ...props,
        ),
      ...activityQueryProps(cancelledOrdersAdapter),
    }),
  }),
});

export const {
  useGetOpenOrdersQuery,
  useLazyGetOpenOrdersQuery,
  useGetDepositTicketsQuery,
  useLazyGetDepositTicketsQuery,
  useGetWithdrawTicketsQuery,
  useLazyGetWithdrawTicketsQuery,
  useGetAccountTradesQuery,
  useLazyGetAccountTradesQuery,
  useGetAccountTransactionsQuery,
  useLazyGetAccountTransactionsQuery,
  useGetOrdersHistoryQuery,
  useLazyGetOrdersHistoryQuery,
} = activityApi;
