import React, { useCallback, useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';

import { translate } from '../../../../helpers/i18n';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useGetUserInfoQuery } from '../../../../services/apexApi';
import { useAuthenticate2FAMutation } from '../../../../services/profileApi';
import { selectUser } from '../../../../stores/auth';

import { Box, FormItem, Input, Text } from '../../../../components/atoms';
import { Card, Button } from '../../../../components/molecules';

export const TwoFactorCodeCard = ({
  on2faAuthenticated,
}: {
  on2faAuthenticated: () => void;
}) => {
  const user = useAppSelector(selectUser);
  const [code, setCode] = useState('');

  const [authenticate2FA, { isLoading, isError }] =
    useAuthenticate2FAMutation();
  const { isLoading: isUserInfoLoading, refetch: refetchGetUserInfoQuery } =
    useGetUserInfoQuery(user?.UserId ? { userId: user.UserId } : skipToken);

  const onConfirmPress = useCallback(async () => {
    try {
      const res = await authenticate2FA({ code }).unwrap();

      if (res.Authenticated) {
        // Need to manually call query instead of invalidating tags because of
        // https://alphapoint.atlassian.net/browse/AM-265
        await refetchGetUserInfoQuery();

        on2faAuthenticated();
      }
    } catch {
      //
    }
  }, [authenticate2FA, code, refetchGetUserInfoQuery, on2faAuthenticated]);

  return (
    <Card
      marginTop="m"
      marginHorizontal="m"
      heading={translate('2faActivation.codeCard.title')}
      footer={
        <Button
          marginVertical="none"
          label={translate('confirm')}
          loading={isLoading || isUserInfoLoading}
          disabled={code.length !== 6}
          onPress={onConfirmPress}
        />
      }>
      <Box padding="m">
        <Text>{translate('2faActivation.codeCard.text')}</Text>
        <FormItem
          label={translate('common.2faCode')}
          mt="m"
          error={isError ? translate('common.invalid2FaCode') : undefined}>
          <Input
            inputMode="numeric"
            keyboardType="number-pad"
            maxLength={6}
            value={code}
            onChangeText={value => setCode(value.replace(/[^0-9]/g, ''))}
            onSubmitEditing={onConfirmPress}
            returnKeyType="done"
            hasError={isError}
          />
        </FormItem>
      </Box>
    </Card>
  );
};
