import { DraggableCard } from '@apex-rn/library/components';
import { ConvertForm } from '@apex-rn/library/features/Transactions';
import React from 'react';

import { RootStackScreenProps } from '../routes/types';

export const ConvertScreen = ({
  navigation,
}: RootStackScreenProps<'ConvertScreen'>) => {
  return (
    <DraggableCard onClose={navigation.goBack}>
      <ConvertForm onClose={navigation.goBack} />
    </DraggableCard>
  );
};
