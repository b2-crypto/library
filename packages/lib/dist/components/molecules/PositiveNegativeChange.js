import { useTheme } from '@shopify/restyle';
import React from 'react';
import { PercentDown, PercentUp } from '../../assets/icons';
import { Box, Text } from '../atoms';
export const PositiveNegativeChange = ({ change, variant = 'captionReg', }) => {
    const { colors } = useTheme();
    if (!change) {
        return null;
    }
    return (<Box flexDirection="row" alignItems="center">
      <Text variant={variant} mr="xs" color={change >= 0 ? 'buy' : 'sell'}>
        {change?.toFixed(2)}
      </Text>
      {change >= 0 ? (<PercentUp color={colors.buy}/>) : (<PercentDown color={colors.sell}/>)}
    </Box>);
};
