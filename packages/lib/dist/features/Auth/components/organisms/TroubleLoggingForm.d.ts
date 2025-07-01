import React from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { FormValues } from '../../types';
type TroubleLoggingFormProps = {
  /** Submission callback */
  onSubmit: (data: FormValues) => void;
  /** Loading state indicator */
  isLoading?: boolean;
  /** Error of the resend verification email request */
  resendError?: FetchBaseQueryError | SerializedError;
  /** Error of the reset password request */
  resetError?: FetchBaseQueryError | SerializedError;
};
export declare const TroubleLoggingForm: ({
  resendError,
  resetError,
  isLoading,
  onSubmit,
}: TroubleLoggingFormProps) => React.JSX.Element;
export {};
