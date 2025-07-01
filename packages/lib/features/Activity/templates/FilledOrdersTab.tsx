import React, { useCallback, useEffect } from 'react';
import { DeviceEventEmitter } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { useAppState } from '../../../hooks';
import { useFilledOrders } from '../hooks';
import { EVENTS } from '../../../helpers/constants';
import { ActivityInstrumentHook, ActivityTabProps } from '../types';
import { OrderActivity } from '../../../types/apiResponses';

import { ActivityList, OrderItemView } from '../organisms';

export const FilledOrdersTab = ({
  depth,
  instrumentId,
  onActivityPress,
  ...listProps
}: ActivityTabProps & ActivityInstrumentHook) => {
  const {
    filledOrders,
    isUninitialized,
    isRefetching,
    isLoading,
    hasMore,
    loadMore,
    refetch,
  } = useFilledOrders({ depth, instrumentId });

  const refetchOrders = useCallback(() => {
    if (!isUninitialized) {
      refetch();
    }
  }, [isUninitialized, refetch]);

  useFocusEffect(refetchOrders);

  useAppState({ onForeground: refetchOrders });

  useEffect(() => {
    const pairDetailsRefreshSub = DeviceEventEmitter.addListener(
      EVENTS.PAIR_DETAILS_REFRESH,
      () => {
        refetchOrders();
      },
    );

    return () => {
      pairDetailsRefreshSub.remove();
    };
  }, [refetchOrders]);

  const onPress = useCallback((item: OrderActivity) => {
    onActivityPress({ type: 'order', item });
  }, []);

  return (
    <ActivityList
      {...listProps}
      data={filledOrders}
      loading={isLoading}
      refetching={isRefetching}
      hasMore={hasMore}
      ActivityItemView={OrderItemView}
      onPress={onPress}
      loadMore={loadMore}
      refetch={refetch}
    />
  );
};
