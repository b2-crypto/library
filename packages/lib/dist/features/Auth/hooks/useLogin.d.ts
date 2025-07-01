import { AuthResponseType } from '../../../types/apiResponses';
import { LogInFormData } from '../types';
export declare const useLogin: () => readonly [
  (formData: LogInFormData) => Promise<AuthResponseType>,
  {
    readonly isLoading: boolean;
    readonly isError: boolean;
    readonly error:
      | import('@reduxjs/toolkit/query').FetchBaseQueryError
      | import('@reduxjs/toolkit').SerializedError
      | undefined;
  },
];
