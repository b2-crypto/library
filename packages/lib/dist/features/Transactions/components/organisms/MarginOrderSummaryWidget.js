import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { translate } from '../../../../helpers/i18n';
import { useMarginOrderSummary, useOrderSummary } from '../../hooks';
import { OrderSummary } from '../molecules';
export const MarginOrderSummaryWidget = () => {
    const { watch } = useFormContext();
    const values = watch();
    const marginSummary = useMarginOrderSummary(values);
    const summary = useOrderSummary(values);
    const items = useMemo(() => [
        {
            name: values.op === 'buy'
                ? translate('transaction.summary.maxBuyAmount')
                : translate('transaction.summary.maxSellAmount'),
            value: marginSummary.maxAmount,
        },
        {
            name: translate('transaction.summary.borrowingAmount'),
            value: marginSummary.borrowingAmount,
        },
        {
            name: translate('transaction.summary.hourlyInterest'),
            value: marginSummary.hourlyInterest,
        },
        { type: 'separator' },
        { name: translate('transaction.summary.fee'), value: summary.fee },
        {
            name: translate('transaction.summary.netReceiving'),
            value: summary.net,
        },
        {
            name: translate('transaction.summary.total'),
            value: summary.totalPrice,
        },
    ], [summary, marginSummary, values.op]);
    return <OrderSummary items={items}/>;
};
