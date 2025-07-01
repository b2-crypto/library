import {
  AccountTransactionActivity,
  OrderActivity,
  WalletActivity,
} from '../types/apiResponses';
import { ActivityResponse } from '../helpers/activity';
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
export declare const useGetOpenOrdersQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      ActivityInstrumentRequest,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<OrderActivity>,
      'apexApi'
    >
  >,
  useLazyGetOpenOrdersQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseLazyQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      ActivityInstrumentRequest,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<OrderActivity>,
      'apexApi'
    >
  >,
  useGetDepositTicketsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      ActivityProductRequest,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<WalletActivity>,
      'apexApi'
    >
  >,
  useLazyGetDepositTicketsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseLazyQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      ActivityProductRequest,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<WalletActivity>,
      'apexApi'
    >
  >,
  useGetWithdrawTicketsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      ActivityProductRequest,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<WalletActivity>,
      'apexApi'
    >
  >,
  useLazyGetWithdrawTicketsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseLazyQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      ActivityProductRequest,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<WalletActivity>,
      'apexApi'
    >
  >,
  useGetAccountTradesQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      ActivityInstrumentRequest,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<OrderActivity>,
      'apexApi'
    >
  >,
  useLazyGetAccountTradesQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseLazyQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      ActivityInstrumentRequest,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<OrderActivity>,
      'apexApi'
    >
  >,
  useGetAccountTransactionsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      ActivityProductRequest,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<AccountTransactionActivity>,
      'apexApi'
    >
  >,
  useLazyGetAccountTransactionsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseLazyQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      ActivityProductRequest,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<AccountTransactionActivity>,
      'apexApi'
    >
  >,
  useGetOrdersHistoryQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      ActivityInstrumentRequest,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<OrderActivity>,
      'apexApi'
    >
  >,
  useLazyGetOrdersHistoryQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseLazyQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      ActivityInstrumentRequest,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<OrderActivity>,
      'apexApi'
    >
  >;
export {};
