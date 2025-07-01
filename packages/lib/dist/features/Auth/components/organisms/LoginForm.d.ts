import React from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';
import { LogInFormData } from '../../types';
type LoginFormProps = {
  /** Form submission handler */
  onSubmit: (formData: LogInFormData) => void;
  /** Error message for submission */
  error?: FetchBaseQueryError | SerializedError;
};
export declare const LoginForm: ({
  onSubmit,
  error,
}: LoginFormProps) => React.JSX.Element;
export {};
