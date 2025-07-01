import { useCallback } from 'react';

import { useRegisterUserMutation } from '../../../services/apexApi';
import { SignUpFormData } from '../types';
import { isApexError } from '../../../types/apiResponses';

export const useSignUp = () => {
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

  const onSubmit = useCallback(
    async (formData: SignUpFormData) => {
      return await registerUser({
        userInfo: {
          userName: formData.userName,
          email: formData.email,
          passwordHash: formData.password,
        },
        userConfig: [],
        operatorId: 1,
      }).unwrap();
    },
    [registerUser],
  );

  return [
    onSubmit,
    {
      error: error && isApexError(error) ? error?.message : undefined,
      isLoading,
    },
  ] as const;
};
