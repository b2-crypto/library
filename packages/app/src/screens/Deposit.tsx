import { DraggableCard } from '@apex-rn/library/components';
import { DepositOrWithdrawForm } from '@apex-rn/library/features/Transactions';
import React from 'react';

import { RootStackScreenProps } from '../routes/types';

export const DepositScreen = ({
  navigation,
  route: {
    params: { id },
  },
}: RootStackScreenProps<'DepositScreen'>) => {
  return (
    <DraggableCard onClose={navigation.goBack}>
      <DepositOrWithdrawForm
        typeTransaction="deposit"
        productId={id}
        onClose={navigation.goBack}
      />
    </DraggableCard>
  );
};
