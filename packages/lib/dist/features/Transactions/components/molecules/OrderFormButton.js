import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { testID } from '../../../../helpers/testId';
export const OrderFormButton = ({ onPress }) => {
    const { watch, formState } = useFormContext();
    const op = watch('op');
    return (<Button onPress={onPress} disabled={!formState.isValid} variant={op} label={translate(op)} {...testID('submit')}/>);
};
