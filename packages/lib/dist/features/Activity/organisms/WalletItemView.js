import React, { useCallback } from 'react';
import { walletActivityTypeToImage } from '../../../helpers/activity';
import { formatNumber } from '../../../helpers/format';
import { translate } from '../../../helpers/i18n';
import { ActivityListItem } from '../molecules';
export const WalletItemView = ({ item, onPress }) => {
    const isFinished = item.status === 'FullyProcessed';
    const handlePress = useCallback(() => {
        onPress?.(item);
    }, [item]);
    return (<ActivityListItem amount={formatNumber(item.amount, item?.decimalPlaces)} currency={item?.currency} image={walletActivityTypeToImage(item.type)} product={item?.symbol + ' ' + item?.fullName} time={item.timestamp} title={translate(`activity.itemType.${isFinished ? 'past' : 'present'}.${item.type.toLowerCase()}`) +
            ' ' +
            item?.symbol} onPress={handlePress}/>);
};
