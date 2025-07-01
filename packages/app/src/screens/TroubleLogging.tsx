import React from 'react';
import { translate } from '@apex-rn/library/helpers';
import { Button } from '@apex-rn/library/components';
import {
  TroubleLoggingForm,
  AuthScreen,
  useTroubleLogging,
} from '@apex-rn/library/features/Auth';

import { RootStackScreenProps } from '../routes/types';
import { TopLogo } from '../assets/logo/TopLogo';

export const TroubleLogging = ({
  navigation,
}: RootStackScreenProps<'TroubleLogging'>) => {
  const [onSubmit, { isLoading, resendError, resetError }] =
    useTroubleLogging();

  return (
    <AuthScreen
      logo={<TopLogo />}
      headerText={translate('auth.loginScreen.troublelog')}
      footer={
        <Button
          size="small"
          mt="xl"
          variant="transparent"
          label={translate('auth.loginScreen.backToLog')}
          onPress={navigation.goBack}
        />
      }>
      <TroubleLoggingForm
        onSubmit={onSubmit}
        isLoading={isLoading}
        resendError={resendError}
        resetError={resetError}
      />
    </AuthScreen>
  );
};
