import React from 'react';
import { Checkbox, Text, View } from '../../../components/atoms';
import { ProductIcon } from '../../../components/molecules';
import { useDispatch } from 'react-redux';
import { setWalletList } from '../../../stores/wallet';
export const CryptoWithCheckbox = ({ item, cryptoShown }) => {
    const dispatch = useDispatch();
    const handleOnChange = (val) => {
        dispatch(setWalletList({
            walletList: { ...cryptoShown, [item.ProductId]: val },
        }));
    };
    return (<WalletsEditCheckbox item={item} cryptoShown={cryptoShown} handleOnChange={handleOnChange}/>);
};
export const WalletsEditCheckbox = ({ item, cryptoShown, handleOnChange, }) => (<View alignItems="center" paddingVertical="s" paddingHorizontal="sm" justifyContent="space-between" flexDirection="row">
    <View alignItems="center" flexDirection="row">
      <ProductIcon size={24} symbol={item.ProductSymbol}/>
      <Text marginHorizontal="s">{item.ProductSymbol}</Text>
      <Text>{item.ProductFullName}</Text>
    </View>
    <Checkbox checked={cryptoShown[item.ProductId]} onChange={handleOnChange}/>
  </View>);
