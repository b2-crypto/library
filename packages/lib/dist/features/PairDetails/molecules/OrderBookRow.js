import React from 'react';
import { useTheme } from '@shopify/restyle';
import { Box } from '../../../components/atoms';
import { TableCell } from '../../../components/molecules';
import { hexToRgbA } from '../../../helpers/common';
export const OrderBookRow = ({ row }) => {
    const theme = useTheme();
    const { colors } = theme;
    return (<Box borderTopColor="border3" borderTopWidth={1} flexDirection="row">
      {row.map((cell, index) => (<Box key={index} borderRightColor="border3" borderRightWidth={index === row.length - 1 ? 0 : 1} flex={1}>
          <TableCell isNarrow title={cell.title} value={cell.value} titleColor="textPrimary" valueColor={index === 0 ? 'positiveChange' : 'negativeChange'} isInverted={index === row.length - 1}/>
          <Box position="absolute" top={0} bottom={0} right={0} zIndex={-1} elevation={-1} width={`${cell.fillPercentage}%`} left={index > 0 ? 0 : undefined} style={{
                backgroundColor: hexToRgbA(index === 0 ? colors.positiveChange : colors.negativeChange, 0.1),
            }}/>
        </Box>))}
    </Box>);
};
