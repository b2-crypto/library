import React from 'react';
import { DraggableCard } from '@apex-rn/library/components';
import { OrderForm } from '@apex-rn/library/features/Transactions';

import { RootStackScreenProps } from '../routes/types';

export const BuySell = ({
  route,
  navigation,
}: RootStackScreenProps<'CreateOrder'>) => {
  return (
    <DraggableCard onClose={navigation.goBack}>
      <OrderForm
        onClose={navigation.goBack}
        initialValues={{
          op: route.params.isBuy ? 'buy' : 'sell',
          instrumentId: route.params.id,
          quantity: '',
        }}
      />
    </DraggableCard>
  );
};
