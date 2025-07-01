import React from 'react';
import { useTheme } from '@shopify/restyle';

import { Theme } from '../../../../theme';
import { Receive } from '../../../../assets/icons';
import { TransactionFormHeader } from '../atoms';

type Props = {
  children: React.ReactNode;
  /** Close form (modal) callback */
  onClose: () => void;
};

export const ReceiveFormHeader = ({ children, onClose }: Props) => {
  const { colors } = useTheme<Theme>();
  return (
    <TransactionFormHeader
      iconBoxProps={{
        borderWidth: 1,
        borderColor: 'button2ndBorder',
        backgroundColor: 'button2ndBackground',
      }}
      icon={<Receive color={colors.textSecondary} />}
      onClose={onClose}>
      {children}
    </TransactionFormHeader>
  );
};
