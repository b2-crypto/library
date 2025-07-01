import React from 'react';
type Props = {
  /** Callback when user agrees to enable biometric login */
  onConfirm: () => void;
  /** Callback when user rejects the prompt */
  onDiscard: () => void;
};
export declare const SetupBiometricModal: ({
  onConfirm,
  onDiscard,
}: Props) => React.JSX.Element;
export {};
