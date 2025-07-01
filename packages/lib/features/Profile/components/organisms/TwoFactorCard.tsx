import React, { useCallback, useState } from 'react';

import { translate } from '../../../../helpers/i18n';
import { useModalControl } from '../../../../hooks';
import { selectUser } from '../../../../stores/auth';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useGetUserInfoQuery } from '../../../../services/apexApi';
import { TwoFactorCardProps } from '../../types';
import { Box, Text, Radio } from '../../../../components/atoms';
import { Card, Button } from '../../../../components/molecules';
import { CardModal } from '../../../../components/organisms';
import { testID } from '../../../../helpers/testId';

export const TwoFactorCardWidget = ({
  is2faEnabled,
  modalVisible,
  manageState,
  onManagePress,
  onEnablePress,
  onManageConfirmPress,
  setManageState,
}: {
  is2faEnabled: boolean;
  modalVisible: boolean;
  manageState: boolean;
  onManagePress: () => void;
  onEnablePress: () => void;
  onManageConfirmPress: () => void;
  setManageState: (newState: boolean) => void;
}) => {
  const baseStr = `profile.2fa.${is2faEnabled ? 'enabled' : 'disabled'}`;
  return (
    <>
      <Card
        marginTop="m"
        marginHorizontal="m"
        heading={translate(`${baseStr}.title`)}
        footer={
          <Button
            label={translate(`${baseStr}.btn`)}
            onPress={is2faEnabled ? onManagePress : onEnablePress}
            {...testID('manage2FA')}
          />
        }>
        <Box padding="m">
          <Text>{translate(`${baseStr}.text`)}</Text>
        </Box>
      </Card>

      <CardModal
        isVisible={modalVisible}
        heading={translate('profile.2fa.manage.title')}
        footer={
          <Button
            flexDirection="column"
            flex={0}
            label={translate('common.ok')}
            onPress={onManageConfirmPress}
            {...testID('confirm')}
          />
        }>
        <Box padding="m">
          <Text>{translate('profile.2fa.manage.text')}</Text>
          <Box flexDirection="row" marginTop="m">
            <Radio
              checked={manageState}
              label={translate('common.yes')}
              marginEnd="m"
              onChange={() => setManageState(true)}
              {...testID('yes')}
            />
            <Radio
              checked={!manageState}
              label={translate('common.no')}
              onChange={() => setManageState(false)}
              {...testID('no')}
            />
          </Box>
        </Box>
      </CardModal>
    </>
  );
};

export const TwoFactorCard = ({
  onEnable2FA,
  onDisable2FA,
}: TwoFactorCardProps) => {
  const user = useAppSelector(selectUser);
  const { modalVisible, showModal, hideModal } = useModalControl();
  const [manageState, setManageState] = useState(true);

  const { data: userInfo } = useGetUserInfoQuery(
    { userId: user!.UserId },
    { skip: !user?.UserId },
  );

  const onManagePress = useCallback(() => {
    setManageState(true);
    showModal();
  }, [setManageState, showModal]);

  const onManageConfirmPress = useCallback(async () => {
    if (!manageState) {
      onDisable2FA();
    }
    hideModal();
  }, [manageState, hideModal, onDisable2FA]);

  return (
    <TwoFactorCardWidget
      {...{
        is2faEnabled: !!userInfo?.Use2FA,
        modalVisible,
        manageState,
        onEnablePress: onEnable2FA,
        onManageConfirmPress,
        onManagePress,
        setManageState,
      }}
    />
  );
};
