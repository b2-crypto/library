import React from 'react';
import { useTheme } from '@shopify/restyle';
import { Receive } from '../../../../assets/icons';
import { TransactionFormHeader } from '../atoms';
export const ReceiveFormHeader = ({ children, onClose }) => {
    const { colors } = useTheme();
    return (<TransactionFormHeader iconBoxProps={{
            borderWidth: 1,
            borderColor: 'button2ndBorder',
            backgroundColor: 'button2ndBackground',
        }} icon={<Receive color={colors.textSecondary}/>} onClose={onClose}>
      {children}
    </TransactionFormHeader>);
};
