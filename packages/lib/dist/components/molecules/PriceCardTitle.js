import React from 'react';
import { formatCurrency } from '../../helpers/format';
import { Box, Text } from '../atoms';
import { Button } from './Button';
import { PositiveNegativeChange } from './PositiveNegativeChange';
export const PriceCardTitle = ({ icon, item, onPress, }) => {
    return (<Box flexDirection="row" justifyContent="space-between" padding="m">
      <Button variant="transparent" onPress={onPress} icon={icon} label={<Text variant="textBold" textTransform="uppercase" ml="s">
            {item.name}
          </Text>} size="small"/>
      <Box alignItems="flex-end" justifyContent="center">
        <Text variant="textBold" color="textPrimary">
          {item.price ? formatCurrency(item.price, item.symbol2, 2) : ''}
        </Text>
        {item.changePct ? (<PositiveNegativeChange change={item.changePct}/>) : undefined}
      </Box>
    </Box>);
};
