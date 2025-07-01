import { useCallback } from 'react';
import { translate } from '../../../helpers/i18n';
import Toast from 'react-native-toast-message';

import {
  useResendVerificationEmailMutation,
  useResetPasswordMutation,
} from '../../../services/profileApi';
import { CustomToast } from '../../../helpers/toastConfig';
import { FormValues } from '../types';

export const useTroubleLogging = () => {
  const [
    resetPassword,
    { isLoading: resetPasswordLoading, error: resetError },
  ] = useResetPasswordMutation();
  const [
    resendVerificationEmail,
    { isLoading: resendVerificationLoading, error: resendError },
  ] = useResendVerificationEmailMutation();

  const onSubmit = useCallback(
    async (formData: FormValues) => {
      if (formData.issueType === 'userName') {
        await resetPassword({ UserName: formData.userName }).unwrap();
        Toast.show({
          type: CustomToast.text,
          text1: translate('auth.troubles.forgotPwdSuccess'),
        });
      } else {
        await resendVerificationEmail({ Email: formData.email }).unwrap();
        Toast.show({
          type: CustomToast.text,
          text1: translate('auth.troubles.resendVerificationSuccess'),
        });
      }
    },
    [resetPassword, resendVerificationEmail],
  );

  return [
    onSubmit,
    {
      resendError,
      resetError,
      isLoading: resetPasswordLoading || resendVerificationLoading,
    },
  ] as const;
};
