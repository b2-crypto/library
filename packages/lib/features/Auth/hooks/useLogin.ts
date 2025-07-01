import { useDispatch } from 'react-redux';

import { useGetAuthConfigMutation } from '../../../services/apexApi';
import { STORAGE_KEYS, getDefaultStorage } from '../../../services/storage';
import { set2FAToken, setUser } from '../../../stores/auth';
import { AuthResponseType } from '../../../types/apiResponses';
import { LogInFormData } from '../types';

export const useLogin = () => {
  const dispatch = useDispatch();
  const [getAuthConfig, { isLoading, isError, error }] =
    useGetAuthConfigMutation();
  const storage = getDefaultStorage();

  const onSubmit = async (formData: LogInFormData) => {
    const result = await getAuthConfig(formData);

    if ('data' in result) {
      if (result.data.Pending2FaToken) {
        dispatch(set2FAToken({ pending2FaToken: result.data.Pending2FaToken }));

        // Store for logging purposes (need to save userName here as it will not
        // be returned by the response for validating 2fa).
        storage.set(STORAGE_KEYS.USER_NAME, formData.userName);
      } else {
        await dispatch(
          setUser({
            user: {
              SessionToken: result.data.SessionToken,
              UserId: result.data.UserId,
            },
          }),
        );

        // Store for logging purposes.
        storage.set(STORAGE_KEYS.USER_ID, result.data.UserId);
        storage.set(STORAGE_KEYS.USER_NAME, formData.userName);
      }
      return result.data;
    }

    return (
      'data' in result.error ? result.error.data : { Authenticated: false }
    ) as AuthResponseType;
  };

  return [onSubmit, { isLoading, isError, error }] as const;
};
