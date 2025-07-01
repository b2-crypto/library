import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { translate } from '../../../../helpers/i18n';
import { useOrderSummary } from '../../hooks';
import { ConvertFormValues } from '../../types';
import { OrderSummary } from '../molecules';
import { useConvertOrderValues } from '../../hooks';

export const ConvertSummaryWidget = () => {
  const { watch } = useFormContext<ConvertFormValues>();
  const values = watch();
  const orderValues = useConvertOrderValues(values);
  const summary = useOrderSummary(orderValues);

  const items = useMemo(
    () => [
      { name: translate('transaction.summary.market'), value: summary.market },
      { name: translate('transaction.summary.fee'), value: summary.fee },
      {
        name: translate('transaction.summary.total'),
        value: summary.totalPrice,
      },
      { name: translate('transaction.summary.net'), value: summary.net },
    ],
    [summary],
  );

  return <OrderSummary items={items} />;
};
