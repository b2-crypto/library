import React, { useCallback } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Platform,
  StyleSheet,
} from 'react-native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { useGetInstrumentWithLevel1 } from '../../hooks';
import { DashedBox, Box } from '../atoms';
import {
  getProductIcon,
  PriceCardTitle,
  Card,
  ProductPairIcon,
} from '../molecules';

import { PriceChartWidget } from './PriceChart';

const CARD_HEIGHT = 200;

type PriceCardItem = {
  id: number;
  symbol: string;
  symbol2: string;
  name: string;
  price: number;
  changePct?: number;
};

type PriceListProps = {
  data: PriceCardItem[];
  maxItems?: number;
  onItemPress: (item: PriceCardItem) => void;
  children: (item: PriceCardItem) => React.ReactNode | React.ReactNode[];
  isReadyToLoad?: boolean;
};

export function usePrices({ skipQuery }: { skipQuery: boolean }) {
  const { data, ...rest } = useGetInstrumentWithLevel1(skipQuery);
  const prices: PriceCardItem[] = React.useMemo(
    () =>
      data.map(i => ({
        id: i.InstrumentId,
        symbol: i.Product1Symbol,
        symbol2: i.Product2Symbol,
        name: i.VenueSymbol,
        price: i.LastTradedPx,
        changePct: i.Rolling24HrPxChange,
      })) || [],
    [data],
  );

  return { data: prices, ...rest };
}

export const PricesList = ({
  data,
  onItemPress,
  children,
}: Omit<PriceListProps, 'isReadyToLoad'>) => {
  const renderItem: ListRenderItem<PriceCardItem> = useCallback(
    ({ item }) => {
      return (
        <Card
          height={CARD_HEIGHT}
          variant="elevated"
          marginHorizontal="s"
          marginVertical="m"
          width={
            Platform.OS === 'web' ? 350 : Dimensions.get('window').width * 0.8
          }>
          <DashedBox bottomDash borderColor="border1">
            <PriceCardTitle
              icon={
                <ProductPairIcon symbol1={item.symbol} symbol2={item.symbol2} />
              }
              item={item}
              onPress={() => onItemPress(item)}
            />
          </DashedBox>
          {!!item.id && children(item)}
        </Card>
      );
    },
    [children],
  );

  return (
    <Box paddingHorizontal="s">
      <FlashList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        horizontal={true}
        estimatedItemSize={CARD_HEIGHT}
      />
    </Box>
  );
};

export const PricesListWidget = ({
  isReadyToLoad,
  maxItems,
  ...rest
}: Omit<PriceListProps, 'data' | 'children'>) => {
  const { data } = usePrices({ skipQuery: !isReadyToLoad });

  if (!data || data.length === 0) {
    return <ActivityIndicator size="large" style={styles.spinner} />;
  }

  return (
    <PricesList
      data={
        maxItems && data.length >= maxItems ? data.slice(0, maxItems) : data
      }
      {...rest}>
      {item => (
        <PriceChartWidget
          color={getProductIcon(item.symbol)?.color}
          instrumentId={item.id}
          symbol={item.symbol2}
        />
      )}
    </PricesList>
  );
};

const styles = StyleSheet.create({
  spinner: {
    margin: 10,
  },
});
