import React from 'react';
import { View } from './View';
import { Text } from './Text';
export const CurrencyPill = ({ symbol }) => (<View variant="orderInputCurrency">
    <Text variant="captionBold" color="textSecondary" textTransform="uppercase">
      {symbol}
    </Text>
  </View>);
