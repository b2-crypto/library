import React from 'react';
import { useStore } from 'react-redux';

import { useAppSelector, useBiometrics } from '../../../../hooks';
import {
  selectIsBioAuthenticated,
  setAuthenticated,
} from '../../../../stores/auth';
import { useLogin } from '../../hooks';
import { LogInFormData } from '../../types';
import { bootstrap } from '../../../../bootstrap';
import { RootState } from '../../../../stores/store';
import { LoginForm } from '../organisms';

type LoginTabProps = {
  /** Callback when 2FA is required. Usually calls a navigation to a screen with 2FA code. */
  on2FARequired?: () => void;
  /** Callback when biometric setup is required. Usually calls a navigation to another screen. */
  onBiometricSetup?: (formData: LogInFormData) => void;
};

export const LoginTab = ({
  on2FARequired,
  onBiometricSetup,
}: LoginTabProps) => {
  const store = useStore<RootState>();
  const isBiometricAvailable = useAppSelector(selectIsBioAuthenticated);
  const [onSubmit, { error }] = useLogin();
  const { isBiometricsEnabled, updatePassword } = useBiometrics();

  const handleSubmit = async (formData: LogInFormData) => {
    const result = await onSubmit(formData);
    if (result.Authenticated) {
      await bootstrap(store);
      if (result.Requires2FA) {
        on2FARequired?.();
      } else if (
        isBiometricAvailable &&
        typeof isBiometricsEnabled === 'undefined'
      ) {
        onBiometricSetup?.(formData);
      } else {
        updatePassword(formData);
        store.dispatch(setAuthenticated());
      }
    }
  };

  return <LoginForm onSubmit={handleSubmit} error={error} />;
};
