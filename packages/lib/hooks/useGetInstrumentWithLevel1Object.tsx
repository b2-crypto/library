import { useMemo } from 'react';

import {
  useGetInstrumentsQuery,
  useGetLevel1SummaryQuery,
  useGetProductsQuery,
} from '../services/apexApi';
import { InstrumentLevel1 } from '../hooks';

export const useGetInstrumentWithLevel1Object = () => {
  const { data: instruments, isLoading: isLoadingInstruments } =
    useGetInstrumentsQuery();
  const { data: level1, isLoading: isLoadingLevel1 } =
    useGetLevel1SummaryQuery();
  const { data: products, isLoading: isLoadingProducts } =
    useGetProductsQuery();

  const data = useMemo(() => {
    const newData: Record<number, InstrumentLevel1> = {};
    if (instruments?.length && level1?.length && products?.length) {
      instruments.forEach(instrument => {
        newData[instrument.InstrumentId] = {
          ...instrument,
          ...level1.find(el => el.InstrumentId === instrument.InstrumentId)!,
          ProductFullName:
            products.find(el => el.ProductId === instrument.Product1)
              ?.ProductFullName || instrument.Symbol,
        };
      });
    }
    return newData;
  }, [instruments, products, level1]);

  return {
    data,
    isLoading: isLoadingInstruments || isLoadingLevel1 || isLoadingProducts,
  };
};
