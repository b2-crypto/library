import { DraggableCard } from '@apex-rn/library/components';
import { SendForm } from '@apex-rn/library/features/Transactions';
import React from 'react';

import { RootStackScreenProps } from '../routes/types';

export const SendScreen = ({
  navigation,
  route: {
    params: { id },
  },
}: RootStackScreenProps<'SendScreen'>) => {
  return (
    <DraggableCard onClose={navigation.goBack}>
      <SendForm
        productId={id}
        onClose={navigation.goBack}
        onQrClick={field =>
          navigation.navigate('Scanner', {
            onGoBack: value => field.onChange(value),
          })
        }
      />
    </DraggableCard>
  );
};
