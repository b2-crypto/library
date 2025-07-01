import React from 'react';
import { useTheme } from '@shopify/restyle';

import { Theme } from '../../../../theme';
import { Send } from '../../../../assets/icons';
import { TransactionFormHeader } from '../atoms';

type Props = {
  children: React.ReactNode;
  /** Close form (modal) callback */
  onClose: () => void;
};

export const SendFormHeader = ({ children, onClose }: Props) => {
  const { colors } = useTheme<Theme>();
  return (
    <TransactionFormHeader
      iconBoxProps={{
        borderWidth: 1,
        borderColor: 'button2ndBorder',
        backgroundColor: 'button2ndBackground',
      }}
      icon={<Send color={colors.textSecondary} />}
      onClose={onClose}>
      {children}
    </TransactionFormHeader>
  );
};
