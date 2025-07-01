import { skipToken } from '@reduxjs/toolkit/dist/query';

import { useGetUserConfigQuery } from '../services/profileApi';
import { selectUser } from '../stores/auth';
import { useAppSelector } from './useAppSelector';

export const useUserConfig = () => {
  const user = useAppSelector(selectUser);
  return useGetUserConfigQuery(
    user?.UserId ? { userId: user.UserId } : skipToken,
  );
};
