import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';

import { CustomToast } from '../../../../helpers/toastConfig';
import { translate } from '../../../../helpers/i18n';
import { useEnableGoogle2FAMutation } from '../../../../services/profileApi';
import { useUserInfo } from '../../../../hooks';

import { Box, Text } from '../../../../components/atoms';
import { Card, Button } from '../../../../components/molecules';
import { Receive } from '../../../../assets/icons';

// ! For iOS 15 and above, if 2 factor authentication is enabled,
//   then you will be directed into iOS’s built in password authenticator
//   instead of Google Authenticator

const QR_SIZE = 132;
const issuer = 'ApexReactNative';

export const TwoFactorQrCard = () => {
  const { data: userInfo } = useUserInfo();
  const [enableGoogle2fa, { data, isLoading }] = useEnableGoogle2FAMutation();

  useEffect(() => {
    enableGoogle2fa();
  }, [enableGoogle2fa]);

  const qrCode =
    data?.ManualCode &&
    `otpauth://totp/${encodeURI(issuer + ': ' + userInfo?.UserName)}?secret=${
      data?.ManualCode
    }&issuer=${issuer}`;

  const onCopyPress = useCallback(() => {
    if (data?.ManualCode) {
      Clipboard.setString(data.ManualCode);
      Toast.show({
        type: CustomToast.text,
        text1: translate('2faActivation.qrCard.copyMsg'),
      });
    }
  }, [data?.ManualCode]);

  return (
    <Card
      marginTop="m"
      marginHorizontal="m"
      heading={translate('2faActivation.qrCard.title')}
      footer={
        <Button
          marginVertical="none"
          label={translate('2faActivation.qrCard.btn')}
          icon={<Receive color="white" />}
          disabled={isLoading || !data?.ManualCode}
          onPress={onCopyPress}
        />
      }>
      <Box padding="m">
        <Text>{translate('2faActivation.qrCard.text')}</Text>
        <Box
          padding="m"
          justifyContent="center"
          alignItems="center"
          borderColor="border3"
          borderWidth={1}
          borderRadius={6}
          marginTop="m">
          {qrCode ? (
            <QRCode value={qrCode} size={QR_SIZE} />
          ) : (
            <Box
              height={QR_SIZE}
              width={QR_SIZE}
              justifyContent="center"
              alignItems="center">
              <ActivityIndicator />
            </Box>
          )}
        </Box>
      </Box>
    </Card>
  );
};
