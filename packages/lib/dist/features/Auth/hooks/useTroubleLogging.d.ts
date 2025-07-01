import { FormValues } from '../types';
export declare const useTroubleLogging: () => readonly [
  (formData: FormValues) => Promise<void>,
  {
    readonly resendError:
      | import('@reduxjs/toolkit/query').FetchBaseQueryError
      | import('@reduxjs/toolkit').SerializedError
      | undefined;
    readonly resetError:
      | import('@reduxjs/toolkit/query').FetchBaseQueryError
      | import('@reduxjs/toolkit').SerializedError
      | undefined;
    readonly isLoading: boolean;
  },
];
