import * as React from 'react';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator } from 'react-native';
import { useWallets } from '../../../hooks';
import { ProductIcon, WalletBalanceCard, } from '../../../components/molecules';
export function useWalletBalances() {
    const { data: walletData, ...rest } = useWallets({});
    const data = React.useMemo(() => walletData.map(item => ({
        id: item.ProductId,
        symbol: item.ProductSymbol,
        name: item.ProductFullName,
        amount: item.Amount || 0,
        price: item.NotionalValue,
        priceSymbol: item.NotionalProductSymbol,
        decimals: item.DecimalPlaces,
    })), [walletData]);
    return { data, ...rest };
}
export const WalletsScrollList = ({ data, onItemPress, }) => {
    const renderItem = React.useCallback(({ item }) => {
        return (<WalletBalanceCard icon={<ProductIcon symbol={item.symbol}/>} item={item} onPress={onItemPress && item.symbol !== 'USD'
                ? () => onItemPress(item)
                : undefined}/>);
    }, [onItemPress]);
    return (<FlashList data={data} keyExtractor={item => item.id.toString()} renderItem={renderItem} horizontal estimatedItemSize={196}/>);
};
export const Wallets = ({ onItemPress }) => {
    const { data } = useWalletBalances();
    if (!data || data.length === 0) {
        return <ActivityIndicator size="large"/>;
    }
    return <WalletsScrollList data={data} onItemPress={onItemPress}/>;
};
