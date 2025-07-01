export declare function useNotionalProduct(): import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQueryHookResult<
  import('@reduxjs/toolkit/query').QueryDefinition<
    void,
    import('@reduxjs/toolkit/query').BaseQueryFn<
      string | import('@reduxjs/toolkit/query').FetchArgs,
      unknown,
      import('@reduxjs/toolkit/query').FetchBaseQueryError
    >,
    string,
    import('../types').IProduct[],
    'apexApi'
  >,
  | {
      notionalProduct: import('../types').IProduct | undefined;
    }
  | {
      notionalProduct?: undefined;
    }
>;
