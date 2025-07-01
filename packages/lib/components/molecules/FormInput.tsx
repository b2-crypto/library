import React from 'react';
import {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { translate } from '../../helpers/i18n';
import { testID } from '../../helpers/testId';
import { FormItem, Input, InputProps } from '../atoms';

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

export function FormInput<
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
}: FormInputProps<T, TName>) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const error = fieldState.error?.message
    ? translate(fieldState.error.message, {
        defaultValue: fieldState.error.message,
      })
    : providedError;

  const handleChangeText = (text: string) => {
    field.onChange(text);
    onChange?.(text);
  };

  const displayValue = valueFormatting
    ? valueFormatting(field.value ?? '')
    : field.value ?? '';

  return (
    <FormItem label={label} error={error} flex={1}>
      <Input
        ref={field.ref}
        value={displayValue}
        hasError={!!error}
        onChangeText={handleChangeText}
        suffix={typeof suffix === 'function' ? suffix(field) : suffix}
        {...testID(name)}
        {...inputProps}
      />
    </FormItem>
  );
}
