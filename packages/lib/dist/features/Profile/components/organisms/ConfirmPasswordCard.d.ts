import React from 'react';
type Props = {
  loading?: boolean;
  onSubmit: (password: string) => void;
  error?: string;
};
export declare const ConfirmPasswordCard: ({
  onSubmit,
  loading,
  error,
}: Props) => React.JSX.Element;
export {};
