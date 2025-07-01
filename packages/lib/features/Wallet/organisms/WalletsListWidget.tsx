import React, { useCallback, useMemo, useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { SpotWalletItem, WalletsSectionList } from '../molecules';
import { translate } from '../../../helpers/i18n';
import { UserWallet, useWallets, useUserAccounts } from '../../../hooks';
import {
  STORAGE_KEYS,
  getDefaultStorage,
  useStringValue,
} from '../../../services';
import { useMarginBalances } from '../hooks';

import { ActionBar } from './ActionBar';

type WidgetProps = {
  /** Handler for user's click on item. Usually used for navigation. */
  onItemPress: (item: UserWallet) => void;
};

export const WalletsListWidget = ({ onItemPress }: WidgetProps) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [searchValue, setSearchValue] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [hideSmallAmountsValue, setHideSmallAmountsValue] = useStringValue(
    STORAGE_KEYS.HIDE_SPOT_SMALL_AMOUNTS,
    getDefaultStorage(),
  );
  const hideSmallAmounts = hideSmallAmountsValue === 'true';
  const { data: wallets, refetch } = useWallets({ hideSmallAmounts });
  const { refetch: refetchMarginBalances } = useMarginBalances();
  const { data: accounts } = useUserAccounts();

  const filteredCollateralFunds = useMemo(() => {
    return (
      wallets?.filter(
        p =>
          p.ProductFullName.toLowerCase().includes(searchValue.toLowerCase()) ||
          p.ProductSymbol.toLowerCase().includes(searchValue.toLowerCase()),
      ) || []
    );
  }, [wallets, searchValue]);

  const sections = useMemo(() => {
    return [
      {
        title: translate('wallet.assets'),
        data: filteredCollateralFunds,
      },
    ];
  }, [filteredCollateralFunds]);

  const renderItem = useCallback(
    ({ item }: { item: UserWallet }) => (
      <SpotWalletItem onPress={() => onItemPress(item)} item={item} />
    ),
    [onItemPress],
  );

  const toggleHideSmallAmounts = (checked: boolean) => {
    setHideSmallAmountsValue(checked.toString());
  };

  const handleSearchPress = () => {
    setIsSearchExpanded(true);
  };

  const handleSearchClose = () => {
    setIsSearchExpanded(false);
    setSearchValue('');
  };
  const handleTransferPress = useCallback(() => {
    // Select the product with the lowest ProductId
    const productWithLowestId = wallets?.reduce(
      (lowest, current) =>
        !lowest || current.ProductId < lowest.ProductId ? current : lowest,
      undefined as UserWallet | undefined,
    )?.ProductId;

    navigation.navigate('Transfer', {
      productId: productWithLowestId,
      onSuccess: () => {
        refetch();
        refetchMarginBalances();
      },
    });
  }, [navigation, refetch, refetchMarginBalances, wallets]);

  const hideTransferButton = useMemo(() => {
    // Hide transfer button if user only has a single spot account.
    // Meaning, they don't have any other accounts to transfer to.
    return Boolean(accounts?.length && accounts?.length <= 1);
  }, [accounts]);

  return (
    <>
      <WalletsSectionList
        renderItem={renderItem}
        sections={sections}
        keyExtractor={item => `${item?.ProductId ?? Math.random()}`}
        headerComponent={
          <ActionBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            isSearchExpanded={isSearchExpanded}
            onSearchPress={handleSearchPress}
            onSearchClose={handleSearchClose}
            hideSmallAmounts={hideSmallAmounts}
            onToggleHideSmallAmounts={toggleHideSmallAmounts}
            onTransferPress={handleTransferPress}
            hideTransferButton={hideTransferButton}
          />
        }
      />
    </>
  );
};
