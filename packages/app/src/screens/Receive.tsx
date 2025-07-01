import { DraggableCard } from '@apex-rn/library/components';
import { ReceiveForm } from '@apex-rn/library/features/Transactions';
import React from 'react';

import { RootStackScreenProps } from '../routes/types';

export const ReceiveScreen = ({
  navigation,
  route: {
    params: { id },
  },
}: RootStackScreenProps<'ReceiveScreen'>) => {
  return (
    <DraggableCard onClose={navigation.goBack}>
      <ReceiveForm productId={id} onClose={navigation.goBack} />
    </DraggableCard>
  );
};
