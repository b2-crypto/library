import React, { useCallback } from 'react';
import { Box } from '../../../components/atoms';
import { VisibleWalletsModalWidget } from './ModifyModal';
import { WalletPie, WalletsListWidget } from '.';
export const SpotWallet = ({ showAnimation, navigation, }) => {
    const handleOnItemPress = useCallback((item) => {
        navigation.navigate('WalletDetail', {
            id: item.ProductId,
        });
    }, [navigation]);
    return (<>
      <Box position="absolute" zIndex={99} right={10} top={8}>
        <VisibleWalletsModalWidget />
      </Box>
      <WalletPie isReadyToLoad={showAnimation}/>
      <WalletsListWidget onItemPress={handleOnItemPress}/>
    </>);
};
