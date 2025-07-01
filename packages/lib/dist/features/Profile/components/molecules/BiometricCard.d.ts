import React from 'react';
type Props = {
  /** Initial state for the biometric auth configuration */
  initialValue?: boolean;
  /** Handler to save the value */
  onSubmit: (value: boolean) => void;
};
export declare const BiometricCard: ({
  initialValue,
  onSubmit,
}: Props) => React.JSX.Element;
export {};
