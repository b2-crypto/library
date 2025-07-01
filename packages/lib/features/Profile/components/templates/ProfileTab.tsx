import React, { Dispatch, SetStateAction } from 'react';
import { ScrollView } from 'react-native';

import { useLogout, useVerificationStatus } from '../../../../hooks';
import { translate } from '../../../../helpers/i18n';
import {
  STORAGE_KEYS,
  getDefaultStorage,
  useStringValue,
} from '../../../../services/storage';
import { ThemeCard, UserDetailsCard, KYCCard } from '../organisms';
import { Box } from '../../../../components/atoms';
import { SectionHeading, Button } from '../../../../components/molecules';
import { Welcome } from '../../../../components/organisms';
import { testID } from '../../../../helpers/testId';

type ProfileTabProps<Tab extends string> = {
  setActiveTab: Dispatch<SetStateAction<Tab>>;
};

export const ProfileTab = <Tab extends string>({
  setActiveTab,
}: ProfileTabProps<Tab>) => {
  const logout = useLogout();
  const [userColorScheme, setColorScheme] = useStringValue(
    STORAGE_KEYS.COLOR_SCHEME,
    getDefaultStorage(),
  );
  const { verificationLevel } = useVerificationStatus();

  return (
    <ScrollView>
      <Welcome />
      <SectionHeading {...testID('userDetailsHeader')}>
        {translate('profile.userDetails')}
      </SectionHeading>
      <Box margin="m">
        <UserDetailsCard />
      </Box>
      <Box marginHorizontal="m">
        <ThemeCard
          value={userColorScheme || 'system'}
          onChange={value => setColorScheme(value)}
        />
      </Box>
      <Box marginHorizontal="m">
        <KYCCard
          verificationLevel={verificationLevel}
          onButtonPress={() => setActiveTab('verification' as Tab)}
        />
      </Box>
      <Box paddingHorizontal="m" marginVertical="m">
        <Button
          variant="secondary"
          label={translate('auth.logout')}
          onPress={() => logout()}
          flex={0}
          accessibilityLabel="sign out"
          {...testID('signOutButton')}
        />
      </Box>
    </ScrollView>
  );
};
