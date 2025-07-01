import { DraggableCard } from '@apex-rn/library/components';
import { TransferForm } from '@apex-rn/library/features/Transactions';
import React from 'react';

import { RootStackScreenProps } from '../routes/types';

export const TransferScreen = ({
  navigation,
  route: {
    params: { productId, onSuccess },
  },
}: RootStackScreenProps<'Transfer'>) => {
  return (
    <DraggableCard onClose={navigation.goBack}>
      <TransferForm
        productId={productId}
        onClose={navigation.goBack}
        onSuccess={onSuccess}
      />
    </DraggableCard>
  );
};
