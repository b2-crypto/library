import React from 'react';
import { StyleSheet } from 'react-native';
import { testID } from '../.../../../../../helpers/testId';
import CloseIcon from '../../../../assets/icons/CloseIcon';
import { Box, DashedBox, Text } from '../../../../components/atoms';
import { Button, Card, ProductIcon } from '../../../../components/molecules';
const orderMap = {
    LIMIT_ORDER: [
        'Order Type',
        'Quantity',
        'Limit Price',
        'Fee',
        'Net Receiving',
        'Order Total',
    ],
    MARKET_ORDER: [
        'Order Type',
        'Quantity',
        'Price',
        'Fee',
        'Net Receiving',
        'Order Total',
    ],
    STOP_MARKET: [
        'Order Type',
        'Leverage',
        'Quantity',
        'Stop Price',
        'Fee',
        'Net Receiving',
        'Order Total',
    ],
    STOP_LIMIT: [
        'Stop Price',
        'Quantity',
        'Limit Price',
        'Fee',
        'Net Receiving',
        'Order Total',
    ],
};
const getOrderedData = (data) => {
    const orderTypeItem = data.find(item => item.label === 'Order Type');
    const orderType = orderTypeItem?.value.replace(/\s+/g, '_').toUpperCase();
    const order = orderType && orderMap[orderType] ? orderMap[orderType] : [];
    return order
        .map(label => data.find(item => item.label === label))
        .filter(Boolean);
};
export const ConfirmView = ({ symbol, icon, title, titleColor, subTitle, data, button, onClose, secondarySymbol, }) => {
    const orderedData = getOrderedData(data);
    return (<Card variant="elevated">
      <Box flexDirection="row" justifyContent="space-between" alignItems="flex-start" padding="m">
        <Box flex={1} flexDirection="row" alignItems="center" role="heading" accessibilityRole="header" accessibilityLabel={`${title} ${symbol}`} {...testID('confirmHeader')}>
          <ProductIcon size={44} symbol={symbol} style={styles.icon}/>
          {secondarySymbol && (<ProductIcon size={44} symbol={secondarySymbol} style={styles.secondaryIcon}/>)}
          <Box ml="sm">
            <Box paddingBottom="xs" flexDirection="row" alignItems="center">
              {icon}
              <Text variant="bodyBold" color={titleColor} ml="xs">
                {title}:
              </Text>
            </Box>
            <Text variant="textBold">{subTitle}</Text>
          </Box>
        </Box>

        <Button variant="transparent" onPress={onClose} icon={<CloseIcon />} size="small" alignItems="flex-start" accessibilityLabel="Close" {...testID('closeButton')}/>
      </Box>

      <Box paddingHorizontal="m" role="list">
        {orderedData.map(item => (<DashedBox key={item.label} topDash paddingVertical="s" flexDirection={item.vertical ? 'column' : 'row'} alignItems={item.vertical ? 'flex-start' : 'center'} justifyContent={item.vertical ? 'flex-start' : 'space-between'} flexWrap="wrap" accessible accessibilityLabel={`${item.label} ${item.value}`} {...testID(`confirmItem.${item.label}`)}>
            <Text variant="captionReg" color="textSecondary" mr={!item.vertical ? 'xs' : undefined} mb={item.vertical ? 'xs' : undefined}>
              {item.label}
            </Text>
            <Text variant="bodyReg" textAlign={item.vertical ? 'left' : 'right'}>
              {item.value}
            </Text>
          </DashedBox>))}
      </Box>

      {!!button && (<Box padding="m" borderTopColor="border3" borderTopWidth={1} mt="m">
          <Box height={44}>{button}</Box>
        </Box>)}
    </Card>);
};
const styles = StyleSheet.create({
    icon: {
        zIndex: 1,
    },
    secondaryIcon: {
        marginLeft: -10,
    },
});
