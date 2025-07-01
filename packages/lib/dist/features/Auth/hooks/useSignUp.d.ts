import { SignUpFormData } from '../types';
export declare const useSignUp: () => readonly [
  (formData: SignUpFormData) => Promise<any>,
  {
    readonly error: string | undefined;
    readonly isLoading: boolean;
  },
];
