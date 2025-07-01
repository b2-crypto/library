import React, { useCallback } from 'react';

import { Box } from '../../../components/atoms';
import { UserWallet } from '../../../hooks';

import { VisibleWalletsModalWidget } from './ModifyModal';

import { WalletPie, WalletsListWidget } from '.';

type SpotTabContentProps = {
  showAnimation: boolean;
  navigation: any;
};

export const SpotWallet: React.FC<SpotTabContentProps> = ({
  showAnimation,
  navigation,
}) => {
  const handleOnItemPress = useCallback(
    (item: UserWallet) => {
      navigation.navigate('WalletDetail', {
        id: item.ProductId,
      });
    },
    [navigation],
  );

  return (
    <>
      <Box position="absolute" zIndex={99} right={10} top={8}>
        <VisibleWalletsModalWidget />
      </Box>
      <WalletPie isReadyToLoad={showAnimation} />
      <WalletsListWidget onItemPress={handleOnItemPress} />
    </>
  );
};
