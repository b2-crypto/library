export declare const useUserTransferRequests: () => {
  data:
    | {
        requestCode: string;
        symbol: string;
        amount: number;
        decimalPlaces: number;
        note: string;
        requestorUsername: string;
        date: string;
      }[]
    | undefined;
  isLoading: boolean;
  refetch: () => import('@reduxjs/toolkit/query').QueryActionCreatorResult<
    import('@reduxjs/toolkit/query').QueryDefinition<
      {
        AccountId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../../../types').TransferRequest[],
      'apexApi'
    >
  >;
};
