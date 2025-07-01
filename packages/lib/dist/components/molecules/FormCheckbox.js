import React from 'react';
import { useController, } from 'react-hook-form';
import { Checkbox, FormItem } from '../atoms';
import { translate } from '../../helpers/i18n';
export const FormCheckbox = ({ name, control, rules, defaultValue, ...props }) => {
    const { field, fieldState } = useController({
        name,
        control,
        rules,
        defaultValue,
    });
    return (<FormItem error={fieldState.error?.message
            ? translate(fieldState.error.message, {
                defaultValue: fieldState.error.message,
            })
            : undefined}>
      <Checkbox {...props} hasError={!!fieldState.error?.message} checked={field.value} onChange={field.onChange}/>
    </FormItem>);
};
