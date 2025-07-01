export declare function useMarginAccount(): import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQueryHookResult<
  import('@reduxjs/toolkit/query').QueryDefinition<
    void,
    import('@reduxjs/toolkit/query').BaseQueryFn<
      string | import('@reduxjs/toolkit/query').FetchArgs,
      unknown,
      import('@reduxjs/toolkit/query').FetchBaseQueryError
    >,
    string,
    import('../../../types').GetAccountInfoResponse[],
    'apexApi'
  >,
  | {
      status: import('@reduxjs/toolkit/query').QueryStatus.uninitialized;
      error?: undefined;
      fulfilledTimeStamp?: undefined;
      originalArgs?: undefined;
      requestId?: undefined;
      endpointName?: string | undefined;
      startedTimeStamp?: undefined;
      isLoading: false;
      currentData?:
        | import('../../../types').GetAccountInfoResponse[]
        | undefined;
      isFetching: false;
      isSuccess: false;
      isError: false;
      isUninitialized: true;
      data: import('../../../types').GetAccountInfoResponse | undefined;
    }
  | {
      status: import('@reduxjs/toolkit/query').QueryStatus;
      error?:
        | import('@reduxjs/toolkit/query').FetchBaseQueryError
        | import('@reduxjs/toolkit').SerializedError
        | undefined;
      fulfilledTimeStamp?: number | undefined;
      originalArgs?: void | undefined;
      requestId?: string | undefined;
      endpointName?: string | undefined;
      startedTimeStamp?: number | undefined;
      currentData?:
        | import('../../../types').GetAccountInfoResponse[]
        | undefined;
      isUninitialized: false;
      isSuccess: false;
      isError: false;
      isLoading: true;
      isFetching: boolean;
      data: import('../../../types').GetAccountInfoResponse | undefined;
    }
  | {
      status: import('@reduxjs/toolkit/query').QueryStatus;
      originalArgs?: void | undefined;
      requestId?: string | undefined;
      endpointName?: string | undefined;
      startedTimeStamp?: number | undefined;
      isLoading: false;
      currentData?:
        | import('../../../types').GetAccountInfoResponse[]
        | undefined;
      isUninitialized: false;
      isError: false;
      isSuccess: true;
      isFetching: true;
      error: undefined;
      fulfilledTimeStamp: number;
      data: import('../../../types').GetAccountInfoResponse | undefined;
    }
  | {
      status: import('@reduxjs/toolkit/query').QueryStatus;
      originalArgs?: void | undefined;
      requestId?: string | undefined;
      endpointName?: string | undefined;
      startedTimeStamp?: number | undefined;
      isLoading: false;
      isUninitialized: false;
      isError: false;
      isSuccess: true;
      isFetching: false;
      error: undefined;
      fulfilledTimeStamp: number;
      currentData: import('../../../types').GetAccountInfoResponse[];
      data: import('../../../types').GetAccountInfoResponse | undefined;
    }
  | {
      status: import('@reduxjs/toolkit/query').QueryStatus;
      fulfilledTimeStamp?: number | undefined;
      originalArgs?: void | undefined;
      requestId?: string | undefined;
      endpointName?: string | undefined;
      startedTimeStamp?: number | undefined;
      isLoading: false;
      currentData?:
        | import('../../../types').GetAccountInfoResponse[]
        | undefined;
      isUninitialized: false;
      isFetching: false;
      isSuccess: false;
      isError: true;
      error:
        | import('@reduxjs/toolkit/query').FetchBaseQueryError
        | import('@reduxjs/toolkit').SerializedError;
      data: import('../../../types').GetAccountInfoResponse | undefined;
    }
>;
