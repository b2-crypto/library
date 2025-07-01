import React, { useCallback, useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';

import { translate } from '../../../../helpers/i18n';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useGetUserInfoQuery } from '../../../../services/apexApi';
import {
  useAuthenticate2FAMutation,
  useDisable2FAMutation,
} from '../../../../services/profileApi';
import { selectUser } from '../../../../stores/auth';

import { Box, FormItem, Input, Text } from '../../../../components/atoms';
import { Card, Button } from '../../../../components/molecules';

export const TwoFactorDisableCard = ({
  on2faDisabled,
}: {
  on2faDisabled: () => void;
}) => {
  const user = useAppSelector(selectUser);
  const [confirmCode, setConfirmCode] = useState('');

  const [
    authenticate2FA,
    {
      isLoading: isAuthLoading,
      isError: authenticationFailed,
      reset: resetAuth,
    },
  ] = useAuthenticate2FAMutation();
  const [disable2fa, { isLoading: isDisableLoading, reset: resetDisable2Fa }] =
    useDisable2FAMutation();
  const { isLoading: isUserInfoLoading, refetch: refetchGetUserInfoQuery } =
    useGetUserInfoQuery(user?.UserId ? { userId: user.UserId } : skipToken);

  const onDisablePress = useCallback(async () => {
    try {
      await disable2fa().unwrap();
      await authenticate2FA({ code: confirmCode }).unwrap();

      // Need to manually call query instead of invalidating tags because of
      // https://alphapoint.atlassian.net/browse/AM-265
      await refetchGetUserInfoQuery();

      on2faDisabled();
    } catch {
      //
    }
  }, [
    disable2fa,
    authenticate2FA,
    confirmCode,
    refetchGetUserInfoQuery,
    on2faDisabled,
  ]);

  return (
    <Card
      marginTop="m"
      marginHorizontal="m"
      heading={translate('profile.2fa.disable.title')}
      footer={
        <Button
          marginVertical="none"
          label={translate('common.ok')}
          loading={isAuthLoading || isDisableLoading || isUserInfoLoading}
          disabled={confirmCode.length !== 6}
          onPress={onDisablePress}
        />
      }>
      <Box margin="m">
        <Text marginBottom="m">{translate('profile.2fa.disable.text')}</Text>
        <FormItem
          label={translate('common.2faCode')}
          error={
            authenticationFailed
              ? translate('common.invalid2FaCode')
              : undefined
          }>
          <Input
            inputMode="numeric"
            keyboardType="number-pad"
            maxLength={6}
            value={confirmCode}
            onChangeText={value => {
              setConfirmCode(value.replace(/[^0-9]/g, ''));
              resetAuth();
              resetDisable2Fa();
            }}
            onSubmitEditing={onDisablePress}
            returnKeyType="done"
            hasError={authenticationFailed}
          />
        </FormItem>
      </Box>
    </Card>
  );
};
