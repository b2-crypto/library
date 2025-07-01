import React, { useCallback } from 'react';

import { Screen } from '@apex-rn/library/components';

import {
  ACTIVITY_DEFAULT_TABS,
  MARGIN_ACTIVITY_TABS,
  ActivityTabs,
} from '@apex-rn/library/features/Activity';
import { AccountSelector } from '@apex-rn/library/features/Wallet';

import { useUserCurrentAccount } from '@apex-rn/library/hooks';

import { HomeScreenProps } from '../routes/types';

export const Activity = ({ navigation }: HomeScreenProps<'Activity'>) => {
  const { isMarginAccount } = useUserCurrentAccount();

  const tabs = isMarginAccount ? MARGIN_ACTIVITY_TABS : ACTIVITY_DEFAULT_TABS;
  type TabName = keyof typeof tabs;

  const renderTab = useCallback(
    (tab: TabName) => {
      let Tab = tabs[tab];

      if (!Tab) {
        const firstTabKey = Object.keys(tabs)[0] as keyof typeof tabs;
        Tab = tabs[firstTabKey];
      }

      return (
        <Tab
          depth={15}
          itemVariant={
            ['openPositions', 'closedPositions'].includes(tab)
              ? 'card'
              : 'plain'
          }
          listContentStyle={{ paddingBottom: 100 }}
          onActivityPress={props => {
            navigation.navigate('ActivityDetails', props);
          }}
        />
      );
    },
    [tabs, navigation],
  );

  return (
    <Screen>
      <AccountSelector />
      <ActivityTabs
        tabs={Object.keys(tabs) as TabName[]}
        renderTab={renderTab}
      />
    </Screen>
  );
};
