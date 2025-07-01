import React, { useMemo } from 'react';
import { translate } from '../../../../helpers/i18n';
import { useVerificationStatus } from '../../../../hooks';
import { Box, Text } from '../../../../components/atoms';
import { ItemWithBg } from '../../../../components/molecules';
import { ScrollView, StyleSheet } from 'react-native';
import { VerificationLevelSection } from '../organisms';
import { KYCButton } from '../molecules';
import { testID } from '../../../../helpers/testId';
import { container } from '../../../../services/container';
export const VerificationTab = ({ verificationLevel, visibleLevels, }) => (<Box>
    <ItemWithBg>
      <Text variant="bodyBold" color="textInverse">
        {translate('profile.verification.yourLevel')}
      </Text>
      <Text variant="headlineBold" color="textInverse" marginTop="xs" accessible accessibilityLabel="Current verification level" {...testID('currentLevel')}>
        {verificationLevel.toString()}
      </Text>
    </ItemWithBg>

    <ScrollView contentContainerStyle={styles.pageWrapper}>
      {visibleLevels.map((level, idx) => (<Box key={level.level} mb={idx + 1 !== visibleLevels.length ? 'm' : undefined}>
          <VerificationLevelSection levelData={level} currentLevel={verificationLevel}/>
        </Box>))}
    </ScrollView>
  </Box>);
export const VerificationTabWidget = () => {
    const { verificationLevel } = useVerificationStatus();
    const visibleLevels = useMemo(() => (container.getConfigValue('verificationLevels') ?? []).map(level => ({
        ...level,
        button: level.verificationMethod === 'sumsub' &&
            level.level > verificationLevel && (<KYCButton disabled={Math.abs(verificationLevel - level.level) > 1} level={level.level}/>),
        benefitsInfo: level.benefitsVisible
            ? translate(`profile.verification.levelsDescription.level${level.level}.benefits`)
            : '',
        requirementsInfo: level.requirementsVisible
            ? translate(`profile.verification.levelsDescription.level${level.level}.requirements`)
            : '',
    })), [verificationLevel]);
    return (<VerificationTab visibleLevels={visibleLevels} verificationLevel={verificationLevel}/>);
};
const styles = StyleSheet.create({ pageWrapper: { paddingBottom: 190 } });
