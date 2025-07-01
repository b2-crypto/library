export declare const useUserInfo: (
  skipQuery?: boolean,
) => import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQueryHookResult<
  import('@reduxjs/toolkit/query').QueryDefinition<
    (
      | {
          userId: number;
        }
      | {
          userName: string;
        }
    ) & {
      token?: string | undefined;
    },
    import('@reduxjs/toolkit/query').BaseQueryFn<
      string | import('@reduxjs/toolkit/query').FetchArgs,
      unknown,
      import('@reduxjs/toolkit/query').FetchBaseQueryError
    >,
    string,
    import('../types').UserInfoResponse,
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
          currentData?: import('../types').UserInfoResponse | undefined;
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
            (
              | {
                  userId: number;
                }
              | {
                  userName: string;
                }
            ) & {
              token?: string | undefined;
            },
            import('@reduxjs/toolkit/query').BaseQueryFn<
              string | import('@reduxjs/toolkit/query').FetchArgs,
              unknown,
              import('@reduxjs/toolkit/query').FetchBaseQueryError
            >,
            string,
            import('../types').UserInfoResponse,
            'apexApi'
          >
        > & {
          currentData?: import('../types').UserInfoResponse | undefined;
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
                  (
                    | {
                        userId: number;
                      }
                    | {
                        userName: string;
                      }
                  ) & {
                    token?: string | undefined;
                  },
                  import('@reduxjs/toolkit/query').BaseQueryFn<
                    string | import('@reduxjs/toolkit/query').FetchArgs,
                    unknown,
                    import('@reduxjs/toolkit/query').FetchBaseQueryError
                  >,
                  string,
                  import('../types').UserInfoResponse,
                  'apexApi'
                >
              > & {
                currentData?: import('../types').UserInfoResponse | undefined;
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
                  (
                    | {
                        userId: number;
                      }
                    | {
                        userName: string;
                      }
                  ) & {
                    token?: string | undefined;
                  },
                  import('@reduxjs/toolkit/query').BaseQueryFn<
                    string | import('@reduxjs/toolkit/query').FetchArgs,
                    unknown,
                    import('@reduxjs/toolkit/query').FetchBaseQueryError
                  >,
                  string,
                  import('../types').UserInfoResponse,
                  'apexApi'
                >
              > & {
                currentData?: import('../types').UserInfoResponse | undefined;
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
                  (
                    | {
                        userId: number;
                      }
                    | {
                        userName: string;
                      }
                  ) & {
                    token?: string | undefined;
                  },
                  import('@reduxjs/toolkit/query').BaseQueryFn<
                    string | import('@reduxjs/toolkit/query').FetchArgs,
                    unknown,
                    import('@reduxjs/toolkit/query').FetchBaseQueryError
                  >,
                  string,
                  import('../types').UserInfoResponse,
                  'apexApi'
                >
              > & {
                currentData?: import('../types').UserInfoResponse | undefined;
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
