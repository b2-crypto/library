import React from 'react';
import { useController, } from 'react-hook-form';
import { FormItem, SliderInput } from '../atoms';
import { translate } from '../../helpers/i18n';
export const FormSlider = ({ name, control, rules, defaultValue, ...props }) => {
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
      <SliderInput {...props} value={field.value} onChange={field.onChange}/>
    </FormItem>);
};
