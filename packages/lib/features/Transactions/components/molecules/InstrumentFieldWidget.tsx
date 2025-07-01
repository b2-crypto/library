import React from 'react';

import { useGetInstrumentsQuery } from '../../../../services/apexApi';
import { InstrumentField } from './InstrumentField';

export const InstrumentFieldWidget = () => {
  const { data, isLoading } = useGetInstrumentsQuery(undefined);

  return <InstrumentField instruments={data || []} isLoading={isLoading} />;
};
