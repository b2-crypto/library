export declare function useCancelOrder(): readonly [
  (
    orderId: number,
  ) => import('@reduxjs/toolkit/query').MutationActionCreatorResult<
    import('@reduxjs/toolkit/query').MutationDefinition<
      {
        orderId: number;
        accountId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../../../types').ApexResponse,
      'apexApi'
    >
  >,
  (
    | ({
        requestId?: undefined;
        status: import('@reduxjs/toolkit/query').QueryStatus.uninitialized;
        data?: undefined;
        error?: undefined;
        endpointName?: string | undefined;
        startedTimeStamp?: undefined;
        fulfilledTimeStamp?: undefined;
      } & {
        status: import('@reduxjs/toolkit/query').QueryStatus.uninitialized;
        isUninitialized: true;
        isLoading: false;
        isSuccess: false;
        isError: false;
      } & {
        originalArgs?:
          | {
              orderId: number;
              accountId: number;
            }
          | undefined;
        reset: () => void;
      })
    | ({
        status: import('@reduxjs/toolkit/query').QueryStatus.fulfilled;
      } & Omit<
        {
          requestId: string;
          data?: import('../../../types').ApexResponse | undefined;
          error?:
            | import('@reduxjs/toolkit/query').FetchBaseQueryError
            | import('@reduxjs/toolkit').SerializedError
            | undefined;
          endpointName: string;
          startedTimeStamp: number;
          fulfilledTimeStamp?: number | undefined;
        },
        'data' | 'fulfilledTimeStamp'
      > &
        Required<
          Pick<
            {
              requestId: string;
              data?: import('../../../types').ApexResponse | undefined;
              error?:
                | import('@reduxjs/toolkit/query').FetchBaseQueryError
                | import('@reduxjs/toolkit').SerializedError
                | undefined;
              endpointName: string;
              startedTimeStamp: number;
              fulfilledTimeStamp?: number | undefined;
            },
            'data' | 'fulfilledTimeStamp'
          >
        > & {
          error: undefined;
        } & {
          status: import('@reduxjs/toolkit/query').QueryStatus.fulfilled;
          isUninitialized: false;
          isLoading: false;
          isSuccess: true;
          isError: false;
        } & {
          originalArgs?:
            | {
                orderId: number;
                accountId: number;
              }
            | undefined;
          reset: () => void;
        })
    | ({
        status: import('@reduxjs/toolkit/query').QueryStatus.pending;
      } & {
        requestId: string;
        data?: import('../../../types').ApexResponse | undefined;
        error?:
          | import('@reduxjs/toolkit/query').FetchBaseQueryError
          | import('@reduxjs/toolkit').SerializedError
          | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number | undefined;
      } & {
        data?: undefined;
      } & {
        status: import('@reduxjs/toolkit/query').QueryStatus.pending;
        isUninitialized: false;
        isLoading: true;
        isSuccess: false;
        isError: false;
      } & {
        originalArgs?:
          | {
              orderId: number;
              accountId: number;
            }
          | undefined;
        reset: () => void;
      })
    | ({
        status: import('@reduxjs/toolkit/query').QueryStatus.rejected;
      } & Omit<
        {
          requestId: string;
          data?: import('../../../types').ApexResponse | undefined;
          error?:
            | import('@reduxjs/toolkit/query').FetchBaseQueryError
            | import('@reduxjs/toolkit').SerializedError
            | undefined;
          endpointName: string;
          startedTimeStamp: number;
          fulfilledTimeStamp?: number | undefined;
        },
        'error'
      > &
        Required<
          Pick<
            {
              requestId: string;
              data?: import('../../../types').ApexResponse | undefined;
              error?:
                | import('@reduxjs/toolkit/query').FetchBaseQueryError
                | import('@reduxjs/toolkit').SerializedError
                | undefined;
              endpointName: string;
              startedTimeStamp: number;
              fulfilledTimeStamp?: number | undefined;
            },
            'error'
          >
        > & {
          status: import('@reduxjs/toolkit/query').QueryStatus.rejected;
          isUninitialized: false;
          isLoading: false;
          isSuccess: false;
          isError: true;
        } & {
          originalArgs?:
            | {
                orderId: number;
                accountId: number;
              }
            | undefined;
          reset: () => void;
        })
  ),
];
