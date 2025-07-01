import React from 'react';
import { useFormContext } from 'react-hook-form';

import { DepositFormValues } from '../../types';
import { translate } from '../../../../helpers/i18n';
import { AMOUNT_INPUT_LIMIT } from '../../../../helpers/constants';
import { FormAmountInput, FormInput } from '../../../../components/molecules';
import { Box } from '../../../../components/atoms';

type Props = {
  /** Selected asset (product) object */
  asset: { Product: string; DecimalPlaces: number };
};

export const DepositRequestFormBody = ({ asset }: Props) => {
  const { control } = useFormContext<DepositFormValues & { type: 'send' }>();

  return (
    <Box gap="s">
      <FormInput
        control={control}
        name="emailAddress"
        label={translate('transaction.deposit.emailAddress')}
      />
      <FormAmountInput
        control={control}
        symbol={asset.Product}
        decimalPlaces={asset.DecimalPlaces}
        name="amount"
        label={translate('transaction.deposit.amount')}
        maxLength={AMOUNT_INPUT_LIMIT}
      />
      <FormInput
        control={control}
        name="note"
        label={translate('transaction.deposit.note')}
      />
    </Box>
  );
};
