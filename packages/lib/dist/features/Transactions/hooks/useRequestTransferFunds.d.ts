import { ReceiveFormValues } from '../types';
export declare function useRequestTransferFunds(): readonly [
  (
    values: ReceiveFormValues & {
      type: 'transfer';
    },
  ) => Promise<{
    result: boolean;
    errormsg?: string | undefined;
  }>,
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
              ReceiverUsername: string;
              Notes: string;
              Amount: number;
              ProductId?: string | number | undefined;
            }
          | undefined;
        reset: () => void;
      })
    | ({
        status: import('@reduxjs/toolkit/query').QueryStatus.fulfilled;
      } & Omit<
        {
          requestId: string;
          data?:
            | {
                result: boolean;
                errormsg?: string | undefined;
              }
            | undefined;
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
              data?:
                | {
                    result: boolean;
                    errormsg?: string | undefined;
                  }
                | undefined;
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
                ReceiverUsername: string;
                Notes: string;
                Amount: number;
                ProductId?: string | number | undefined;
              }
            | undefined;
          reset: () => void;
        })
    | ({
        status: import('@reduxjs/toolkit/query').QueryStatus.pending;
      } & {
        requestId: string;
        data?:
          | {
              result: boolean;
              errormsg?: string | undefined;
            }
          | undefined;
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
              ReceiverUsername: string;
              Notes: string;
              Amount: number;
              ProductId?: string | number | undefined;
            }
          | undefined;
        reset: () => void;
      })
    | ({
        status: import('@reduxjs/toolkit/query').QueryStatus.rejected;
      } & Omit<
        {
          requestId: string;
          data?:
            | {
                result: boolean;
                errormsg?: string | undefined;
              }
            | undefined;
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
              data?:
                | {
                    result: boolean;
                    errormsg?: string | undefined;
                  }
                | undefined;
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
                ReceiverUsername: string;
                Notes: string;
                Amount: number;
                ProductId?: string | number | undefined;
              }
            | undefined;
          reset: () => void;
        })
  ),
];
