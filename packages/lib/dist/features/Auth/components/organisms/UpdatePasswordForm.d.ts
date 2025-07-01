import React from 'react';
import { UpdatePasswordFormData } from '../../types';
type UpdatePasswordFormProps = {
  /** Submission callback */
  onSubmit: (formData: UpdatePasswordFormData) => void;
  /** Submission error */
  error?: string;
  /** Submission loading state */
  isLoading?: boolean;
};
export declare const UpdatePasswordForm: ({
  onSubmit,
  error,
  isLoading,
}: UpdatePasswordFormProps) => React.JSX.Element;
export {};
