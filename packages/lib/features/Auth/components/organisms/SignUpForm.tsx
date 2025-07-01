import React, { useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { translate } from '../../../../helpers/i18n';
import { schemaSignUp } from '../../validators';
import { SignUpFormData } from '../../types';
import { Box, DashedBox, Text } from '../../../../components/atoms';
import {
  FormCheckbox,
  FormInput,
  FormPassword,
  Button,
} from '../../../../components/molecules';
import { CardModal } from '../../../../components/organisms';
import { useModalControl } from '../../../../hooks';
import { testID } from '../../../../helpers/testId';

type SignUpFormProps = {
  /** Submit handler */
  onSubmit: (formData: SignUpFormData) => void;
  /** Submission error */
  error?: string;
  /** Submission loading indicator */
  isLoading?: boolean;
  /** Callback that will be called when user successfully registered */
  onSuccess?: () => void;
};

export const SignUpForm = ({
  error,
  isLoading,
  onSubmit,
  onSuccess,
}: SignUpFormProps) => {
  const { modalVisible, showModal, hideModal } = useModalControl();

  const { handleSubmit, control, setFocus, reset } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isAccepted: false,
    },
    mode: 'onChange',
    resolver: yupResolver(schemaSignUp),
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setFocus('userName'), []);

  const submitCb = useCallback(
    async (values: SignUpFormData) => {
      try {
        await onSubmit(values);
        reset();
        showModal();
      } catch {
        // error catched, will render it.
      }
    },
    [onSubmit, reset, showModal],
  );

  const onModalOk = useCallback(() => {
    hideModal();
    onSuccess?.();
  }, [hideModal, onSuccess]);

  return (
    <>
      <Box paddingHorizontal="sm" marginTop="m" mb="m">
        <Box mb="m">
          <FormInput
            control={control}
            autoCapitalize="none"
            textContentType="username"
            name="userName"
            label={translate('auth.formField.userName')}
            placeholder={translate('auth.formField.userName')}
            onSubmitEditing={() => setFocus('email')}
          />
        </Box>
        <Box mb="m">
          <FormInput
            control={control}
            name="email"
            label={translate('auth.formField.email') + ':'}
            placeholder={translate('auth.formField.email')}
            autoCapitalize="none"
            textContentType="emailAddress"
            onSubmitEditing={() => setFocus('password')}
          />
        </Box>
        <Box mb="m">
          <FormPassword
            control={control}
            name="password"
            label={translate('auth.formField.password') + ':'}
            placeholder={translate('auth.formField.password')}
            onSubmitEditing={() => setFocus('confirmPassword')}
          />
        </Box>
        <FormPassword
          control={control}
          name="confirmPassword"
          label={translate('auth.formField.passwordConfirm') + ':'}
          placeholder={translate('auth.formField.passwordConfirm')}
          enterKeyHint="done"
        />
      </Box>

      <DashedBox topDash paddingHorizontal="sm" paddingVertical="m">
        <FormCheckbox
          control={control}
          name="isAccepted"
          label={
            <>
              {translate('auth.loginScreen.signUpAcceptText')}{' '}
              <Text color="brandSolid">
                {translate('auth.loginScreen.termsAndConditions')}
              </Text>{' '}
              {translate('common.and')}{' '}
              <Text color="brandSolid">
                {translate('auth.loginScreen.privacyPolicy')}{' '}
              </Text>
            </>
          }
          {...testID('acceptTerms')}
          accessibilityLabel="Accept Terms and Conditions and Privacy Policy"
        />
        {error && (
          <Text variant="error" mt="m">
            {error}
          </Text>
        )}
      </DashedBox>

      <Box padding="sm" borderTopColor="background3" borderTopWidth={1}>
        <Button
          marginVertical="none"
          loading={isLoading}
          variant="primary"
          label={translate('auth.loginScreen.signUp')}
          onPress={handleSubmit(submitCb)}
        />
      </Box>

      <CardModal
        isVisible={modalVisible}
        modalStyles={styles.modal}
        onClose={hideModal}
        heading={translate('auth.signUpModal.title')}
        footer={
          <Button
            flexDirection="column"
            flex={0}
            onPress={onModalOk}
            label={translate('common.ok')}
          />
        }>
        <Box margin="m">
          <Text>{translate('auth.signUpModal.text')}</Text>
        </Box>
      </CardModal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    marginTop: '30%',
  },
});
