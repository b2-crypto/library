import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { translate } from '../../../../helpers/i18n';
import { formatNumber } from '../../../../helpers/format';
import { SendFormValues } from '../../types';
import { useWithdrawFee } from '../../hooks';

import { OrderSummary } from '../molecules';

type Asset = { Product: string; DecimalPlaces: number };

type Props = {
  /** Selected asset (product) */
  asset: Asset;
  /** User's balance of the selected product */
  balance: number;
};

const format = (value: number, asset: Asset) => ({
  amount: formatNumber(value, asset.DecimalPlaces),
  symbol: asset.Product,
});

export const WithdrawSummaryWidget = ({ asset, balance }: Props) => {
  const { watch } = useFormContext<SendFormValues>();
  const [productId, amountRaw] = watch(['productId', 'amount']);
  const amount = amountRaw ? parseFloat(amountRaw) : undefined;
  const { data: feeInfo } = useWithdrawFee(productId, amount);

  const items = useMemo(
    () => [
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
    ],
    [balance, asset, feeInfo],
  );

  return <OrderSummary items={items} />;
};
