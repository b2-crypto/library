import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { DeviceEventEmitter, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAccountTransactions } from '../hooks';
import { useAppState } from '../../../hooks';
import { EVENTS } from '../../../helpers/constants';
import { AccountTransactionItemView, ActivityList } from '../organisms';
import { Box, Tabs } from '../../../components';
import { testID, translate } from '../../../helpers';
export const RecentActivityTab = ({ depth, productId, onActivityPress, ...listProps }) => {
    const { accountTransactions, isRefetching, isLoading, isUninitialized, hasMore, loadMore, refetch, } = useAccountTransactions({ depth, productId });
    const [activeTab, setActiveTabId] = useState('all');
    const refetchOrders = useCallback(() => {
        if (!isUninitialized) {
            refetch();
        }
    }, [isUninitialized, refetch]);
    useFocusEffect(refetchOrders);
    useAppState({ onForeground: refetchOrders });
    useEffect(() => {
        const walletDetailsRefreshSub = DeviceEventEmitter.addListener(EVENTS.WALLET_DETAILS_REFRESH, () => {
            refetchOrders();
        });
        return () => {
            walletDetailsRefreshSub.remove();
        };
    }, [refetchOrders]);
    const onPress = useCallback((item) => {
        onActivityPress({
            type: 'accountTransaction',
            item,
        });
    }, [onActivityPress]);
    const tabButtons = useMemo(() => ['all', 'recieved', 'sent'].map(tab => ({
        value: tab,
        label: translate(`tradeScreen.activity.${tab}`),
    })), []);
    const filterTransactions = useMemo(() => {
        return activeTab === 'all'
            ? accountTransactions
            : accountTransactions.filter(x => x.referenceType === activeTab.replace(/s$/, ''));
    }, [activeTab, accountTransactions]);
    return (<>
      <Box borderColor="border3" borderBottomWidth={1}>
        <Tabs type="pills_wide" data={tabButtons} value={activeTab} onChange={setActiveTabId} wrapperProps={{
            accessibilityLabel: 'Market filters',
            ...testID('activity filters'),
        }} containerStyles={styles.filterPills}/>
      </Box>
      <ActivityList {...listProps} data={filterTransactions} loading={isLoading} refetching={isRefetching} hasMore={hasMore} ActivityItemView={AccountTransactionItemView} onPress={onPress} loadMore={loadMore} refetch={refetch}/>
    </>);
};
const styles = StyleSheet.create({
    content: { paddingTop: 8, paddingBottom: 50 },
    filterPills: { paddingHorizontal: 12 },
});
