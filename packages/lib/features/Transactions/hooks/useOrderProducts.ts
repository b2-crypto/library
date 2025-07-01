import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useFormContext } from 'react-hook-form';

import { increment2digits } from '../../../helpers/format';
import {
  useGetAccountPositionsQuery,
  useGetInstrumentsQuery,
} from '../../../services/apexApi';
import { OrderFormValues } from '../types';

export function useOrderProducts() {
  const { watch } = useFormContext<OrderFormValues>();
  const [instrumentId, accountId] = watch(['instrumentId', 'accountId']);

  const { instrument } = useGetInstrumentsQuery(undefined, {
    selectFromResult({ data }) {
      return { instrument: data?.find(i => i.InstrumentId === instrumentId) };
    },
  });

  return useGetAccountPositionsQuery(accountId ? { accountId } : skipToken, {
    selectFromResult({ data }) {
      const pos1 = data?.find(p => p.ProductId === instrument?.Product1);
      const p1 = pos1
        ? {
            id: pos1.ProductId,
            symbol: pos1.ProductSymbol,
            amount: pos1.Amount - pos1.Hold,
            decimalPlaces: increment2digits(instrument?.QuantityIncrement || 2),
          }
        : undefined;

      const pos2 = data?.find(p => p.ProductId === instrument?.Product2);
      const p2 = pos2
        ? {
            id: pos2.ProductId,
            symbol: pos2.ProductSymbol,
            amount: pos2.Amount - pos2.Hold,
            decimalPlaces: increment2digits(instrument?.PriceIncrement || 2),
          }
        : undefined;

      return { product1: p1, product2: p2 };
    },
  });
}
