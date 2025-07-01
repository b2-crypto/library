import React, { useCallback } from 'react';
import { Screen } from '@apex-rn/library/components';
import {
  AssetInstrumentsList,
  MarginInstrumentsList,
} from '@apex-rn/library/features/Markets';
import { AccountSelector } from '@apex-rn/library/features/Wallet';
import { useUserCurrentAccount } from '@apex-rn/library/hooks';

import { HomeScreenProps } from '../routes/types';

export const MarketsScreen = ({ navigation }: HomeScreenProps<'Markets'>) => {
  const { isMarginAccount } = useUserCurrentAccount();

  const onSelectMarketListItem = useCallback(
    (instrumentId: number) => {
      navigation.navigate('PairDetails', {
        instrumentId,
      });
    },
    [navigation],
  );

  const ListComponent = isMarginAccount
    ? MarginInstrumentsList
    : AssetInstrumentsList;

  return (
    <Screen>
      <AccountSelector />
      <ListComponent onItemPress={onSelectMarketListItem} />
    </Screen>
  );
};
