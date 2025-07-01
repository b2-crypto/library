import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  useTwoFactAuth,
  AuthScreen,
  schemaToken,
} from '@apex-rn/library/features/Auth';
import { translate } from '@apex-rn/library/helpers';
import { Box, Text, Button, FormInput } from '@apex-rn/library/components';

import { RootStackScreenProps } from '../routes/types';
import { TopLogo } from '../assets/logo/TopLogo';

export const TwoFactAuthentication = ({
  navigation,
}: RootStackScreenProps<'TwoFactAuth'>) => {
  const [onSubmit, { isError, isLoading }] = useTwoFactAuth();

  const { handleSubmit, control, setFocus } = useForm({
    defaultValues: { code: '' },
    mode: 'onChange',
    resolver: yupResolver(schemaToken),
  });

  useEffect(() => setFocus('code'), [setFocus]);

  return (
    <AuthScreen
      logo={<TopLogo />}
      headerText={translate('auth.loginScreen.authenticatorTitle')}
      footer={
        <Button
          size="small"
          mt="xl"
          variant="transparent"
          label={translate('auth.loginScreen.backToLog')}
          onPress={navigation.goBack}
        />
      }>
      <Box paddingHorizontal="sm" paddingVertical="m">
        <Text color="textSecondary" marginHorizontal="xs" mb="m">
          {translate('auth.loginScreen.authenticatorTitle2')}
        </Text>
        <FormInput
          keyboardType="number-pad"
          inputMode="numeric"
          maxLength={6}
          control={control}
          name="code"
          label={`${translate('auth.formField.token')}:`}
          placeholder={translate('auth.formField.token')}
          onSubmitEditing={handleSubmit(onSubmit)}
          returnKeyType="done"
        />
        {isError && (
          <Text variant="error" mt="m">
            {translate('common.invalid2FaCode')}
          </Text>
        )}
      </Box>

      <Box
        borderColor="transparent"
        borderTopColor="border3"
        borderWidth={1}
        padding="sm">
        <Button
          loading={isLoading}
          variant="primary"
          label={translate('auth.loginScreen.login')}
          onPress={handleSubmit(onSubmit)}
        />
      </Box>
    </AuthScreen>
  );
};
