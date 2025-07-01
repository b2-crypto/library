import React, { useMemo } from 'react';

import { translate } from '../../../helpers/i18n';
import { walletActivityTypeToImage } from '../../../helpers/activity';
import { formatCrypto, formatCurrency } from '../../../helpers/format';
import { WalletActivity } from '../../../types/apiResponses';

import { ProductIcon } from '../../../components/molecules';
import { ActivityDetailsCard } from '../organisms';

export const WalletActivityDetails = ({ item }: { item: WalletActivity }) => {
  const isFinished = item.status === 'FullyProcessed';

  const userInfo = useMemo(() => {
    const info = [];
    if (item.fullname) {
      info.push({
        title: 'fullname',
        value: item.fullname,
      });
    }
    if (item.comments) {
      info.push({
        title: 'comments',
        value: item.comments,
      });
    }
    return [];
  }, []);

  return (
    <ActivityDetailsCard
      title={item.symbol + ' ' + item.fullName}
      icon={
        item.iconSymbol ? <ProductIcon symbol={item.iconSymbol} /> : undefined
      }
      extraIcon={walletActivityTypeToImage(item.type)}
      amount={formatCrypto(item.amount, item.decimalPlaces)}
      currency={item.currency}
      product={item.currency}
      valuesInfo={[
        {
          title: translate('activity.value'),
          value: formatCurrency(
            (item.notionalRate || 1) * item.amount,
            item.notionalSymbol,
            item.notionalPlaces,
          ),
        },
      ]}
      userInfo={userInfo}
      activityType={translate(
        `activity.itemType.${isFinished ? 'past' : 'present'}.${item.type}`,
      )}
      activityStatus={item.status}
      activityTextColor={item.status === 'Rejected' ? 'error' : undefined}
      activityId={item.id}
      time={item.timestamp}
    />
  );
};
