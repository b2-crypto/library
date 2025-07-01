import { useTheme } from '@shopify/restyle';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  DeviceEventEmitter,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { EVENTS, translate } from '@apex-rn/library/helpers';
import { useMarginEnabled } from '@apex-rn/library/features/Margin/hooks';
import { useVerificationStatus } from '@apex-rn/library/hooks';
import { Theme } from '@apex-rn/library/theme';
import {
  Box,
  SectionHeading,
  ButtonsRow,
  PricesListWidget,
  Welcome,
  Screen,
  MarketingCard,
  Text,
} from '@apex-rn/library/components';
import { OpenOrdersTab } from '@apex-rn/library/features/Activity';
import { useMarginAvailable } from '@apex-rn/library/features/Margin';
import {
  AccountBalanceWidget,
  NewsFeed,
  VerifyIdentityWidget,
  Wallets,
  MarketingCarousel,
  TransferRequests,
} from '@apex-rn/library/features/Dashboard';
import { Buy, Receive, Sell, Send } from '@apex-rn/library/assets/icons';

import { HomeScreenProps } from '../routes/types';
import { TopLogo } from '../assets/logo/TopLogo';
import marketingBgBlack from '../assets/images/marketingBg/marketingBgBlack.png';
import marketingBgBlue from '../assets/images/marketingBg/marketingBgBlue.png';
import marketingBgPink from '../assets/images/marketingBg/marketingBgPink.png';
import marketingBgPurple from '../assets/images/marketingBg/marketingBgPurple.png';
import marketingBgYellow from '../assets/images/marketingBg/marketingBgYellow.png';

export const Dashboard = ({ navigation }: HomeScreenProps<'Dashboard'>) => {
  const { colors } = useTheme<Theme>();
  const { isTransactionsAllowed } = useVerificationStatus();
  const isMarginAvailable = useMarginAvailable();
  const isMarginEnabled = useMarginEnabled();

  const [refreshing, setRefreshing] = useState(false);
  const [showPrices, setShowPrices] = useState(false);

  const actionButtons = useMemo(
    () => [
      {
        label: translate('buy'),
        Icon: Buy,
        onPress: () => {
          navigation.navigate('CreateOrder', { isBuy: true });
        },
      },
      {
        label: translate('sell'),
        Icon: Sell,
        onPress: () => {
          navigation.navigate('CreateOrder', { isBuy: false });
        },
      },
      {
        label: translate('send'),
        Icon: Send,
        onPress: () => {
          navigation.navigate('SendScreen', {});
        },
      },
      {
        label: translate('receive'),
        Icon: Receive,
        onPress: () => {
          navigation.navigate('ReceiveScreen', {});
        },
      },
    ],
    [navigation],
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    DeviceEventEmitter.emit(EVENTS.DASHBOARD_REFRESH);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // It's faster navigating to the Dashboard if the price widgets are loaded
  // after some delay.
  useEffect(() => {
    setTimeout(() => {
      setShowPrices(true);
    }, 1000);
  }, []);

  return (
    <Screen>
      <TopLogo color={colors.textPrimary} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Box paddingBottom="lg">
          <Welcome />
          <TransferRequests />
          {isTransactionsAllowed && <AccountBalanceWidget />}

          <Box mt="m">
            {isTransactionsAllowed && (
              <ButtonsRow
                size="large"
                buttons={actionButtons}
                paddingHorizontal="m"
                alignSelf="stretch"
                flexDirection="row"
              />
            )}
            <VerifyIdentityWidget />
            <MarketingCarousel marginVertical="xl">
              {isMarginAvailable && !isMarginEnabled && (
                <MarketingCard
                  title={translate('marketingWidget.margin.title')}
                  body={
                    <>
                      {translate('marketingWidget.margin.body')}
                      {'\n'}
                      <Text variant="subHeadlineBold" color="white">
                        {translate('marketingWidget.margin.cta')}
                      </Text>
                    </>
                  }
                  onPress={() =>
                    navigation.navigate('Profile', { initialTab: 'margin' })
                  }
                  bg={marketingBgPurple}
                />
              )}
              <MarketingCard
                title={translate('marketingWidget.alphapoint_bonus.title')}
                body={translate('marketingWidget.alphapoint_bonus.body')}
                bg={marketingBgBlue}
              />
              <MarketingCard
                title={translate('marketingWidget.apy_bonus.title')}
                body={translate('marketingWidget.apy_bonus.body')}
                bg={marketingBgYellow}
              />
              <MarketingCard
                title={translate('marketingWidget.send_gift.title')}
                body={translate('marketingWidget.send_gift.body')}
                bg={marketingBgBlack}
              />
              <MarketingCard
                title={translate('marketingWidget.debit_cards.title')}
                body={translate('marketingWidget.debit_cards.body')}
                bg={marketingBgPink}
              />
            </MarketingCarousel>
          </Box>

          <Box>
            <SectionHeading>{translate('dashboard.prices')}</SectionHeading>
            <PricesListWidget
              isReadyToLoad={showPrices}
              maxItems={4}
              onItemPress={item =>
                navigation.navigate('PairDetails', { instrumentId: item.id })
              }
            />
          </Box>

          <SectionHeading>{translate('activity.openOrders')}</SectionHeading>
          <OpenOrdersTab
            depth={5}
            listVariant="map"
            itemVariant="plain"
            listContentStyle={styles.openOrders}
            onActivityPress={props => {
              navigation.navigate('ActivityDetails', props);
            }}
          />

          {isTransactionsAllowed && (
            <Box>
              <SectionHeading>
                {translate('dashboard.walletBalances')}
              </SectionHeading>
              <Box marginLeft="s">
                <Wallets
                  onItemPress={item =>
                    navigation.navigate('WalletDetail', { id: item.id })
                  }
                />
              </Box>
            </Box>
          )}

          <Box>
            <SectionHeading>{translate('dashboard.newsFeed')}</SectionHeading>
            <NewsFeed
              feedURL="https://www.coindesk.com/arc/outboundfeeds/rss/"
              sourceName="CoinDesk"
            />
          </Box>
        </Box>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({ openOrders: { paddingBottom: 16 } });
