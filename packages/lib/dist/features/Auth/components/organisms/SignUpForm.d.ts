import React from 'react';
import { SignUpFormData } from '../../types';
type SignUpFormProps = {
  /** Submit handler */
  onSubmit: (formData: SignUpFormData) => void;
  /** Submission error */
  error?: string;
  /** Submission loading indicator */
  isLoading?: boolean;
  /** Callback that will be called when user successfully registered */
  onSuccess?: () => void;
};
export declare const SignUpForm: ({
  error,
  isLoading,
  onSubmit,
  onSuccess,
}: SignUpFormProps) => React.JSX.Element;
export {};
