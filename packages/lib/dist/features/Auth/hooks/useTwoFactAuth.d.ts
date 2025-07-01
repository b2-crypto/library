import { AuthenticationFormData } from '../types';
export declare const useTwoFactAuth: () => readonly [
  (formData: AuthenticationFormData) => Promise<void>,
  {
    readonly isError: boolean;
    readonly isLoading: boolean;
  },
];
