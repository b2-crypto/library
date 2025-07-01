export declare function useCurrentOms(): import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQueryHookResult<
  import('@reduxjs/toolkit/query').QueryDefinition<
    {
      operatorId: number;
    },
    import('@reduxjs/toolkit/query').BaseQueryFn<
      string | import('@reduxjs/toolkit/query').FetchArgs,
      unknown,
      import('@reduxjs/toolkit/query').FetchBaseQueryError
    >,
    string,
    {
      BaseNotionalProductSymbol: string;
      BaseNotionalProductId: number;
      SystemMarginEnabled: boolean;
      Id: number;
      OMSId: number;
    }[],
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
        | {
            BaseNotionalProductSymbol: string;
            BaseNotionalProductId: number;
            SystemMarginEnabled: boolean;
            Id: number;
            OMSId: number;
          }[]
        | undefined;
      isFetching: false;
      isSuccess: false;
      isError: false;
      isUninitialized: true;
      data:
        | {
            BaseNotionalProductSymbol: string;
            BaseNotionalProductId: number;
            SystemMarginEnabled: boolean;
            Id: number;
            OMSId: number;
          }
        | undefined;
    }
  | {
      status: import('@reduxjs/toolkit/query').QueryStatus;
      error?:
        | import('@reduxjs/toolkit/query').FetchBaseQueryError
        | import('@reduxjs/toolkit').SerializedError
        | undefined;
      fulfilledTimeStamp?: number | undefined;
      originalArgs?:
        | {
            operatorId: number;
          }
        | undefined;
      requestId?: string | undefined;
      endpointName?: string | undefined;
      startedTimeStamp?: number | undefined;
      currentData?:
        | {
            BaseNotionalProductSymbol: string;
            BaseNotionalProductId: number;
            SystemMarginEnabled: boolean;
            Id: number;
            OMSId: number;
          }[]
        | undefined;
      isUninitialized: false;
      isSuccess: false;
      isError: false;
      isLoading: true;
      isFetching: boolean;
      data:
        | {
            BaseNotionalProductSymbol: string;
            BaseNotionalProductId: number;
            SystemMarginEnabled: boolean;
            Id: number;
            OMSId: number;
          }
        | undefined;
    }
  | {
      status: import('@reduxjs/toolkit/query').QueryStatus;
      originalArgs?:
        | {
            operatorId: number;
          }
        | undefined;
      requestId?: string | undefined;
      endpointName?: string | undefined;
      startedTimeStamp?: number | undefined;
      isLoading: false;
      currentData?:
        | {
            BaseNotionalProductSymbol: string;
            BaseNotionalProductId: number;
            SystemMarginEnabled: boolean;
            Id: number;
            OMSId: number;
          }[]
        | undefined;
      isUninitialized: false;
      isError: false;
      isSuccess: true;
      isFetching: true;
      error: undefined;
      fulfilledTimeStamp: number;
      data:
        | {
            BaseNotionalProductSymbol: string;
            BaseNotionalProductId: number;
            SystemMarginEnabled: boolean;
            Id: number;
            OMSId: number;
          }
        | undefined;
    }
  | {
      status: import('@reduxjs/toolkit/query').QueryStatus;
      originalArgs?:
        | {
            operatorId: number;
          }
        | undefined;
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
      currentData: {
        BaseNotionalProductSymbol: string;
        BaseNotionalProductId: number;
        SystemMarginEnabled: boolean;
        Id: number;
        OMSId: number;
      }[];
      data:
        | {
            BaseNotionalProductSymbol: string;
            BaseNotionalProductId: number;
            SystemMarginEnabled: boolean;
            Id: number;
            OMSId: number;
          }
        | undefined;
    }
  | {
      status: import('@reduxjs/toolkit/query').QueryStatus;
      fulfilledTimeStamp?: number | undefined;
      originalArgs?:
        | {
            operatorId: number;
          }
        | undefined;
      requestId?: string | undefined;
      endpointName?: string | undefined;
      startedTimeStamp?: number | undefined;
      isLoading: false;
      currentData?:
        | {
            BaseNotionalProductSymbol: string;
            BaseNotionalProductId: number;
            SystemMarginEnabled: boolean;
            Id: number;
            OMSId: number;
          }[]
        | undefined;
      isUninitialized: false;
      isFetching: false;
      isSuccess: false;
      isError: true;
      error:
        | import('@reduxjs/toolkit/query').FetchBaseQueryError
        | import('@reduxjs/toolkit').SerializedError;
      data:
        | {
            BaseNotionalProductSymbol: string;
            BaseNotionalProductId: number;
            SystemMarginEnabled: boolean;
            Id: number;
            OMSId: number;
          }
        | undefined;
    }
>;
