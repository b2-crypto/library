export declare const useAffiliate: () => {
  tag: string | undefined;
  tagCount: number | undefined;
  isLoading: boolean;
  refetchTag: () => import('@reduxjs/toolkit/query').QueryActionCreatorResult<
    import('@reduxjs/toolkit/query').QueryDefinition<
      {
        UserId: number;
        OMSId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        AffiliateTag: string;
        AffiliateId: number;
      },
      'apexApi'
    >
  >;
  setTag: (newTag: string) => Promise<void>;
  error:
    | import('@reduxjs/toolkit/query').FetchBaseQueryError
    | import('@reduxjs/toolkit').SerializedError
    | undefined;
};
