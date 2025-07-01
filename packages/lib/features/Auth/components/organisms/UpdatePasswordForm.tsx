import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { translate } from '../../../../helpers/i18n';
import { shemaUpdatePassword } from '../../validators';
import { UpdatePasswordFormData } from '../../types';

import { Box, Text } from '../../../../components/atoms';
import { FormPassword, Button } from '../../../../components/molecules';

type UpdatePasswordFormProps = {
  /** Submission callback */
  onSubmit: (formData: UpdatePasswordFormData) => void;
  /** Submission error */
  error?: string;
  /** Submission loading state */
  isLoading?: boolean;
};

export const UpdatePasswordForm = ({
  onSubmit,
  error,
  isLoading,
}: UpdatePasswordFormProps) => {
  const { handleSubmit, control, setFocus } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
    resolver: yupResolver(shemaUpdatePassword),
  });

  useEffect(() => setFocus('password'), []);

  return (
    <>
      <Box>
        <Text color="textSecondary" p="m" pb="none">
          {translate('auth.loginScreen.updatePasswordTitle2')}
        </Text>

        <Box p="sm">
          <Box mb="m">
            <FormPassword
              control={control}
              name="password"
              label={`${translate('auth.formField.password')}:`}
              placeholder={translate('auth.formField.password')}
              onSubmitEditing={() => setFocus('confirmPassword')}
            />
          </Box>
          <FormPassword
            control={control}
            name="confirmPassword"
            label={`${translate('auth.formField.passwordConfirm')}:`}
            placeholder={translate('auth.formField.passwordConfirm')}
            onSubmitEditing={handleSubmit(onSubmit)}
            enterKeyHint="done"
          />
          {!!error && (
            <Text variant="error" mt="m">
              {error}
            </Text>
          )}
        </Box>
      </Box>

      <Box
        borderColor="transparent"
        borderTopColor="border3"
        borderWidth={1}
        padding="sm">
        <Button
          marginVertical="none"
          loading={isLoading}
          variant="primary"
          label={translate('auth.loginScreen.update')}
          onPress={handleSubmit(onSubmit)}
        />
      </Box>
    </>
  );
};
