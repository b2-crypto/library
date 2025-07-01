import React from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { translate } from '@apex-rn/library/helpers';
import { ScreenHeader, Screen } from '@apex-rn/library/components';
import {
  TwoFactorCodeCard,
  TwoFactorQrCard,
} from '@apex-rn/library/features/Profile';

import { RootStackScreenProps } from '../routes/types';

export const TwoFactorActivation = ({
  navigation,
}: RootStackScreenProps<'TwoFactorActivation'>) => (
  <Screen edges={['left', 'right', 'top']}>
    <ScreenHeader
      title={translate('common.security')}
      onBackPress={navigation.goBack}
    />
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollContent}
      bounces={false}
      extraScrollHeight={20}>
      <TwoFactorQrCard />
      <TwoFactorCodeCard on2faAuthenticated={navigation.goBack} />
    </KeyboardAwareScrollView>
  </Screen>
);

const styles = StyleSheet.create({ scrollContent: { paddingBottom: 60 } });
