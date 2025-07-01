import React from 'react';
import {
  UseControllerProps,
  useController,
  FieldValues,
  FieldPath,
} from 'react-hook-form';
import { RadioGroup, FormItem } from '../atoms';
import { translate } from '../../helpers/i18n';

type Props<
  TValues extends FieldValues = FieldValues,
  TName extends FieldPath<TValues> = FieldPath<TValues>,
> = UseControllerProps<TValues, TName> &
  Omit<
    React.ComponentProps<typeof RadioGroup>,
    'active' | 'onChange' | 'hasError'
  >;

export const FormRadioGroup = <
  TValues extends FieldValues = FieldValues,
  TName extends FieldPath<TValues> = FieldPath<TValues>,
>({
  name,
  control,
  rules,
  defaultValue,
  ...props
}: Props<TValues, TName>) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <FormItem
      error={
        fieldState.error?.message
          ? translate(fieldState.error.message, {
              defaultValue: fieldState.error.message,
            })
          : undefined
      }>
      <RadioGroup
        {...props}
        value={field.value}
        onChange={field.onChange}
      />
    </FormItem>
  );
};
