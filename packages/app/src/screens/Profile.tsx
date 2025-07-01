import Clipboard from '@react-native-clipboard/clipboard';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useCallback, useMemo, useState } from 'react';
import { Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Box, Text, Tabs, Screen } from '@apex-rn/library/components';
import {
  AffiliateTab,
  ProfileTab,
  SecurityTab,
  VerificationTabWidget,
} from '@apex-rn/library/features/Profile';
import { MarginProfileTab } from '@apex-rn/library/features/Margin';
import { translate, testID, CustomToast } from '@apex-rn/library/helpers';

import { version } from '../../package.json';
import { HomeScreenProps } from '../routes/types';
import { useMarginAvailable } from '../../../lib/features/Margin';

const PROFILE_TABS = [
  'profile',
  'security',
  'verification',
  'affiliate',
  'margin',
] as const;
export type ProfileTab = (typeof PROFILE_TABS)[number];

export const Profile = ({
  navigation,
  route: { params },
}: HomeScreenProps<'Profile'>) => {
  const [activeTab, setActiveTab] = useState<ProfileTab>(
    params?.initialTab ?? 'profile',
  );
  const isMarginAvailable = useMarginAvailable();

  const tabButtons = useMemo(
    () =>
      PROFILE_TABS.filter(t => t !== 'margin' || isMarginAvailable).map(
        tab => ({
          value: tab,
          label: translate(`profile.tabs.${tab}`),
        }),
      ),
    [isMarginAvailable],
  );
  const { bottom } = useSafeAreaInsets();
  const barHeight = useBottomTabBarHeight();

  const renderActiveScreen = useCallback(() => {
    switch (activeTab) {
      case 'profile':
        return (
          <>
            <ProfileTab setActiveTab={setActiveTab} />
            <Box
              flex={1}
              justifyContent="flex-end"
              paddingVertical="m"
              style={{ marginBottom: barHeight - bottom }}>
              <Pressable
                onLongPress={() => {
                  Clipboard.setString(version);
                  Toast.show({
                    type: CustomToast.text,
                    text1: translate('common.versionCopied'),
                  });
                }}>
                <Text
                  variant="captionReg"
                  color="textSecondary"
                  textAlign="center">
                  {translate('common.appVersion', {
                    version: `${version}`,
                  })}
                </Text>
              </Pressable>
            </Box>
          </>
        );
      case 'security':
        return (
          <SecurityTab
            onEnableBiometric={() => navigation.navigate('ConfirmPassword')}
            onEnable2FA={() => navigation.navigate('TwoFactorActivation')}
            onDisable2FA={() => navigation.navigate('TwoFactorDisable')}
          />
        );
      case 'verification':
        return <VerificationTabWidget />;
      case 'affiliate':
        return <AffiliateTab />;
      case 'margin':
        return <MarginProfileTab />;
    }
  }, [activeTab, barHeight, bottom, navigation]);

  return (
    <Screen>
      <Tabs
        data={tabButtons}
        value={activeTab}
        onChange={setActiveTab}
        type="default"
        tabMinWidth={93}
        wrapperProps={{
          px: 'm',
          accessible: true,
          accessibilityLabel: 'Profile tabs',
          ...testID('profileTabs'),
        }}
      />
      {renderActiveScreen()}
    </Screen>
  );
};
