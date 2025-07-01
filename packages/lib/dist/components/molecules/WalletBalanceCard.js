import React from 'react';
import { formatCurrency, formatNumber } from '../../helpers/format';
import { Box, DashedBox, Text, TouchableOpacity } from '../atoms';
import { Card } from './Card';
export const WalletBalanceCard = ({ icon, item, onPress }) => {
    const cryptoName = (<DashedBox bottomDash flexDirection="row" alignItems="center" paddingBottom="sm" overflow="hidden">
      {icon}
      <Box marginLeft="s">
        <Text variant="textBold">{item.symbol}</Text>
        <Text numberOfLines={1}>{item.name}</Text>
      </Box>
    </DashedBox>);
    return (<Card variant="elevated" width={180} paddingVertical="sm" paddingLeft="sm" marginHorizontal="s" marginVertical="m" flex={1}>
      <Box marginRight="sm">
        {onPress ? (<TouchableOpacity onPress={onPress}>{cryptoName}</TouchableOpacity>) : (cryptoName)}
      </Box>
      <Text numberOfLines={1} adjustsFontSizeToFit mr="s" pt="m">
        {formatNumber(item.amount, item.decimals)} {item.symbol}
      </Text>
      <Box flexDirection="row" justifyContent="space-between" flexWrap="nowrap" pt="xs" pr="m">
        <Text variant="captionReg" color="textSecondary">
          {item.price && item.priceSymbol !== item.symbol
            ? formatCurrency(item.price, item.priceSymbol, 3)
            : ''}
        </Text>
      </Box>
    </Card>);
};
