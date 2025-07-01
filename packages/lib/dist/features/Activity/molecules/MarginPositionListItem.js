import React from 'react';
import { Box, Text, TouchableOpacity } from '../../../components/atoms';
import { formatNumber } from '../../../helpers/format';
import { translate } from '../../../helpers/i18n';
import { testID } from '../../../helpers/testId';
export const MarginPositionListItem = ({ item, onPress, index, }) => {
    return (<TouchableOpacity onPress={() => onPress?.(item)} accessibilityLabel="Open details" {...testID(`itemNav${index}`)}>
      <Box alignSelf="stretch" flexDirection="row" alignItems="center" justifyContent="space-between" px="m" py="l">
        <Box flexDirection="column">
          <Text variant="textBold">
            {item.PositionType} {item.PositionProductSymbol}
          </Text>
          <Text variant="captionBold" color="textSecondary" mt="xxs">
            {item.InstrumentSymbol}
          </Text>
        </Box>
        <Box flexDirection="column">
          <Text variant="captionBold">
            {formatNumber(item.PositionAmount, item.BorrowedProductDecimalPlaces, true)}
          </Text>
          <Text variant="captionBold" color="textSecondary" mt="xxs">
            {translate('activity.marginPosition.amountShort')}
          </Text>
        </Box>
        <Box flexDirection="column">
          <Text variant="captionBold">
            {formatNumber(item.NotionalValue, item.NotionalProductDecimalPlaces, true)}
          </Text>
          <Text variant="captionBold" color="textSecondary">
            {translate('activity.marginPosition.valueShort')}
          </Text>
        </Box>
        <Box flexDirection="column">
          {item.Status === 'Open' ? (<Text variant="captionBold" color={item.UnrealizedPnL < 0 ? 'error' : undefined}>
              {item.UnrealizedPnL < 0
                ? `(${formatNumber(Math.abs(item.UnrealizedPnL), item.NotionalProductDecimalPlaces, true)})`
                : formatNumber(item.UnrealizedPnL, item.NotionalProductDecimalPlaces, true)}
            </Text>) : (<Text variant="captionBold" color={item.RealizedPnL < 0 ? 'error' : undefined}>
              {item.RealizedPnL < 0
                ? `(${formatNumber(Math.abs(item.RealizedPnL), item.NotionalProductDecimalPlaces, true)})`
                : formatNumber(item.RealizedPnL, item.NotionalProductDecimalPlaces, true)}
            </Text>)}
          <Text variant="captionBold" color="textSecondary">
            {translate('activity.marginPosition.pnlShort')}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>);
};
MarginPositionListItem.estimatedItemSize = 200;
