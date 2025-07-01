import React from 'react';
import { FieldPath, FieldValues } from 'react-hook-form';
import { FormInputProps } from './FormInput';
export declare const FormAmountInput: <
  T extends FieldValues,
  TName extends FieldPath<T> = FieldPath<T>,
>({
  symbol,
  decimalPlaces,
  ...props
}: Omit<FormInputProps<T, TName>, 'valueFormatting'> & {
  symbol?: string | undefined;
  decimalPlaces?: number | undefined;
}) => React.JSX.Element;
