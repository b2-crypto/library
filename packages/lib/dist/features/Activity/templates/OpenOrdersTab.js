import React, { useCallback, useEffect } from 'react';
import { DeviceEventEmitter } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAppState } from '../../../hooks';
import { useOpenOrders } from '../hooks';
import { EVENTS } from '../../../helpers/constants';
import { ActivityList, OrderItemView } from '../organisms';
export const OpenOrdersTab = ({ depth, instrumentId, onActivityPress, ...listProps }) => {
    const { openOrders, isRefetching, isLoading, isUninitialized, hasMore, loadMore, refetch, } = useOpenOrders({ depth, instrumentId });
    const refetchOrders = useCallback(() => {
        if (!isUninitialized) {
            refetch();
        }
    }, [isUninitialized, refetch]);
    useFocusEffect(refetchOrders);
    useAppState({ onForeground: refetchOrders });
    useEffect(() => {
        const dashboardRefreshSub = DeviceEventEmitter.addListener(EVENTS.DASHBOARD_REFRESH, () => {
            refetchOrders();
        });
        const pairDetailsRefreshSub = DeviceEventEmitter.addListener(EVENTS.PAIR_DETAILS_REFRESH, () => {
            refetchOrders();
        });
        return () => {
            dashboardRefreshSub.remove();
            pairDetailsRefreshSub.remove();
        };
    }, [refetchOrders]);
    const onPress = useCallback((item) => {
        onActivityPress({ type: 'order', item });
    }, []);
    return (<ActivityList {...listProps} data={openOrders} loading={isLoading} refetching={isRefetching} hasMore={hasMore} ActivityItemView={OrderItemView} onPress={onPress} loadMore={loadMore} refetch={refetch}/>);
};
