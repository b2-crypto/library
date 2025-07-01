import React from 'react';
import { CurrencyPill } from '../atoms';
import { formatInputCurrency } from '../../helpers';
import { FormInput } from './FormInput';
export const FormAmountInput = ({ symbol, decimalPlaces, ...props }) => {
    return (<FormInput size="big" inputMode="decimal" prefix={symbol ? <CurrencyPill symbol={symbol}/> : undefined} {...props} valueFormatting={value => formatInputCurrency(value, decimalPlaces)}/>);
};
