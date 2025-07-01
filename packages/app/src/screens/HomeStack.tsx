import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@shopify/restyle';
import React from 'react';
import { translate } from '@apex-rn/library/helpers';
import { useVerificationStatus } from '@apex-rn/library/hooks';
import { Theme } from '@apex-rn/library/theme';
import {
  Activity as ActivityIcon,
  DashboardIcon,
  MarketsIcon,
  ProfileIcon,
  WalletIcon,
} from '@apex-rn/library/assets/icons';

import { HomeTabsParamList } from '../routes/types';

import { Activity } from './Activity';
import { Dashboard } from './Dashboard';
import { MarketsScreen } from './Markets';
import { Profile } from './Profile';
import { Wallet } from './Wallet';

const Tab = createBottomTabNavigator<HomeTabsParamList>();

export const HomeNavigator = () => {
  const { colors } = useTheme<Theme>();
  const { isTransactionsAllowed } = useVerificationStatus();

  const screenOptions = {
    tabBarActiveTintColor: colors.textPrimary,
    tabBarInactiveTintColor: colors.textSecondary,
    tabBarStyle: {
      position: 'absolute' as const,
      elevation: 0,
      backgroundColor: colors.toolbarBlur,
    },
    tabBarLabelStyle: {
      fontFamily: 'Helvetica',
      fontSize: 11,
      fontWeight: '700' as const,
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="Dashboard">
      <Tab.Screen
        name="Dashboard"
        options={{
          headerShown: false,
          tabBarLabel: translate('screens.dashboard'),
          tabBarIcon: ({ focused }) => (
            <DashboardIcon
              fill={focused ? colors.textPrimary : colors.textSecondary}
            />
          ),
        }}
        component={Dashboard}
      />
      <Tab.Screen
        name="Markets"
        options={{
          headerShown: false,
          tabBarLabel: translate('screens.trade'),
          tabBarIcon: ({ focused }) => (
            <MarketsIcon
              fill={focused ? colors.textPrimary : colors.textSecondary}
            />
          ),
        }}
        component={MarketsScreen}
      />
      {!!isTransactionsAllowed && (
        <Tab.Screen
          name="Wallet"
          options={{
            headerShown: false,
            tabBarLabel: translate('screens.wallet'),
            tabBarIcon: ({ focused }) => (
              <WalletIcon
                fill={focused ? colors.textPrimary : colors.textSecondary}
              />
            ),
          }}
          component={Wallet}
        />
      )}
      {!!isTransactionsAllowed && (
        <Tab.Screen
          name="Activity"
          options={{
            headerShown: false,
            tabBarLabel: translate('screens.activity'),
            tabBarIcon: ({ focused }) => (
              <ActivityIcon
                fill={focused ? colors.textPrimary : colors.textSecondary}
              />
            ),
          }}
          component={Activity}
        />
      )}
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarLabel: translate('screens.profile'),
          tabBarIcon: ({ focused }) => (
            <ProfileIcon
              fill={focused ? colors.textPrimary : colors.textSecondary}
            />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};
