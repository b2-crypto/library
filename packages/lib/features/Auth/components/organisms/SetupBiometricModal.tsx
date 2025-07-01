import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { BlurView, Box, Text } from '../../../../components/atoms';
import { Card, Button } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { Biometric, CloseIcon } from '../../../../assets/icons';

type Props = {
  /** Callback when user agrees to enable biometric login */
  onConfirm: () => void;
  /** Callback when user rejects the prompt */
  onDiscard: () => void;
};

export const SetupBiometricModal = ({ onConfirm, onDiscard }: Props) => {
  const BlurBg = Platform.OS === 'ios' ? BlurView : Box;

  return (
    <>
      {/* Display BlurView not as a wrapped but as a background element
      because of the issue with @react-native-community/blur library with RN 0.76+
      see https://github.com/Kureev/react-native-blur/issues/628#issuecomment-2474542931 */}
      <BlurBg />
      <Card
        variant="floating"
        marginTop="m"
        marginHorizontal="m"
        heading={translate('auth.biometrics.setupModal.title')}
        headingExtra={
          <Button
            variant="transparent"
            onPress={onDiscard}
            icon={<CloseIcon />}
            size="small"
          />
        }
        footer={
          <Box>
            <Button
              label={translate('auth.biometrics.setupModal.button')}
              onPress={onConfirm}
              mb="s"
            />
            <Button
              onPress={onDiscard}
              label={
                <Text variant="button_primary" color="brandSolid">
                  {translate('auth.biometrics.setupModal.skip')}
                </Text>
              }
              variant="transparent"
            />
          </Box>
        }
        style={styles.modal}>
        <Box margin="m">
          <Text>{translate('auth.biometrics.setupModal.text')}</Text>
          <Box marginTop="l" alignItems="center">
            <Biometric />
          </Box>
        </Box>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    marginTop: '20%',
    zIndex: 1,
  },
});
