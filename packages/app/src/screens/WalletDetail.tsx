import React, { useCallback, useMemo, useState } from 'react';
import {
  DeviceEventEmitter,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from 'react-native';
import camelCase from 'lodash/camelCase';
import startCase from 'lodash/startCase';
import { EVENTS, translate } from '@apex-rn/library/helpers';
import { useUserAccounts, useWallets } from '@apex-rn/library/hooks';
import {
  Card,
  ScreenHeader,
  SectionHeading,
  ButtonsRow,
  Screen,
  Box,
} from '@apex-rn/library/components';
import { RecentActivityTab } from '@apex-rn/library/features/Activity';
import {
  WalletDetailsTable,
  BalanceCard,
  AssetSelector,
} from '@apex-rn/library/features/Wallet';
import {
  Deposit,
  Receive,
  Send,
  Withdraw,
  Transfer,
  Convert,
} from '@apex-rn/library/assets/icons';

import { RootStackScreenProps } from '../routes/types';
import { usePrevRouteName } from '../routes/usePrevRouteName';

interface ActionButton {
  label: string;
  Icon: React.ComponentType<{ color: string }>;
  onPress: () => void;
}

interface Product {
  ProductId: number;
  ProductType: string;
  CollateralEnabled: boolean;
}

const createTransferButton = (
  product: Product,
  navigation: any,
): ActionButton | null => {
  return {
    label: translate('common.transfer'),
    Icon: Transfer,
    onPress: () => {
      navigation.navigate('Transfer', {
        productId: product.ProductId,
        onSuccess: () => navigation.goBack(),
      });
    },
  };
};

const createFiatButtons = (
  product: Product,
  navigation: any,
  transferButton: ActionButton | null,
  commonButtons: ActionButton[],
): ActionButton[] => [
  {
    label: translate('deposit'),
    Icon: Deposit,
    onPress: () => {
      navigation.navigate('DepositScreen', { id: product.ProductId });
    },
  },
  {
    label: translate('withdraw'),
    Icon: Withdraw,
    onPress: () => {
      navigation.navigate('WithdrawScreen', { id: product.ProductId });
    },
  },
  ...commonButtons,
  ...(transferButton ? [transferButton] : []),
];

const createCryptoButtons = (
  product: Product,
  navigation: any,
  transferButton: ActionButton | null,
  commonButtons: ActionButton[],
): ActionButton[] => [
  {
    label: translate('send'),
    Icon: Send,
    onPress: () => {
      navigation.navigate('SendScreen', {
        id: product.ProductId,
      });
    },
  },
  {
    label: translate('receive'),
    Icon: Receive,
    onPress: () => {
      navigation.navigate('ReceiveScreen', {
        id: product.ProductId,
      });
    },
  },
  ...commonButtons,
  ...(transferButton ? [transferButton] : []),
];

export const WalletDetail = ({
  navigation,
  route: {
    params: { id },
  },
}: RootStackScreenProps<'WalletDetail'>) => {
  const prevRouteName = usePrevRouteName() || 'Wallet';

  const { data, isLoading } = useWallets({
    skipQuery: false,
    includePending: true,
  });
  const { data: accounts } = useUserAccounts();
  const [selectedId, setSelectedId] = useState(id);
  const [refreshing, setRefreshing] = useState(false);

  const product = useMemo(
    () => data?.find(el => el.ProductId === selectedId),
    [data, selectedId],
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    DeviceEventEmitter.emit(EVENTS.WALLET_DETAILS_REFRESH);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const actionButtons = useMemo(() => {
    if (!product) {
      return [];
    }

    const commonButtons: ActionButton[] = [
      {
        label: translate('convert'),
        Icon: Convert,
        onPress: () => {
          navigation.navigate('ConvertScreen');
        },
      },
    ];

    const transferButton =
      accounts?.length && accounts?.length > 1 && product.CollateralEnabled
        ? createTransferButton(product, navigation)
        : null;

    return product.ProductType === 'CryptoCurrency'
      ? createCryptoButtons(product, navigation, transferButton, commonButtons)
      : createFiatButtons(product, navigation, transferButton, commonButtons);
  }, [product, navigation, accounts]);

  if (!product) {
    return null;
  }

  return (
    <Screen>
      <ScreenHeader
        title={translate(`screens.${camelCase(prevRouteName)}`, {
          defaultValue: startCase(prevRouteName),
        })}
        onBackPress={navigation.goBack}
      />
      <AssetSelector
        setSelectedId={setSelectedId}
        product={product}
        products={data}
        isLoading={isLoading}
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <BalanceCard product={product} />
        <Card
          heading={translate('wallet.details')}
          variant="elevated"
          marginHorizontal="m"
          marginBottom="m">
          <WalletDetailsTable product={product} />
        </Card>
        <SectionHeading>{translate('recentActivity')}</SectionHeading>
        <RecentActivityTab
          depth={5}
          productId={product?.ProductId}
          itemVariant="plain"
          listVariant="map"
          listContentStyle={styles.activityList}
          onActivityPress={props => {
            navigation.navigate('ActivityDetails', props);
          }}
        />
      </ScrollView>
      <Box mt="m" width="100%" borderTopWidth={1} borderColor={'border2'}>
        <ButtonsRow
          size="medium"
          buttons={actionButtons}
          padding="sm"
          flexDirection="row"
        />
      </Box>
    </Screen>
  );
};

const styles = StyleSheet.create({ activityList: { paddingBottom: 100 } });
