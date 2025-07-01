import React from 'react';
import { useFormContext } from 'react-hook-form';
import { translate } from '../../../../helpers/i18n';
import { AMOUNT_INPUT_LIMIT } from '../../../../helpers/constants';
import { FormAmountInput, FormInput } from '../../../../components/molecules';
import { Box } from '../../../../components/atoms';
export const DepositExternalFormBody = ({ asset }) => {
    const { control } = useFormContext();
    return (<Box gap="s">
      <FormAmountInput control={control} symbol={asset.Product} decimalPlaces={asset.DecimalPlaces} name="amount" label={translate('transaction.deposit.amount')} maxLength={AMOUNT_INPUT_LIMIT}/>
      <FormInput control={control} name="account" label={translate('transaction.deposit.account')}/>
      <FormAmountInput control={control} decimalPlaces={0} name="routingNumber" label={translate('transaction.deposit.routingNumber')} maxLength={AMOUNT_INPUT_LIMIT}/>
    </Box>);
};
