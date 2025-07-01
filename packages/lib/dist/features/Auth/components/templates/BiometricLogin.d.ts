import React from 'react';
type Props = {
  /** Screen title */
  headerText: string;
  /** Login loading state */
  isLoading?: boolean;
  /** Error message for login (optional) */
  error?: string;
  /** Handler to login with biometric auth */
  onConfirm: () => void;
  /** Discard handler */
  onDiscard: () => void;
};
export declare const BiometricLogin: ({
  headerText,
  isLoading,
  error,
  onConfirm,
  onDiscard,
}: Props) => React.JSX.Element;
export {};
