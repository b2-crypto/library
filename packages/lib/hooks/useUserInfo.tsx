import { skipToken } from '@reduxjs/toolkit/dist/query';

import { useGetUserInfoQuery } from '../services/apexApi';
import { selectUser } from '../stores/auth';

import { useAppSelector } from './useAppSelector';

export const useUserInfo = (skipQuery = false) => {
  const user = useAppSelector(selectUser);
  return useGetUserInfoQuery(
    user?.UserId && !skipQuery ? { userId: user.UserId } : skipToken,
  );
};
