import React, { useCallback } from 'react';

import { useAppSelector, useBiometrics } from '../../../../hooks';
import { selectIsBioAuthenticated } from '../../../../stores/auth';
import { BiometricCard } from '../molecules';

type Props = {
  /** Callback to handle biometrics enabling */
  onEnable: () => void;
};

export const BiometricWidget = ({ onEnable }: Props) => {
  const biometricsType = useAppSelector(selectIsBioAuthenticated);

  const { isBiometricsEnabled, disableBiometrics } = useBiometrics();

  const handlePress = useCallback(
    async (value: boolean) => {
      value ? onEnable() : disableBiometrics();
    },
    [onEnable, disableBiometrics],
  );

  if (!biometricsType) {
    return null;
  }

  return (
    <BiometricCard initialValue={isBiometricsEnabled} onSubmit={handlePress} />
  );
};
