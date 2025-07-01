import { DraggableCard } from '@apex-rn/library/components';
import { DepositOrWithdrawForm } from '@apex-rn/library/features/Transactions';
import React from 'react';

import { RootStackScreenProps } from '../routes/types';

export const WithdrawScreen = ({
  navigation,
  route: {
    params: { id },
  },
}: RootStackScreenProps<'WithdrawScreen'>) => {
  return (
    <DraggableCard onClose={navigation.goBack}>
      <DepositOrWithdrawForm
        typeTransaction="withdraw"
        productId={id}
        onClose={navigation.goBack}
      />
    </DraggableCard>
  );
};
