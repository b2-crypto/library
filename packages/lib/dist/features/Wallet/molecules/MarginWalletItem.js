import React from 'react';
import { formatCurrency, formatNumber } from '../../../helpers/format';
import { translate } from '../../../helpers/i18n';
import { WalletItem } from '../atoms';
export const MarginWalletItem = ({ item, onPress, }) => {
    return (<WalletItem onPress={onPress} subTitleColor="brandSolid" symbol={item.ProductSymbol} name={`${item.ProductSymbol} ${item.ProductFullName}`} subTitle={translate('marginTrading.balances.viewMoreLabel')} amount={item.AvailableAmount
            ? formatNumber(item.AvailableAmount, item.DecimalPlaces)
            : undefined} secondaryAmount={item.AvailableNotional
            ? formatCurrency(item.AvailableNotional, item.NotionalProductSymbol, item.DecimalPlaces)
            : undefined}/>);
};
