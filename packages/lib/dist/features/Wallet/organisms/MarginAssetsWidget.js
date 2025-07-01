import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { translate } from '../../../helpers/i18n';
import { useMarginBalances } from '../hooks';
import { MarginWalletItem, MarginProductDetailsModal, } from '../molecules';
import { SectionHeading, Text } from '../../../components';
import { Box } from '../../../components/atoms';
import { useModalControl } from '../../../hooks';
import { getDefaultStorage, useStringValue, STORAGE_KEYS, } from '../../../services/storage';
import { ActionBar } from './ActionBar';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        paddingBottom: 50,
    },
});
export const MarginAssetsWidget = () => {
    const navigation = useNavigation();
    const [selectedProduct, setSelectedProduct] = useState();
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const { modalVisible, hideModal, showModal } = useModalControl();
    const [hideSmallAmountsValue, setHideSmallAmountsValue] = useStringValue(STORAGE_KEYS.HIDE_MARGIN_SMALL_AMOUNTS, getDefaultStorage());
    const hideSmallAmounts = hideSmallAmountsValue === 'true';
    const { data: collateralFunds, refetch } = useMarginBalances(hideSmallAmounts);
    const handleProductPress = (item) => {
        setSelectedProduct(item);
        showModal();
    };
    const handleCloseModal = () => {
        setSelectedProduct(undefined);
        hideModal();
    };
    const toggleHideSmallAmounts = (checked) => {
        setHideSmallAmountsValue(checked.toString());
    };
    const handleSearchPress = () => {
        setIsSearchExpanded(true);
    };
    const handleSearchClose = () => {
        setIsSearchExpanded(false);
        setSearchValue('');
    };
    const filteredCollateralFunds = useMemo(() => {
        return (collateralFunds?.filter(p => p.CollateralEnabled &&
            (p.ProductFullName.toLowerCase().includes(searchValue.toLowerCase()) ||
                p.ProductSymbol.toLowerCase().includes(searchValue.toLowerCase()))) || []);
    }, [collateralFunds, searchValue]);
    const handleTransferSuccess = () => {
        setSelectedProduct(undefined);
        refetch();
    };
    const handleTransferPress = () => {
        if (modalVisible) {
            handleCloseModal();
        }
        // Select the product with the lowest ProductId (usually will be USD)
        const productId = selectedProduct?.ProductId ||
            collateralFunds?.reduce((highest, current) => !highest || current.ProductId < highest.ProductId ? current : highest, undefined)?.ProductId;
        setTimeout(() => {
            navigation.navigate('Transfer', {
                productId,
                onSuccess: handleTransferSuccess,
            });
        }, modalVisible ? 100 : 0);
    };
    return (<Box flex={1}>
      <MarginProductDetailsModal modalVisible={modalVisible} handleClose={handleCloseModal} productItem={selectedProduct} onTransferPress={handleTransferPress}/>
      <SectionHeading>
        <Text variant="textBold">
          {translate('marginTrading.balances.heading')}
        </Text>
      </SectionHeading>
      <ActionBar searchValue={searchValue} setSearchValue={setSearchValue} isSearchExpanded={isSearchExpanded} onSearchPress={handleSearchPress} onSearchClose={handleSearchClose} hideSmallAmounts={hideSmallAmounts} onToggleHideSmallAmounts={toggleHideSmallAmounts} onTransferPress={handleTransferPress}/>
      <FlatList scrollEnabled={false} style={styles.container} data={filteredCollateralFunds} renderItem={({ item }) => (<MarginWalletItem item={item} onPress={() => handleProductPress(item)}/>)} keyExtractor={item => item.ProductFullName} contentContainerStyle={styles.listContainer} showsVerticalScrollIndicator={false} ListEmptyComponent={<Box padding="m" alignItems="center">
            <Text variant="bodyReg" color="textSecondary">
              {translate('marginTrading.balances.noAssetsToDisplay')}
            </Text>
          </Box>}/>
    </Box>);
};
