import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { skipToken } from '@reduxjs/toolkit/dist/query';

import {
  useGetAccountInfoQuery,
  useGetUserConfigQuery,
} from '../services/profileApi';
import { selectUser } from '../stores/auth';
import useAppState from './useAppState';
import { useAppSelector } from './useAppSelector';
import { useUserInfo } from './useUserInfo';
import { container } from '../services/container';

export const useVerificationStatus = () => {
  const user = useAppSelector(selectUser);
  const { data: userInfo } = useUserInfo();

  const {
    data: accountInfo,
    refetch: refetchAccountInfo,
    isUninitialized,
  } = useGetAccountInfoQuery(
    userInfo?.AccountId ? { accountId: userInfo.AccountId } : skipToken,
  );
  const { data: userConfig, refetch: refetchUserConfig } =
    useGetUserConfigQuery(user?.UserId ? { userId: user.UserId } : skipToken);

  const refetchData = useCallback(() => {
    if (!isUninitialized) {
      refetchAccountInfo();
      refetchUserConfig();
    }
  }, [isUninitialized]);

  useFocusEffect(refetchData);
  useAppState({ onForeground: refetchData });

  const verificationLevel = accountInfo?.VerificationLevel || 0;
  const isTransactionsAllowed = verificationLevel > 0;

  return {
    accountInfo,
    userConfig,
    nextLevel: accountInfo
      ? (container.getConfigValue('verificationLevels') ?? []).find(
          l => l.level === verificationLevel + 1,
        )
      : undefined,
    verificationLevel,
    levelIncreaseStatus: userConfig?.levelIncreaseStatus,
    isTransactionsAllowed,
  } as const;
};
