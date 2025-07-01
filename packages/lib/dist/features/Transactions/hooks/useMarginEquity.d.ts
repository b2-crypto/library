import { useGetMarginAccountEquityQuery } from '../../../services';
type Selector = NonNullable<
  Parameters<typeof useGetMarginAccountEquityQuery>[1]
>['selectFromResult'];
export declare function useMarginEquity(
  selector?: Selector,
): import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQueryHookResult<
  import('@reduxjs/toolkit/query').QueryDefinition<
    import('../../../services').MarginAccountEquityArgs,
    import('@reduxjs/toolkit/query').BaseQueryFn<
      string | import('@reduxjs/toolkit/query').FetchArgs,
      unknown,
      import('@reduxjs/toolkit/query').FetchBaseQueryError
    >,
    string,
    import('../../../services').MarginAccountEquityResponse,
    'apexApi'
  >,
  Record<string, any>
>;
export {};
