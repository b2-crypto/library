import * as React from 'react';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { ActivityIndicator } from 'react-native';

import { useWallets } from '../../../hooks';
import {
  ProductIcon,
  WalletBalanceCard,
  WalletBalanceItem,
} from '../../../components/molecules';

type WalletsProps = {
  onItemPress?: (item: WalletBalanceItem) => void;
};

type WalletsScrollListProps = { data: WalletBalanceItem[] } & WalletsProps;

export function useWalletBalances() {
  const { data: walletData, ...rest } = useWallets({});

  const data: WalletBalanceItem[] = React.useMemo(
    () =>
      walletData.map(item => ({
        id: item.ProductId,
        symbol: item.ProductSymbol,
        name: item.ProductFullName,
        amount: item.Amount || 0,
        price: item.NotionalValue,
        priceSymbol: item.NotionalProductSymbol,
        decimals: item.DecimalPlaces,
      })),
    [walletData],
  );

  return { data, ...rest };
}

export const WalletsScrollList = ({
  data,
  onItemPress,
}: WalletsScrollListProps) => {
  const renderItem: ListRenderItem<WalletBalanceItem> = React.useCallback(
    ({ item }) => {
      return (
        <WalletBalanceCard
          icon={<ProductIcon symbol={item.symbol} />}
          item={item}
          onPress={
            onItemPress && item.symbol !== 'USD'
              ? () => onItemPress(item)
              : undefined
          }
        />
      );
    },
    [onItemPress],
  );

  return (
    <FlashList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      horizontal
      estimatedItemSize={196}
    />
  );
};

export const Wallets = ({ onItemPress }: WalletsProps) => {
  const { data } = useWalletBalances();

  if (!data || data.length === 0) {
    return <ActivityIndicator size="large" />;
  }

  return <WalletsScrollList data={data} onItemPress={onItemPress} />;
};
