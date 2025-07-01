import React from 'react';
import { FieldPath, FieldValues } from 'react-hook-form';

import { CurrencyPill } from '../atoms';
import { formatInputCurrency } from '../../helpers';

import { FormInput, FormInputProps } from './FormInput';

export const FormAmountInput = <
  T extends FieldValues,
  TName extends FieldPath<T> = FieldPath<T>,
>({
  symbol,
  decimalPlaces,
  ...props
}: Omit<FormInputProps<T, TName>, 'valueFormatting'> & {
  symbol?: string;
  decimalPlaces?: number;
}) => {
  return (
    <FormInput
      size="big"
      inputMode="decimal"
      prefix={symbol ? <CurrencyPill symbol={symbol} /> : undefined}
      {...props}
      valueFormatting={value => formatInputCurrency(value, decimalPlaces)}
    />
  );
};
