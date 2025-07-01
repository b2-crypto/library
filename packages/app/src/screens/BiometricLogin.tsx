import React, { useCallback } from 'react';
import { translate } from '@apex-rn/library/helpers';
import { useAppDispatch, useBiometrics } from '@apex-rn/library/hooks';
import { setAuthenticated, RootState } from '@apex-rn/library/stores';
import {
  BiometricLogin as ScreenLayout,
  useLogin,
} from '@apex-rn/library/features/Auth';
import { bootstrap } from '@apex-rn/library/bootstrap';
import { isApexError } from '@apex-rn/library/types';
import { useStore } from 'react-redux';

import { RootStackScreenProps } from '../routes/types';

export const BiometricLogin = ({
  navigation,
}: RootStackScreenProps<'BiometricLogin'>) => {
  const dispatch = useAppDispatch();
  const store = useStore<RootState>();

  const { promptBiometrics, getCredentials, clearBiometrics } = useBiometrics();
  const { userName } = getCredentials();

  const [onLogin, { isLoading, isError, error }] = useLogin();

  const handleBiometricsLogin = useCallback(async () => {
    const success = await promptBiometrics();

    if (success) {
      const { password } = getCredentials();
      const result =
        userName && password && (await onLogin({ userName, password }));
      if (!result || !result.Authenticated) {
        clearBiometrics();
        navigation.navigate('AuthLanding');
      } else {
        await bootstrap(store);
        if (result.Requires2FA) {
          navigation.navigate('TwoFactAuth');
        } else {
          dispatch(setAuthenticated());
        }
      }
    }
  }, [
    promptBiometrics,
    getCredentials,
    onLogin,
    clearBiometrics,
    userName,
    dispatch,
    navigation,
  ]);

  return (
    <ScreenLayout
      headerText={
        userName
          ? translate('auth.biometrics.login.titleName', {
              userName: userName,
            })
          : translate('auth.biometrics.login.title')
      }
      onConfirm={handleBiometricsLogin}
      isLoading={isLoading}
      error={isError && isApexError(error) ? error.message : undefined}
      onDiscard={() => navigation.navigate('AuthLanding')}
    />
  );
};
