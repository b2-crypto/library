import { useMemo } from 'react';

import {
  useGetInstrumentsQuery,
  useGetLevel1SummaryQuery,
} from '../services/apexApi';
import { IInstrument, ILevel1 } from '../types/apiResponses';

export type InstrumentLevel1 = IInstrument &
  ILevel1 & { ProductFullName?: string };

export const useGetInstrumentWithLevel1 = (skipQuery = false) => {
  const { data: instruments, isLoading: isLoadingInstruments } =
    useGetInstrumentsQuery(undefined, { skip: skipQuery });

  const { data: level1, isLoading: isLoadingLevel1 } = useGetLevel1SummaryQuery(
    undefined,
    { skip: skipQuery },
  );

  const data: Array<InstrumentLevel1> = useMemo(() => {
    if (!instruments?.length || !level1?.length) {
      return [];
    }
    return instruments.map(instrument => ({
      ...instrument,
      ...level1.find(el => el.InstrumentId === instrument.InstrumentId)!,
    }));
  }, [instruments, level1]);

  return {
    data,
    isLoading: isLoadingInstruments || isLoadingLevel1,
  };
};
