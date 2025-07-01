import React, { useCallback, useEffect } from 'react';
import { DeviceEventEmitter } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAppState } from '../../../hooks';
import { useWithdrawTickets } from '../hooks';
import { EVENTS } from '../../../helpers/constants';
import { ActivityList, WalletItemView } from '../organisms';
export const WithdrawStatusTab = ({ depth, productId, onActivityPress, ...listProps }) => {
    const { withdrawTickets, isRefetching, isUninitialized, isLoading, hasMore, loadMore, refetch, } = useWithdrawTickets({ depth, productId });
    const refetchOrders = useCallback(() => {
        if (!isUninitialized) {
            refetch();
        }
    }, [isUninitialized, refetch]);
    useFocusEffect(refetchOrders);
    useAppState({ onForeground: refetchOrders });
    useEffect(() => {
        const pairDetailsRefreshSub = DeviceEventEmitter.addListener(EVENTS.PAIR_DETAILS_REFRESH, () => {
            refetchOrders();
        });
        return () => {
            pairDetailsRefreshSub.remove();
        };
    }, [refetchOrders]);
    const onPress = useCallback((item) => {
        onActivityPress({
            type: 'wallet',
            item,
        });
    }, []);
    return (<ActivityList {...listProps} data={withdrawTickets} loading={isLoading} refetching={isRefetching} hasMore={hasMore} ActivityItemView={WalletItemView} onPress={onPress} loadMore={loadMore} refetch={refetch}/>);
};
