import { TransferFormValues } from '../types';
export declare function useAccountsTranferFunds(): readonly [
  (values: TransferFormValues) => Promise<{
    result: boolean;
    transferId?: number | undefined;
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
              senderAccountId: number;
              receiverAccountId?: number | undefined;
              recipientEmail?: string | undefined;
              productId: number;
              note: string;
              amount: number;
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
                transferId?: number | undefined;
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
                    transferId?: number | undefined;
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
                senderAccountId: number;
                receiverAccountId?: number | undefined;
                recipientEmail?: string | undefined;
                productId: number;
                note: string;
                amount: number;
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
              transferId?: number | undefined;
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
              senderAccountId: number;
              receiverAccountId?: number | undefined;
              recipientEmail?: string | undefined;
              productId: number;
              note: string;
              amount: number;
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
                transferId?: number | undefined;
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
                    transferId?: number | undefined;
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
                senderAccountId: number;
                receiverAccountId?: number | undefined;
                recipientEmail?: string | undefined;
                productId: number;
                note: string;
                amount: number;
              }
            | undefined;
          reset: () => void;
        })
  ),
];
