import React from 'react';
import { TwoFactorCardProps } from '../../types';
type Props = TwoFactorCardProps & {
  /** Callback on enable biometric */
  onEnableBiometric: () => void;
};
export declare const SecurityTab: ({
  onEnableBiometric,
  ...props
}: Props) => React.JSX.Element;
export {};
