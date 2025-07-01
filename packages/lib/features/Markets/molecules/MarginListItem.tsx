import React from 'react';

import { Box, Text } from '../../../components/atoms';
import {
  Card,
  ProductPairIcon,
  PositiveNegativeChange,
} from '../../../components/molecules';
import { testID } from '../../../helpers/testId';
import { formatNumber, increment2digits } from '../../../helpers/format';

export type MarginItem = {
  InstrumentId: number;
  LastTradedPx: number;
  PriceIncrement: number;
  Product1Symbol: string;
  Product1Name: string;
  Product2Symbol: string;
  Product2Name: string;
  VenueSymbol: string;
  Rolling24HrPxChangePercent: number;
  MarginEnabled: boolean;
  MarginInitialRequirement: number;
};

type ItemProps = {
  item: MarginItem;
};

export const MarginListItem = ({ item }: ItemProps) => (
  <Card
    flexDirection="row"
    alignItems="center"
    padding="m"
    marginHorizontal="m"
    marginVertical="s"
    variant="elevated">
    <ProductPairIcon
      symbol1={item.Product1Symbol}
      symbol2={item.Product2Symbol}
    />
    <Box
      flexDirection="row"
      alignItems="center"
      flex={1}
      justifyContent="space-between">
      <Box flexDirection="row" alignItems="flex-start">
        <Box>
          <Text
            variant="textBold"
            accessibilityLabel="Instrument symbols"
            {...testID(`symbols${item.VenueSymbol}`)}>
            {item.VenueSymbol.toUpperCase()}
          </Text>
          <Text variant="captionBold" color="textSecondary">
            {item.Product1Name}
          </Text>
        </Box>
        {item.MarginEnabled && item.MarginInitialRequirement !== 0 && (
          <Box
            ml="s"
            backgroundColor="textSecondary"
            borderRadius={100}
            minWidth={21}
            minHeight={21}
            alignItems="center"
            justifyContent="center">
            <Text variant="captionBold" color="white">
              {1 / item.MarginInitialRequirement + 1}x
            </Text>
          </Box>
        )}
      </Box>
      <Box justifyContent="flex-start" alignItems="flex-end">
        <Text
          accessible
          accessibilityLabel="Price"
          {...testID(`price${item.VenueSymbol}`)}>
          {formatNumber(
            item.LastTradedPx,
            increment2digits(item.PriceIncrement),
            true,
          )}
        </Text>
        <PositiveNegativeChange change={item.Rolling24HrPxChangePercent} />
      </Box>
    </Box>
  </Card>
);
