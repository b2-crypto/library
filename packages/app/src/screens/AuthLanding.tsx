import React, { useMemo, useState } from 'react';
import { LogInFormData } from '@apex-rn/library/features/Auth/types';
import { translate, testID } from '@apex-rn/library/helpers';
import { Button, Tabs } from '@apex-rn/library/components';
import {
  AuthScreen,
  LoginTab,
  SignUpTab,
} from '@apex-rn/library/features/Auth';

import { RootStackScreenProps } from '../routes/types';
import { TopLogo } from '../assets/logo/TopLogo';

type AuthLandingTabs = 'login' | 'signUp';

export const AuthLanding = ({
  navigation,
}: RootStackScreenProps<'AuthLanding'>) => {
  const [activeTab, setActiveTabId] = useState<AuthLandingTabs>('login');

  const tabButtons = useMemo(
    () =>
      (['login', 'signUp'] as const).map(tab => ({
        value: tab,
        label: translate(`auth.loginScreen.${tab}`),
      })),
    [],
  );

  const onBiometricSetup = (formData: LogInFormData) => {
    navigation.navigate('SetupBiometric', formData);
  };

  return (
    <AuthScreen
      logo={<TopLogo />}
      headerText={translate('auth.loginScreen.welcome')}
      footer={
        <Button
          size="small"
          mt="xl"
          variant="transparent"
          label={translate('auth.loginScreen.troublelog')}
          onPress={() => navigation.navigate('TroubleLogging')}
          accessibilityRole="link"
        />
      }>
      <Tabs
        data={tabButtons}
        value={activeTab}
        onChange={setActiveTabId}
        wrapperProps={{
          ...testID('authTabs'),
          accessibilityLabel: 'Auth Tabs',
        }}
      />
      {activeTab === 'login' ? (
        <LoginTab
          on2FARequired={() => navigation.navigate('TwoFactAuth')}
          onBiometricSetup={onBiometricSetup}
        />
      ) : (
        <SignUpTab onSuccess={() => setActiveTabId('login')} />
      )}
    </AuthScreen>
  );
};
