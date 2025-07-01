import React from 'react';
import { useForm } from 'react-hook-form';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';
import { yupResolver } from '@hookform/resolvers/yup';

import { translate } from '../../../../helpers/i18n';
import { commonError } from '../../../../helpers/constants';
import { isApexError } from '../../../../types/apiResponses';
import { LogInFormData } from '../../types';
import { schemaLogIn } from '../../validators';

import { Text, Box } from '../../../../components/atoms';
import {
  FormInput,
  FormPassword,
  Button,
} from '../../../../components/molecules';

type LoginFormProps = {
  /** Form submission handler */
  onSubmit: (formData: LogInFormData) => void;
  /** Error message for submission */
  error?: FetchBaseQueryError | SerializedError;
};

export const LoginForm = ({ onSubmit, error }: LoginFormProps) => {
  const { handleSubmit, control, setFocus, formState } = useForm({
    defaultValues: {
      userName: '',
      password: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schemaLogIn),
  });

  return (
    <>
      <Box paddingHorizontal="sm" marginTop="m" marginBottom="m">
        <Box mb="m">
          <FormInput
            control={control}
            name="userName"
            label={`${translate('auth.formField.userName')}:`}
            placeholder={translate('auth.formField.userName')}
            autoComplete="username"
            autoCapitalize="none"
            enterKeyHint="next"
            onSubmitEditing={() => setFocus('password')}
          />
        </Box>
        <FormPassword
          control={control}
          name="password"
          label={`${translate('auth.formField.password')}:`}
          placeholder={translate('auth.formField.password')}
          enterKeyHint="done"
          onSubmitEditing={handleSubmit(onSubmit)}
        />
        {!!error && (
          <Text variant="error" mt="xl">
            {isApexError(error) ? error.message : translate(commonError)}
          </Text>
        )}
      </Box>

      <Box
        borderColor="transparent"
        borderTopColor="border3"
        borderWidth={1}
        padding="sm">
        <Button
          loading={formState.isSubmitting}
          variant="primary"
          label={translate('auth.loginScreen.login')}
          onPress={handleSubmit(onSubmit)}
        />
      </Box>
    </>
  );
};
