import React from 'react';
import { useFormContext } from 'react-hook-form';
import floor from 'lodash/floor';

import { translate } from '../../../../helpers/i18n';
import { AMOUNT_INPUT_LIMIT } from '../../../../helpers/constants';

import { MaxButton } from '../atoms';
import { Box } from '../../../../components/atoms';
import { FormAmountInput, FormInput } from '../../../../components/molecules';
import { testID } from '../../../../helpers/testId';

type Props = {
  /** Selected asset (product) */
  asset: {
    ProductId: number;
    Product: string;
    DecimalPlaces: number;
  };
  /** Balance for the product */
  balance?: number;
};

type FormValues = {
  amount: string;
  emailAddress: string;
  note?: string;
};

export const TransferCryptoFormBody = ({ asset, balance }: Props) => {
  const { control } = useFormContext<FormValues>();

  return (
    <>
      <FormInput
        control={control}
        name="emailAddress"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        inputMode="email"
        label={translate('transactions.emailAddress')}
      />
      <Box marginVertical="m">
        <FormAmountInput
          control={control}
          symbol={asset.Product}
          decimalPlaces={asset.DecimalPlaces}
          suffix={
            typeof balance !== 'undefined'
              ? field => (
                  <MaxButton
                    onPress={() =>
                      field.onChange(
                        floor(balance, asset.DecimalPlaces).toString(),
                      )
                    }
                  />
                )
              : undefined
          }
          name="amount"
          label={translate('transactions.amount')}
          maxLength={AMOUNT_INPUT_LIMIT}
          accessibilityLabel="Max button"
          {...testID('maxButton')}
        />
      </Box>
      <FormInput
        control={control}
        name="note"
        label={translate('transactions.note')}
      />
    </>
  );
};
