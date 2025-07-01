import React from 'react';
import { UseControllerProps, FieldValues, FieldPath } from 'react-hook-form';
import { SliderInput } from '../atoms';
type Props<
  TValues extends FieldValues = FieldValues,
  TName extends FieldPath<TValues> = FieldPath<TValues>,
> = UseControllerProps<TValues, TName> &
  React.ComponentProps<typeof SliderInput>;
export declare const FormSlider: <
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
