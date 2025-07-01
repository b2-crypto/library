import React from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';

import { translate } from '../../helpers/i18n';
import { useGetUserInfoQuery } from '../../services/apexApi';
import { selectUser } from '../../stores/auth';
import { useAppSelector } from '../../hooks/useAppSelector';

import { Box, Text } from '../atoms';
import { ItemWithBg } from '../molecules';
import { testID } from '../../helpers/testId';

export const Welcome = (props: React.ComponentProps<typeof Box>) => {
  const user = useAppSelector(selectUser);
  const { data: userInfo } = useGetUserInfoQuery(
    user?.UserId ? { userId: user.UserId } : skipToken,
  );

  return (
    <ItemWithBg {...props}>
      <Text
        variant="headlineBold"
        color="textInverse"
        {...testID('welcomeUsername')}>
        {translate('dashboard.welcomeUsername', {
          username: userInfo?.UserName || '',
        })}
      </Text>
    </ItemWithBg>
  );
};
