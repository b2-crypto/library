import React from 'react';
import { useTheme } from '@shopify/restyle';
import { Deposit, Withdraw } from '../../../../assets/icons';
import { TransactionFormHeader } from '../atoms';
export const DepositFormHeader = ({ children, onClose, typeTransaction = 'deposit', }) => {
    const { colors } = useTheme();
    return (<TransactionFormHeader iconBoxProps={{
            borderWidth: 1,
            borderColor: 'button2ndBorder',
            backgroundColor: 'button2ndBackground',
        }} icon={typeTransaction === 'deposit' ? (<Deposit color={colors.textSecondary}/>) : (<Withdraw color={colors.textSecondary}/>)} onClose={onClose}>
      {children}
    </TransactionFormHeader>);
};
