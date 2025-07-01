import React, { useMemo } from 'react';

import { ApexTrade } from '../../../helpers/apiTransformers';
import { translate } from '../../../helpers/i18n';

import { TradesRow } from '../molecules';
import { Text, View } from '../../../components/atoms';
import { testID } from '../../../helpers/testId';

type TradesTableProps = {
  data?: ApexTrade[];
  maxVisible?: number;
};

export const TradesTable = ({ data, maxVisible = 10 }: TradesTableProps) => {
  const visibleData = useMemo(() => data?.slice(-maxVisible), [data]);

  return (
    <>
      <View
        flexDirection="row"
        paddingHorizontal="m"
        paddingVertical="xxs"
        justifyContent="space-between"
        {...testID('recentTradesTable')}>
        <Text variant="captionReg" color="textSecondary">
          {translate('price')}
        </Text>
        <Text variant="captionReg" color="textSecondary" textAlign="center">
          {translate('qty')}
        </Text>
        <Text variant="captionReg" color="textSecondary">
          {translate('time')}
        </Text>
      </View>
      {visibleData?.map((item, index) => (
        <TradesRow item={item} key={index} />
      ))}
    </>
  );
};
