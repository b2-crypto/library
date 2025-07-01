import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Buy, Sell } from '../../../../assets/icons';
import { TransactionFormHeader } from '../atoms';
export const OrderFormHeader = ({ children, onClose }) => {
    const { watch } = useFormContext();
    const op = watch('op');
    return (<TransactionFormHeader iconBoxProps={{
            elevation: 2,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 6,
            shadowOpacity: 0.2,
            shadowColor: op,
            backgroundColor: op,
        }} icon={op === 'buy' ? <Buy color="white"/> : <Sell color="white"/>} onClose={onClose}>
      {children}
    </TransactionFormHeader>);
};
