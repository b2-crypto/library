import React from 'react';
import {
  useUpdatePassword,
  UpdatePasswordForm,
  AuthScreen,
  type UpdatePasswordFormData,
} from '@apex-rn/library/features/Auth';
import { translate } from '@apex-rn/library/helpers';
import { Button } from '@apex-rn/library/components';
import {
  ENCRYPTED_STORAGE_KEYS,
  getSecureStorage,
} from '@apex-rn/library/services';

import { RootStackScreenProps } from '../routes/types';
import { TopLogo } from '../assets/logo/TopLogo';

export const UpdatePassword = ({
  navigation,
}: RootStackScreenProps<'UpdatePassword'>) => {
  const [onSubmit, { error, isLoading }] = useUpdatePassword();

  const handleSubmit = (formData: UpdatePasswordFormData) => {
    onSubmit(formData);
    getSecureStorage().set(ENCRYPTED_STORAGE_KEYS.PASSWORD, formData.password);
  };

  return (
    <AuthScreen
      logo={<TopLogo />}
      headerText={translate('auth.loginScreen.updatePasswordTitle')}
      footer={
        <Button
          size="small"
          mt="xl"
          variant="transparent"
          label={translate('auth.loginScreen.backToLog')}
          onPress={navigation.goBack}
        />
      }>
      <UpdatePasswordForm
        onSubmit={handleSubmit}
        error={error}
        isLoading={isLoading}
      />
    </AuthScreen>
  );
};
