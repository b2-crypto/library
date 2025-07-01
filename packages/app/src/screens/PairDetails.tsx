import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  DeviceEventEmitter,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@shopify/restyle';
import {
  Box,
  Button,
  Card,
  SectionHeading,
  Screen,
  ScreenHeader,
} from '@apex-rn/library/components';
import {
  ACTIVITY_DEFAULT_TABS,
  MARGIN_ACTIVITY_TABS,
  ActivityTabs,
} from '@apex-rn/library/features/Activity';
import {
  PairDepthChartCardWidget,
  PairHeader,
  PairPriceChart,
  PairStatsTable,
  PairTabsTablesWidget,
} from '@apex-rn/library/features/PairDetails';
import { AccountSelector } from '@apex-rn/library/features/Wallet';
import {
  useUserCurrentAccount,
  useVerificationStatus,
} from '@apex-rn/library/hooks';
import { useMarginInstrumentsList } from '@apex-rn/library/features/Markets';
import { EVENTS, translate, testID } from '@apex-rn/library/helpers';
import { IInstrumentWithLevel1 } from '@apex-rn/library/types';
import { Buy, Sell } from '@apex-rn/library/assets/icons';
import { Theme } from '@apex-rn/library/theme';

// Project-Specific Imports
import { HomeScreenProps } from '../routes/types';
import { useMarginEnabled } from '../../../lib/features/Margin';

const InstrumentCharts = memo(
  ({
    selectedInstrument,
    isReadyToLoadTrades = true,
  }: {
    selectedInstrument: IInstrumentWithLevel1;
    isReadyToLoadTrades: boolean;
  }) => (
    <>
      <Card variant="elevated" marginHorizontal="m" marginVertical="s">
        <PairPriceChart
          instrumentId={selectedInstrument.InstrumentId}
          skipQuery={!isReadyToLoadTrades}
        />
      </Card>
      <Card variant="elevated" marginHorizontal="m" marginVertical="s">
        <PairStatsTable instrument={selectedInstrument} />
      </Card>
      <Card variant="elevated" marginHorizontal="m" marginVertical="s">
        <PairDepthChartCardWidget
          instrumentId={selectedInstrument.InstrumentId}
        />
      </Card>
      <Card variant="elevated" marginHorizontal="m" marginVertical="s">
        <PairTabsTablesWidget
          instrumentId={selectedInstrument.InstrumentId}
          skipQuery={!isReadyToLoadTrades}
        />
      </Card>
    </>
  ),
);
InstrumentCharts.displayName = 'InstrumentChartsAsyncLoad';

const BuySellButtons = memo(({ instrumentId }: { instrumentId: number }) => {
  const { isTransactionsAllowed } = useVerificationStatus();
  const navigation = useNavigation();
  const { colors } = useTheme<Theme>();

  if (!isTransactionsAllowed) {
    return null;
  }

  return (
    <Box
      flexDirection="row"
      backgroundColor="toolbarBlur"
      padding="sm"
      justifyContent="center"
      borderBottomColor="border2"
      borderBottomWidth={1}>
      <Button
        flex={1}
        size="small"
        variant="buy"
        label={translate('buy')}
        onPress={() =>
          navigation.navigate('CreateOrder', {
            id: instrumentId,
            isBuy: true,
          })
        }
        icon={<Buy color={colors.white} />}
        mr="sm"
        accessibilityLabel="Buy button"
        {...testID('buy')}
      />
      <Button
        flex={1}
        size="small"
        variant="sell"
        label={translate('sell')}
        onPress={() =>
          navigation.navigate('CreateOrder', {
            id: instrumentId,
            isBuy: false,
          })
        }
        icon={<Sell color={colors.white} />}
        accessibilityLabel="Sell button"
        {...testID('sell')}
      />
    </Box>
  );
});
BuySellButtons.displayName = 'BuySellButtons';

const PairActivities = memo(({ instrumentId }: { instrumentId: number }) => {
  const navigation = useNavigation();
  const isMarginEnabled = useMarginEnabled();
  const tabs = isMarginEnabled ? MARGIN_ACTIVITY_TABS : ACTIVITY_DEFAULT_TABS;
  type TabName = keyof typeof tabs;
  const renderTab = useCallback(
    (tab: TabName) => {
      const Tab = tabs[tab];
      return (
        <Tab
          depth={15}
          instrumentId={instrumentId}
          itemVariant={
            ['openPositions', 'closedPositions'].includes(tab)
              ? 'card'
              : 'plain'
          }
          listVariant="map"
          listContentStyle={styles.activityList}
          onActivityPress={props => {
            navigation.navigate('ActivityDetails', props);
          }}
        />
      );
    },
    [tabs, navigation, instrumentId],
  );

  return (
    <>
      <SectionHeading>{translate('common.activity')}</SectionHeading>
      <ActivityTabs
        tabs={Object.keys(tabs) as TabName[]}
        renderTab={renderTab}
      />
    </>
  );
});
PairActivities.displayName = 'PairActivities';

export const PairDetails = ({
  route: { params },
  navigation,
}: HomeScreenProps<'PairDetails'>) => {
  const { data: instrumentsData, isLoading } = useMarginInstrumentsList();
  const { isMarginAccount, currentAccount } = useUserCurrentAccount();

  const [instrumentId, setInstrumentId] = useState<number | undefined>(
    params.instrumentId || 1,
  );

  const selectedInstrument = useMemo(
    () => instrumentsData?.find(el => el.InstrumentId === instrumentId),
    [instrumentsData, instrumentId],
  );

  const [isReadyToLoadSecondary, setIsReadyToLoadSecondary] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const instrumestsMargin = useMemo(() => {
    return isMarginAccount
      ? instrumentsData.filter(el => el.MarginEnabled)
      : instrumentsData;
  }, [instrumentsData, isMarginAccount]);

  useEffect(() => {
    if (!instrumestsMargin || instrumestsMargin.length === 0) {
      return;
    }

    const foundInstrument = instrumestsMargin.find(
      el => el.InstrumentId === instrumentId,
    );

    if (!foundInstrument) {
      setInstrumentId(instrumestsMargin[0].InstrumentId);
    }
  }, [currentAccount, instrumestsMargin, instrumentId]);

  // It's faster navigating to this screen if chart widgets are loaded after
  // some delay.
  useEffect(() => {
    const simulatePriorityLoading = setTimeout(() => {
      setIsReadyToLoadSecondary(true);
      clearTimeout(simulatePriorityLoading);
    }, 1000);

    return () => {
      clearTimeout(simulatePriorityLoading);
    };
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    DeviceEventEmitter.emit(EVENTS.PAIR_DETAILS_REFRESH);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  if (!selectedInstrument || isLoading) {
    return (
      <Screen>
        <Box flex={1} justifyContent="center" alignItems="center">
          <ActivityIndicator />
        </Box>
      </Screen>
    );
  }

  return (
    <Screen>
      <ScreenHeader
        title={translate('screens.markets')}
        onBackPress={navigation.goBack}
        rightItem={
          <Box flex={1} alignItems="flex-end">
            <AccountSelector isFullSize={false} />
          </Box>
        }
      />

      {!isLoading && !!instrumentId && !!selectedInstrument && (
        <>
          <ScrollView
            overScrollMode="never" // without this android app will crash
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <PairHeader
              instrumentId={instrumentId}
              instrumentsData={instrumestsMargin}
              handleSelectedPair={setInstrumentId}
              isLoading={isLoading}
            />
            <Box paddingBottom="lg" paddingTop="s">
              <InstrumentCharts
                selectedInstrument={selectedInstrument}
                isReadyToLoadTrades={isReadyToLoadSecondary}
              />
              {isReadyToLoadSecondary && (
                <PairActivities instrumentId={instrumentId} />
              )}
            </Box>
          </ScrollView>
          <BuySellButtons instrumentId={instrumentId} />
        </>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({ activityList: { paddingBottom: 100 } });
