import React, { useMemo } from 'react';
import { Box, Text } from '../atoms';
import { formatCrypto, translate } from '../../helpers';
export const PositionDetailsTable = ({ position }) => {
    const rows = useMemo(() => [
        {
            label: translate('activity.marginPosition.pair'),
            value: position.InstrumentSymbol,
        },
        {
            label: translate('activity.marginPosition.position'),
            value: position.PositionType,
        },
        {
            label: translate('activity.marginPosition.size'),
            value: `${formatCrypto(position.PositionAmount, position.PositionProductDecimalPlaces, position.Product1Symbol, false)}`,
        },
        {
            label: translate('activity.marginPosition.costBasis'),
            value: `${formatCrypto(position.CostBasis || 0, position.PositionProductDecimalPlaces, position.Product2Symbol, false)}`,
        },
        {
            label: translate('activity.marginPosition.positionValue'),
            value: `${formatCrypto(position.PositionValue || 0, position.PositionProductDecimalPlaces, position.Product2Symbol, false)}`,
        },
        {
            label: translate('activity.marginPosition.interestAccured'),
            value: `${formatCrypto(position.InterestAccrued, position.BorrowedProductDecimalPlaces, position.BorrowedProductSymbol, false)}`,
        },
        {
            label: translate('activity.marginPosition.unrealizedPnL'),
            value: `${formatCrypto(position.UnrealizedPnL, position.NotionalProductDecimalPlaces, position.NotionalProductSymbol, false)}`,
        },
        {
            label: translate('activity.marginPosition.remainingLiability'),
            value: `${formatCrypto(position.RemainingLiability || 0, position.BorrowedProductDecimalPlaces, position.BorrowedProductSymbol, false)}`,
        },
    ], [position]);
    return (<Box alignSelf="stretch" padding="s" backgroundColor="background1">
      {rows.map((item, index) => (<Box key={index} flexDirection="row" justifyContent="space-between" paddingVertical="xs">
          <Text variant="captionReg" color="textSecondary">
            {item.label}:
          </Text>
          <Text variant="bodyReg">{item.value}</Text>
        </Box>))}
    </Box>);
};
