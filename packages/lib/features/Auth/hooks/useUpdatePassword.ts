import { useCallback } from 'react';

import { commonError } from '../../../helpers/constants';
import { useResetPasswordMutation } from '../../../services/profileApi';
import { UpdatePasswordFormData } from '../types';
import { isApexError } from '../../../types/apiResponses';
import { translate } from '../../../helpers/i18n';

export const useUpdatePassword = () => {
  const [resetPassword, { error, ...queryState }] = useResetPasswordMutation();

  const onSubmit = useCallback(
    async (formData: UpdatePasswordFormData) => {
      await resetPassword(formData);
    },
    [resetPassword],
  );

  return [
    onSubmit,
    {
      ...queryState,
      error: error
        ? isApexError(error)
          ? error.message
          : translate(commonError)
        : undefined,
    },
  ] as const;
};
