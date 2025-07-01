export declare function useReceiveQR(
  productId?: number,
): import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQueryHookResult<
  import('@reduxjs/toolkit/query').QueryDefinition<
    {
      AccountId: number;
      ProductId: number;
      GenerateNewKey: boolean;
    },
    import('@reduxjs/toolkit/query').BaseQueryFn<
      string | import('@reduxjs/toolkit/query').FetchArgs,
      unknown,
      import('@reduxjs/toolkit/query').FetchBaseQueryError
    >,
    string,
    string,
    'apexApi'
  >,
  import('@reduxjs/toolkit/query').TSHelpersId<
    | (Omit<
        {
          status: import('@reduxjs/toolkit/query').QueryStatus.uninitialized;
          originalArgs?: undefined;
          data?: undefined;
          error?: undefined;
          requestId?: undefined;
          endpointName?: string | undefined;
          startedTimeStamp?: undefined;
          fulfilledTimeStamp?: undefined;
        } & {
          currentData?: string | undefined;
          isUninitialized: false;
          isLoading: false;
          isFetching: false;
          isSuccess: false;
          isError: false;
        },
        'isUninitialized'
      > & {
        isUninitialized: true;
      })
    | import('@reduxjs/toolkit/query').TSHelpersOverride<
        import('@reduxjs/toolkit/query').QuerySubState<
          import('@reduxjs/toolkit/query').QueryDefinition<
            {
              AccountId: number;
              ProductId: number;
              GenerateNewKey: boolean;
            },
            import('@reduxjs/toolkit/query').BaseQueryFn<
              string | import('@reduxjs/toolkit/query').FetchArgs,
              unknown,
              import('@reduxjs/toolkit/query').FetchBaseQueryError
            >,
            string,
            string,
            'apexApi'
          >
        > & {
          currentData?: string | undefined;
          isUninitialized: false;
          isLoading: false;
          isFetching: false;
          isSuccess: false;
          isError: false;
        },
        | {
            isLoading: true;
            isFetching: boolean;
            data: undefined;
          }
        | ({
            isSuccess: true;
            isFetching: true;
            error: undefined;
          } & Required<
            Pick<
              import('@reduxjs/toolkit/query').QuerySubState<
                import('@reduxjs/toolkit/query').QueryDefinition<
                  {
                    AccountId: number;
                    ProductId: number;
                    GenerateNewKey: boolean;
                  },
                  import('@reduxjs/toolkit/query').BaseQueryFn<
                    string | import('@reduxjs/toolkit/query').FetchArgs,
                    unknown,
                    import('@reduxjs/toolkit/query').FetchBaseQueryError
                  >,
                  string,
                  string,
                  'apexApi'
                >
              > & {
                currentData?: string | undefined;
                isUninitialized: false;
                isLoading: false;
                isFetching: false;
                isSuccess: false;
                isError: false;
              },
              'data' | 'fulfilledTimeStamp'
            >
          >)
        | ({
            isSuccess: true;
            isFetching: false;
            error: undefined;
          } & Required<
            Pick<
              import('@reduxjs/toolkit/query').QuerySubState<
                import('@reduxjs/toolkit/query').QueryDefinition<
                  {
                    AccountId: number;
                    ProductId: number;
                    GenerateNewKey: boolean;
                  },
                  import('@reduxjs/toolkit/query').BaseQueryFn<
                    string | import('@reduxjs/toolkit/query').FetchArgs,
                    unknown,
                    import('@reduxjs/toolkit/query').FetchBaseQueryError
                  >,
                  string,
                  string,
                  'apexApi'
                >
              > & {
                currentData?: string | undefined;
                isUninitialized: false;
                isLoading: false;
                isFetching: false;
                isSuccess: false;
                isError: false;
              },
              'data' | 'fulfilledTimeStamp' | 'currentData'
            >
          >)
        | ({
            isError: true;
          } & Required<
            Pick<
              import('@reduxjs/toolkit/query').QuerySubState<
                import('@reduxjs/toolkit/query').QueryDefinition<
                  {
                    AccountId: number;
                    ProductId: number;
                    GenerateNewKey: boolean;
                  },
                  import('@reduxjs/toolkit/query').BaseQueryFn<
                    string | import('@reduxjs/toolkit/query').FetchArgs,
                    unknown,
                    import('@reduxjs/toolkit/query').FetchBaseQueryError
                  >,
                  string,
                  string,
                  'apexApi'
                >
              > & {
                currentData?: string | undefined;
                isUninitialized: false;
                isLoading: false;
                isFetching: false;
                isSuccess: false;
                isError: false;
              },
              'error'
            >
          >)
      >
  > & {
    status: import('@reduxjs/toolkit/query').QueryStatus;
  }
>;
