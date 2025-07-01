import { UpdatePasswordFormData } from '../types';
export declare const useUpdatePassword: () => readonly [
  (formData: UpdatePasswordFormData) => Promise<void>,
  (
    | {
        readonly error: string | undefined;
        readonly requestId?: undefined;
        readonly status: import('@reduxjs/toolkit/query').QueryStatus.uninitialized;
        readonly data?: undefined;
        readonly endpointName?: string | undefined;
        readonly startedTimeStamp?: undefined;
        readonly fulfilledTimeStamp?: undefined;
        readonly isUninitialized: true;
        readonly isLoading: false;
        readonly isSuccess: false;
        readonly isError: false;
        readonly originalArgs?:
          | import('../../../types/apiResponses').ResetPasswordType
          | undefined;
        readonly reset: () => void;
      }
    | {
        readonly error: string | undefined;
        readonly status: import('@reduxjs/toolkit/query').QueryStatus.fulfilled;
        readonly requestId: string;
        readonly endpointName: string;
        readonly startedTimeStamp: number;
        readonly data: import('../../../types/apiResponses').ResetPasswordResponseType;
        readonly fulfilledTimeStamp: number;
        readonly isUninitialized: false;
        readonly isLoading: false;
        readonly isSuccess: true;
        readonly isError: false;
        readonly originalArgs?:
          | import('../../../types/apiResponses').ResetPasswordType
          | undefined;
        readonly reset: () => void;
      }
    | {
        readonly error: string | undefined;
        readonly status: import('@reduxjs/toolkit/query').QueryStatus.pending;
        readonly requestId: string;
        readonly data?: undefined;
        readonly endpointName: string;
        readonly startedTimeStamp: number;
        readonly fulfilledTimeStamp?: number | undefined;
        readonly isUninitialized: false;
        readonly isLoading: true;
        readonly isSuccess: false;
        readonly isError: false;
        readonly originalArgs?:
          | import('../../../types/apiResponses').ResetPasswordType
          | undefined;
        readonly reset: () => void;
      }
    | {
        readonly error: string | undefined;
        readonly status: import('@reduxjs/toolkit/query').QueryStatus.rejected;
        readonly data?:
          | import('../../../types/apiResponses').ResetPasswordResponseType
          | undefined;
        readonly fulfilledTimeStamp?: number | undefined;
        readonly requestId: string;
        readonly endpointName: string;
        readonly startedTimeStamp: number;
        readonly isUninitialized: false;
        readonly isLoading: false;
        readonly isSuccess: false;
        readonly isError: true;
        readonly originalArgs?:
          | import('../../../types/apiResponses').ResetPasswordType
          | undefined;
        readonly reset: () => void;
      }
  ),
];
