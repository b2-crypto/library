import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';

import { Box, Text } from '../../../components/atoms';
import { Button } from '../../../components/molecules';
import { translate } from '../../../helpers/i18n';
import { CryptoWithCheckbox } from '../atoms';
import { selectWalletList, setWalletList } from '../../../stores/wallet';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { UserWallet, useWallets } from '../../../hooks';
import { CardModal } from '../../../components/organisms';
import { useModalControl } from '../../../hooks';
import { IWalletList } from '../../../types/commonTypes';

export const VisibleWalletsModalWidget = () => {
  const { data } = useWallets({});

  const walletList = useAppSelector(selectWalletList);
  const dispatch = useDispatch();

  useEffect(() => {
    !Object.keys(walletList).length &&
      dispatch(
        setWalletList({
          walletList: data?.reduce(
            (acc, cur) => {
              acc[cur.ProductId] = true;
              return acc;
            },
            {} as Record<number, boolean>,
          ),
        }),
      );
  }, [data, walletList, dispatch]);

  return <VisibleWalletsModal data={data} walletList={walletList} />;
};

type Props = {
  /** List of available wallets */
  data: UserWallet[];
  /** Map of the enabled wallets */
  walletList: IWalletList;
  /** Optional renderer for the item. By default `CryptoWithCheckbox` will be used */
  renderItem?: ({ item }: { item: UserWallet }) => void;
};

export const VisibleWalletsModal = ({
  data,
  walletList,
  renderItem,
}: Props) => {
  const { modalVisible, showModal, hideModal } = useModalControl();
  return (
    <>
      <Button
        variant="transparent"
        label={
          <Text variant="bodyBold" color="brandSolid">
            {translate('edit')}
          </Text>
        }
        onPress={showModal}
        padding="s"
        alignItems="flex-start"
      />
      <CardModal
        marginHorizontal="m"
        top={96}
        maxHeight={'80%'}
        isVisible={modalVisible}
        onClose={hideModal}
        heading={translate('wallet.modifyWalletList')}>
        <FlatList
          data={data.filter(el => el.ProductId !== el.NotionalProductId)}
          renderItem={({ item }) =>
            renderItem?.({ item }) || (
              <CryptoWithCheckbox cryptoShown={walletList} item={item} />
            )
          }
          ItemSeparatorComponent={() => (
            <Box
              height={1}
              borderBottomWidth={1}
              borderColor="button2ndBorder"
            />
          )}
          keyExtractor={item => item.ProductId.toString()}
        />
      </CardModal>
    </>
  );
};
