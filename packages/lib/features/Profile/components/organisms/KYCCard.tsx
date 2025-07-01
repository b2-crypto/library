import React from 'react';
import { Box, Text } from '../../../../components/atoms';
import { Card } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { KYCButton } from '../molecules';

type KYCCardType = {
  verificationLevel: number;
  onButtonPress: () => void;
};

export const KYCCard = ({ verificationLevel, onButtonPress }: KYCCardType) => {
  return (
    <Card
      marginVertical="m"
      heading={translate(`profile.verification.cardHeader`, {
        level: verificationLevel,
      })}
      footer={
        <KYCButton
          label={translate(
            `profile.verification.kycCard.level${verificationLevel}.button`,
          )}
          onPress={onButtonPress}
          level={verificationLevel}
        />
      }>
      <Box padding="m">
        <Text>
          {translate(
            `profile.verification.kycCard.level${verificationLevel}.content`,
          )}
        </Text>
      </Box>
    </Card>
  );
};
