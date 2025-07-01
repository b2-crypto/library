import React from 'react';
import { useTheme } from '@shopify/restyle';

import { Theme } from '../../../../theme';
import { Deposit, Withdraw } from '../../../../assets/icons';
import { TransactionFormHeader } from '../atoms';

type Props = {
  children: React.ReactNode;
  /** Close form (modal) callback */
  onClose: () => void;
  typeTransaction: 'withdraw' | 'deposit';
};

export const DepositFormHeader = ({
  children,
  onClose,
  typeTransaction = 'deposit',
}: Props) => {
  const { colors } = useTheme<Theme>();
  return (
    <TransactionFormHeader
      iconBoxProps={{
        borderWidth: 1,
        borderColor: 'button2ndBorder',
        backgroundColor: 'button2ndBackground',
      }}
      icon={
        typeTransaction === 'deposit' ? (
          <Deposit color={colors.textSecondary} />
        ) : (
          <Withdraw color={colors.textSecondary} />
        )
      }
      onClose={onClose}>
      {children}
    </TransactionFormHeader>
  );
};
