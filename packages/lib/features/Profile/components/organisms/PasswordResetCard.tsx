import React, { useCallback } from 'react';

import { translate } from '../../../../helpers/i18n';
import { useModalControl, useUserInfo } from '../../../../hooks';
import { useResetPasswordMutation } from '../../../../services/profileApi';
import { Box, Text } from '../../../../components/atoms';
import { Button, Card } from '../../../../components/molecules';
import { CardModal } from '../../../../components/organisms';
import { testID } from '../../../../helpers/testId';

export const PasswordResetCard = () => {
  const { data: userInfo } = useUserInfo();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const { modalVisible, showModal, hideModal } = useModalControl();

  const onEmailSendPress = useCallback(async () => {
    if (!userInfo?.UserName) {
      return;
    }

    try {
      await resetPassword({ UserName: userInfo.UserName }).unwrap();
      showModal();
    } catch (error) {
      console.error('getAuthConfig error', error);
    }
  }, [userInfo?.UserName, resetPassword, showModal]);

  return (
    <>
      <Card
        marginTop="m"
        marginHorizontal="m"
        heading={translate('profile.reset.password')}
        footer={
          <Button
            label={translate('common.sendEmail')}
            loading={isLoading}
            onPress={onEmailSendPress}
            {...testID('sendEmailButton')}
          />
        }>
        <Box padding="m">
          <Text>{translate('profile.reset.passwordText')}</Text>
        </Box>
      </Card>

      <CardModal
        isVisible={modalVisible}
        onClose={hideModal}
        heading={translate('profile.reset.emailSentHeader')}
        footer={
          <Button
            flexDirection="column"
            flex={0}
            onPress={hideModal}
            label={translate('common.ok')}
            {...testID('emailSentOk')}
          />
        }>
        <Box padding="m">
          <Text>{translate('profile.reset.emailSentText')}</Text>
        </Box>
      </CardModal>
    </>
  );
};
