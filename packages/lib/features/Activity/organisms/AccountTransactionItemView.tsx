import React, { useCallback } from 'react';

import { AccountTransactionActivity } from '../../../types/apiResponses';
import { accountTransactionTypeToImage } from '../../../helpers/activity';
import { formatNumber } from '../../../helpers/format';
import { translate } from '../../../helpers/i18n';

import { ActivityListItem } from '../molecules';

export const AccountTransactionItemView = ({
  item,
  onPress,
  index,
}: {
  item: AccountTransactionActivity;
    onPress?: (item: AccountTransactionActivity) => void;
    index?: number;
}) => {
  const types = item.type.split('-');

  const handlePress = useCallback(() => {
    onPress?.(item);
  }, [item]);

  return (
    <ActivityListItem
      amount={formatNumber(item.amount, item?.decimalPlaces)}
      currency={item?.currency}
      image={accountTransactionTypeToImage(item.type)}
      product={item?.symbol + ' ' + item.fullName}
      time={item.timestamp}
      title={
        translate(`activity.itemType.past.${types[0].toLowerCase()}`) +
        ' ' +
        item?.symbol +
        (types.includes('fee') ? ' ' + translate('fee') : '')
      }
      onPress={handlePress}
      index={index}
    />
  );
};
