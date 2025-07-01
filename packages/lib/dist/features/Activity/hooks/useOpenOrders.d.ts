export declare const useOpenOrders: (props: {
  depth?: number;
  instrumentId?: number;
}) => {
  openOrders: {
    decimalPlaces: number | undefined;
    currency: string | undefined;
    iconSymbols: readonly [string, string] | undefined;
    fullName: string | undefined;
    symbol: string | undefined;
    type: import('../../../types').OrderType;
    status: import('../../../types').OrderState;
    side: import('../../../types').OrderSide;
    avgPrice: number;
    limitPrice?: number | undefined;
    id: number;
    amount: number;
    timestamp: number;
    instrumentId?: number | undefined;
    productId?: number | undefined;
  }[];
  isLoading: boolean;
  isRefetching: boolean;
  isUninitialized: boolean;
  hasMore: boolean;
  loadMore: () => void;
  refetch: () => import('@reduxjs/toolkit/query').QueryActionCreatorResult<
    import('@reduxjs/toolkit/query').QueryDefinition<
      {
        accountId: number;
        depth?: number | undefined;
        offset?: number | undefined;
        instrumentId?: number | undefined;
        resetCache?: boolean | undefined;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../../../helpers/activity').ActivityResponse<
        import('../../../types').OrderActivity
      >,
      'apexApi'
    >
  >;
};
