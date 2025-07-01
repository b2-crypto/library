import React, { useCallback } from 'react';
import { useAppDispatch, useBiometrics } from '@apex-rn/library/hooks';
import { setAuthenticated } from '@apex-rn/library/stores';
import { SetupBiometricModal } from '@apex-rn/library/features/Auth';

import { RootStackScreenProps } from '../routes/types';

export const SetupBiometric = ({
  route,
}: RootStackScreenProps<'SetupBiometric'>) => {
  const dispatch = useAppDispatch();
  const { enableBiometrics, clearBiometrics } = useBiometrics();

  const onConfirm = useCallback(async () => {
    const status = await enableBiometrics(route.params);
    status && dispatch(setAuthenticated());
  }, [enableBiometrics, route.params]);

  const onDiscard = useCallback(() => {
    clearBiometrics();
    dispatch(setAuthenticated());
  }, [dispatch, clearBiometrics]);

  return <SetupBiometricModal onConfirm={onConfirm} onDiscard={onDiscard} />;
};
