import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { translate } from '../../../../helpers/i18n';
import { formatNumber } from '../../../../helpers/format';
import { useWithdrawFee } from '../../hooks';
import { OrderSummary } from '../molecules';
const format = (value, asset) => ({
    amount: formatNumber(value, asset.DecimalPlaces),
    symbol: asset.Product,
});
export const WithdrawSummaryWidget = ({ asset, balance }) => {
    const { watch } = useFormContext();
    const [productId, amountRaw] = watch(['productId', 'amount']);
    const amount = amountRaw ? parseFloat(amountRaw) : undefined;
    const { data: feeInfo } = useWithdrawFee(productId, amount);
    const items = useMemo(() => [
        {
            name: translate('transaction.summary.balance', {
                symbol: asset.Product,
            }),
            value: format(balance, asset),
        },
        {
            name: translate('transaction.summary.fee'),
            value: feeInfo ? format(feeInfo.FeeAmount, asset) : undefined,
        },
        {
            name: translate('transaction.summary.amountSend'),
            value: feeInfo ? format(feeInfo.TicketAmount, asset) : undefined,
        },
        {
            name: translate('transaction.summary.remainingBalance'),
            value: feeInfo
                ? format(balance - (feeInfo.FeeAmount + feeInfo.TicketAmount), asset)
                : undefined,
        },
    ], [balance, asset, feeInfo]);
    return <OrderSummary items={items}/>;
};
