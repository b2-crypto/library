import { useMemo } from 'react';

import { useGetInstrumentWithLevel1 } from '../../../hooks';
import { useGetProductsQuery } from '../../../services/apexApi';
import { useGetAllMarginInstrumentConfigsQuery } from '../../../services/marginApi';

export function useMarginInstrumentsList() {
  const { data: instruments, isLoading: isLoadingInstruments } =
    useGetInstrumentWithLevel1();
  const { data: products, isLoading: isLoadingProducts } =
    useGetProductsQuery();
  const { data: marginConfig, isLoading: isLoadingMargin } =
    useGetAllMarginInstrumentConfigsQuery();

  const data = useMemo(() => {
    if (!instruments || !products || !marginConfig) {
      return [];
    }
    return instruments.map(instrument => {
      const marginInfo = marginConfig?.find(
        m => m.InstrumentId === instrument.InstrumentId,
      );

      return {
        ...instrument,
        Product1Name:
          products?.find(p => p.ProductId === instrument.Product1)
            ?.ProductFullName || instrument.Product1Symbol,
        Product2Name:
          products?.find(p => p.ProductId === instrument.Product2)
            ?.ProductFullName || instrument.Product2Symbol,
        MarginEnabled: marginInfo?.IsActive || false,
        MarginInitialRequirement: marginInfo?.InitialRequirement || 0,
      };
    });
  }, [instruments, products, marginConfig]);

  return {
    data,
    isLoading: isLoadingInstruments || isLoadingProducts || isLoadingMargin,
  };
}
