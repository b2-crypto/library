import React from 'react';
import { Box, Text } from '../../../components/atoms';
import { Card, ProductPairIcon, PositiveNegativeChange, } from '../../../components/molecules';
import { testID } from '../../../helpers/testId';
import { formatNumber, increment2digits } from '../../../helpers/format';
export const AssetListItem = ({ item }) => (<Card flexDirection="row" alignItems="center" padding="m" marginHorizontal="m" marginVertical="s" variant="elevated">
    <ProductPairIcon symbol1={item.Product1Symbol} symbol2={item.Product2Symbol}/>
    <Box flexDirection="row" alignItems="center" flex={1} justifyContent="space-between">
      <Box>
        <Text variant="textBold" accessibilityLabel="Instrument symbols" {...testID(`symbols${item.VenueSymbol}`)}>
          {item.VenueSymbol.toUpperCase()}
        </Text>
        <Text variant="captionBold" color="textSecondary">
          {item.Product1Name}
        </Text>
      </Box>
      <Box justifyContent="flex-start" alignItems="flex-end">
        <Text accessible accessibilityLabel="Price" {...testID(`price${item.VenueSymbol}`)}>
          {formatNumber(item.LastTradedPx, increment2digits(item.PriceIncrement), true)}
        </Text>
        <PositiveNegativeChange change={item.Rolling24HrPxChangePercent}/>
      </Box>
    </Box>
  </Card>);
