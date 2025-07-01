import React from 'react';
import { LogInFormData } from '../../types';
type LoginTabProps = {
  /** Callback when 2FA is required. Usually calls a navigation to a screen with 2FA code. */
  on2FARequired?: () => void;
  /** Callback when biometric setup is required. Usually calls a navigation to another screen. */
  onBiometricSetup?: (formData: LogInFormData) => void;
};
export declare const LoginTab: ({
  on2FARequired,
  onBiometricSetup,
}: LoginTabProps) => React.JSX.Element;
export {};
