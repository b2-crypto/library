import React, { useMemo } from 'react';
import { View } from '../../../components/atoms';
import { TableCell } from '../../../components/molecules';
import { translate } from '../../../helpers/i18n';
import { formatNumber } from '../../../helpers/format';
export const WalletDetailsTable = ({ product }) => {
    const tableData = useMemo(() => [
        {
            title: translate('wallet.availableBalance'),
            value: product.Amount
                ? formatNumber(product.AvailableBalance, product.DecimalPlaces)
                : '—',
        },
        {
            title: translate('wallet.hold'),
            value: product.Hold
                ? formatNumber(product.Hold, product.DecimalPlaces)
                : '—',
        },
        {
            title: translate('wallet.pendingDeposits'),
            value: product.PendingDeposits
                ? formatNumber(product.PendingDeposits, product.DecimalPlaces)
                : '—',
        },
        {
            title: translate('wallet.totalBalance'),
            value: product.Amount
                ? formatNumber(product.Amount || 0, product.DecimalPlaces)
                : '—',
        },
    ], [product]);
    return (<>
      {tableData.map((item, index) => (<View key={index} borderBottomColor="border3" borderBottomWidth={index === tableData.length - 1 ? 0 : 1} flexDirection="row">
          <View key={item.title} flex={1}>
            <TableCell title={item.title} value={item.value} paddingRight="m" paddingLeft="m"/>
          </View>
        </View>))}
    </>);
};
