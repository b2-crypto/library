import React from 'react';
import { useController, } from 'react-hook-form';
import { translate } from '../../helpers/i18n';
import { testID } from '../../helpers/testId';
import { FormItem, Input } from '../atoms';
export function FormInput({ name, control, label, error: providedError, rules, valueFormatting, onChange, suffix, defaultValue, ...inputProps }) {
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
    const handleChangeText = (text) => {
        field.onChange(text);
        onChange?.(text);
    };
    const displayValue = valueFormatting
        ? valueFormatting(field.value ?? '')
        : field.value ?? '';
    return (<FormItem label={label} error={error} flex={1}>
      <Input ref={field.ref} value={displayValue} hasError={!!error} onChangeText={handleChangeText} suffix={typeof suffix === 'function' ? suffix(field) : suffix} {...testID(name)} {...inputProps}/>
    </FormItem>);
}
