export declare const useAccountTransactions: (props: {
  depth?: number;
  productId?: number;
}) => {
  accountTransactions: {
    decimalPlaces: number | undefined;
    currency: string | undefined;
    iconSymbol: string | undefined;
    symbol: string | undefined;
    fullName: string | undefined;
    notionalSymbol: string | undefined;
    notionalRate: number | undefined;
    notionalPlaces: number | undefined;
    type: import('../../../types').AccountTransactionType;
    status: 'complete';
    referenceType: import('../../../types').ReferenceType;
    transactionType: import('../../../types').TransactionType;
    isCR: boolean;
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
        productId?: number | undefined;
        resetCache?: boolean | undefined;
        refTypes?: string[] | undefined;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../../../helpers/activity').ActivityResponse<
        import('../../../types').AccountTransactionActivity
      >,
      'apexApi'
    >
  >;
};
