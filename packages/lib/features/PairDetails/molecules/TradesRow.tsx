import React from 'react';
import format from 'date-fns/format';

import { ApexTrade } from '../../../helpers/apiTransformers';
import { formatUSD } from '../../../helpers/format';
import { OrderSideType } from '../../../types/orderBookTypes';

import { Text, View } from '../../../components/atoms';

type TradesRowProps = {
  item: ApexTrade;
};

export const TradesRow = ({ item }: TradesRowProps) => (
  <View
    flexDirection="row"
    justifyContent="space-between"
    borderTopColor="border3"
    paddingHorizontal="m"
    paddingVertical="xxs"
    borderTopWidth={1}>
    <View flex={1}>
      <Text
        variant="captionBold"
        textAlign="left"
        color={item.takerSide === OrderSideType.ask ? 'sell' : 'buy'}>
        {formatUSD(item.price)}
      </Text>
    </View>
    <View flex={1}>
      <Text variant="captionReg" color="textSecondary" textAlign="right">
        {item.quantity.toString().split('.')[0]}
      </Text>
    </View>
    <View flex={1}>
      <Text variant="captionReg" textAlign="left">
        .{item.quantity.toString().split('.')[1] ?? 0}
      </Text>
    </View>
    <View flex={1}>
      <Text variant="captionReg" color="textSecondary" textAlign="right">
        {format(item.tradetime, 'hh:mm:ss')}
      </Text>
    </View>
  </View>
);
