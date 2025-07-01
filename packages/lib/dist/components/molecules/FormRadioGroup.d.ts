import React from 'react';
import { UseControllerProps, FieldValues, FieldPath } from 'react-hook-form';
import { RadioGroup } from '../atoms';
type Props<
  TValues extends FieldValues = FieldValues,
  TName extends FieldPath<TValues> = FieldPath<TValues>,
> = UseControllerProps<TValues, TName> &
  Omit<
    React.ComponentProps<typeof RadioGroup>,
    'active' | 'onChange' | 'hasError'
  >;
export declare const FormRadioGroup: <
  TValues extends FieldValues = FieldValues,
  TName extends FieldPath<TValues> = FieldPath<TValues>,
>({
  name,
  control,
  rules,
  defaultValue,
  ...props
}: Props<TValues, TName>) => React.JSX.Element;
export {};
