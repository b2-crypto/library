import React, { useCallback } from 'react';
import camelCase from 'lodash/camelCase';
import { orderSideToImage } from '../../../helpers/activity';
import { formatNumber } from '../../../helpers/format';
import { translate } from '../../../helpers/i18n';
import { ActivityListItem } from '../molecules';
export const OrderItemView = ({ item, onPress }) => {
    const isOpen = item.status === 'Working';
    const handlePress = useCallback(() => {
        onPress?.(item);
    }, [item]);
    return (<ActivityListItem amount={formatNumber(item.amount, item.decimalPlaces)} currency={item.currency} image={orderSideToImage(item.side)} status={translate(`activity.orderStatus.${camelCase(item.status)}`, {
            defaultValue: item.status,
        })} statusColor={item.status === 'Working'
            ? 'buy'
            : item.status === 'FullyExecuted'
                ? 'textSecondary'
                : 'error'} product={item.type + ' ' + item.symbol} time={item.timestamp} title={translate(`activity.itemType.${isOpen ? 'present' : 'past'}.${item.side.toLowerCase()}`) +
            ' ' +
            item.fullName} onPress={handlePress}/>);
};
