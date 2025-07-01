import React from 'react';
import { ScrollView } from 'react-native';
import { useLogout, useVerificationStatus } from '../../../../hooks';
import { translate } from '../../../../helpers/i18n';
import { STORAGE_KEYS, getDefaultStorage, useStringValue, } from '../../../../services/storage';
import { ThemeCard, UserDetailsCard, KYCCard } from '../organisms';
import { Box } from '../../../../components/atoms';
import { SectionHeading, Button } from '../../../../components/molecules';
import { Welcome } from '../../../../components/organisms';
import { testID } from '../../../../helpers/testId';
export const ProfileTab = ({ setActiveTab, }) => {
    const logout = useLogout();
    const [userColorScheme, setColorScheme] = useStringValue(STORAGE_KEYS.COLOR_SCHEME, getDefaultStorage());
    const { verificationLevel } = useVerificationStatus();
    return (<ScrollView>
      <Welcome />
      <SectionHeading {...testID('userDetailsHeader')}>
        {translate('profile.userDetails')}
      </SectionHeading>
      <Box margin="m">
        <UserDetailsCard />
      </Box>
      <Box marginHorizontal="m">
        <ThemeCard value={userColorScheme || 'system'} onChange={value => setColorScheme(value)}/>
      </Box>
      <Box marginHorizontal="m">
        <KYCCard verificationLevel={verificationLevel} onButtonPress={() => setActiveTab('verification')}/>
      </Box>
      <Box paddingHorizontal="m" marginVertical="m">
        <Button variant="secondary" label={translate('auth.logout')} onPress={() => logout()} flex={0} accessibilityLabel="sign out" {...testID('signOutButton')}/>
      </Box>
    </ScrollView>);
};
