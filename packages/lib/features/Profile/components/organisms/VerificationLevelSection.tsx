import React from 'react';

import { translate } from '../../../../helpers/i18n';
import { Box, Text } from '../../../../components/atoms';
import { SectionHeading } from '../../../../components/molecules';
import { Card } from '../../../../components/molecules';
import { testID } from '../../../../helpers/testId';

export type KYCLevelData = {
  level: number;
  benefitsVisible: boolean;
  requirementsVisible: boolean;
  verificationMethod?: string;
  button: React.ReactNode;
  benefitsInfo: string;
  requirementsInfo: string;
};

type VerificationLevelSectionProps = {
  /** Level data */
  levelData: KYCLevelData;
  /** Current verification level */
  currentLevel: number;
};

export const VerificationLevelSection = ({
  levelData,
  currentLevel,
}: VerificationLevelSectionProps) => (
  <>
    <Box>
      <SectionHeading {...testID(`level${currentLevel}`)}>
        {translate('profile.verification.level', {
          level: levelData.level,
        })}
      </SectionHeading>
    </Box>
    <Card marginTop="m" marginHorizontal="m" footer={levelData.button}>
      <Box padding="m">
        {levelData?.benefitsVisible && (
          <Box mb="m">
            <Text variant="bodyBold" mb="s">
              {levelData.level === currentLevel
                ? translate('profile.verification.currentBenefits')
                : translate('profile.verification.addBenefits')}
            </Text>
            <Text
              color="textSecondary"
              accessible
              accessibilityLabel="Benefits"
              {...testID(`benefits${currentLevel}`)}>
              {levelData.benefitsInfo}
            </Text>
          </Box>
        )}
        {levelData?.requirementsVisible && (
          <Box>
            <Text variant="bodyBold" mb="s">
              {translate('common.requirements')}
            </Text>
            <Text
              color="textSecondary"
              accessible
              accessibilityLabel="Requirements"
              {...testID(`requirements${currentLevel}`)}>
              {levelData.requirementsInfo}
            </Text>
          </Box>
        )}
      </Box>
    </Card>
  </>
);
