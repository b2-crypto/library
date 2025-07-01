import React from 'react';
import {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { InputProps } from '../atoms';
export type FormInputProps<
  TValues extends FieldValues,
  TName extends FieldPath<TValues> = FieldPath<TValues>,
> = {
  name: TName;
  label?: string;
  error?: string;
  valueFormatting?: (value: string) => string;
  suffix?:
    | React.ReactNode
    | ((field: ControllerRenderProps<TValues, TName>) => React.ReactNode);
  onChange?: (value: string) => void;
} & Omit<InputProps, 'suffix' | 'onChange'> &
  UseControllerProps<TValues, TName>;
export declare function FormInput<
  T extends FieldValues,
  TName extends FieldPath<T> = FieldPath<T>,
>({
  name,
  control,
  label,
  error: providedError,
  rules,
  valueFormatting,
  onChange,
  suffix,
  defaultValue,
  ...inputProps
}: FormInputProps<T, TName>): React.JSX.Element;
