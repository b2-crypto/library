import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { DeviceEventEmitter } from 'react-native';

import { EVENTS } from '../../../helpers/constants';
import { useAppState } from '../../../hooks';
import {
  ActivityInstrumentHook,
  ActivityTabProps,
  MarginPositionItem,
} from '../types';

import { useClosedMarginPositions } from '../hooks';
import { MarginPositionListItem } from '../molecules';
import { ActivityList } from '../organisms';

export const ClosedMarginPositionsTab = ({
  depth,
  instrumentId,
  onActivityPress,
  ...listProps
}: ActivityTabProps & ActivityInstrumentHook) => {
  const {
    positions,
    isRefetching,
    isLoading,
    isUninitialized,
    hasMore,
    loadMore,
    refetch,
  } = useClosedMarginPositions({ depth, instrumentId });

  const refetchPositions = useCallback(() => {
    if (!isUninitialized) {
      refetch();
    }
  }, [isUninitialized, refetch]);

  useFocusEffect(refetchPositions);

  useAppState({ onForeground: refetchPositions });

  useEffect(() => {
    const dashboardRefreshSub = DeviceEventEmitter.addListener(
      EVENTS.DASHBOARD_REFRESH,
      () => {
        refetchPositions();
      },
    );

    const pairDetailsRefreshSub = DeviceEventEmitter.addListener(
      EVENTS.PAIR_DETAILS_REFRESH,
      () => {
        refetchPositions();
      },
    );

    return () => {
      dashboardRefreshSub.remove();
      pairDetailsRefreshSub.remove();
    };
  }, [refetchPositions]);

  const onPress = useCallback(
    (item: MarginPositionItem) => {
      onActivityPress({ type: 'position', item });
    },
    [onActivityPress],
  );

  return (
    <ActivityList
      {...listProps}
      data={positions}
      loading={isLoading}
      refetching={isRefetching}
      hasMore={hasMore}
      ActivityItemView={MarginPositionListItem}
      onPress={onPress}
      loadMore={loadMore}
      refetch={refetch}
      keyExtractor={item => item.PositionId.toString()}
    />
  );
};
