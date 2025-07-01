import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { translate } from '../../../../helpers/i18n';
import { formatNumber } from '../../../../helpers/format';
import { SendFormValues } from '../../types';

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

export const TransferSummaryWidget = ({ asset, balance }: Props) => {
  const { watch } = useFormContext<SendFormValues>();
  const [amountRaw] = watch(['amount']);
  const amount = amountRaw ? parseFloat(amountRaw) : undefined;

  const items = useMemo(
    () => [
      {
        name: translate('transaction.summary.balance', {
          symbol: asset.Product,
        }),
        value: format(balance, asset),
      },
      { name: translate('transaction.summary.fee'), value: undefined },
      {
        name: translate('transaction.summary.amountSend'),
        value: amount ? format(amount, asset) : undefined,
      },
      {
        name: translate('transaction.summary.remainingBalance'),
        value: amount ? format(balance - amount, asset) : undefined,
      },
    ],
    [balance, asset, amount],
  );

  return <OrderSummary items={items} />;
};
