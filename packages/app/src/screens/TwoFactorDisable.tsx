import React from 'react';
import { translate } from '@apex-rn/library/helpers';
import { ScreenHeader, Screen } from '@apex-rn/library/components';
import { TwoFactorDisableCard } from '@apex-rn/library/features/Profile';

import { RootStackScreenProps } from '../routes/types';

export const TwoFactorDisable = ({
  navigation,
}: RootStackScreenProps<'TwoFactorDisable'>) => (
  <Screen>
    <ScreenHeader
      title={translate('common.security')}
      onBackPress={navigation.goBack}
    />
    <TwoFactorDisableCard on2faDisabled={navigation.goBack} />
  </Screen>
);
