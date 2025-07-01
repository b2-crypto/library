export declare function useOrderProducts(): import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQueryHookResult<
  import('@reduxjs/toolkit/query').QueryDefinition<
    {
      accountId: number;
      includePending?: boolean | undefined;
      hideSmallAmounts?: boolean | undefined;
    },
    import('@reduxjs/toolkit/query').BaseQueryFn<
      string | import('@reduxjs/toolkit/query').FetchArgs,
      unknown,
      import('@reduxjs/toolkit/query').FetchBaseQueryError
    >,
    string,
    import('../../../types').IAccountPosition[],
    'apexApi'
  >,
  {
    product1:
      | {
          id: number;
          symbol: string;
          amount: number;
          decimalPlaces: number;
        }
      | undefined;
    product2:
      | {
          id: number;
          symbol: string;
          amount: number;
          decimalPlaces: number;
        }
      | undefined;
  }
>;
