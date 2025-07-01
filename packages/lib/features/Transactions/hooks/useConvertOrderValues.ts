import { useMemo } from 'react';
import { InstrumentLevel1, useGetInstrumentWithLevel1 } from '../../../hooks';
import { ConvertFormValues } from '../types';

export function transformConvertValues(
  values: ConvertFormValues,
  instruments: InstrumentLevel1[],
) {
  const instrument = instruments.find(
    i =>
      (i.Product1 === values.from?.productId &&
        i.Product2 === values.to?.productId) ||
      (i.Product1 === values.to?.productId &&
        i.Product2 === values.from?.productId),
  );

  const op = instrument
    ? instrument.Product1 === values.from?.productId
      ? ('sell' as const)
      : ('buy' as const)
    : undefined;

  return {
    accountId: values.accountId,
    instrumentId: instrument?.InstrumentId,
    op,
    type: 'Market' as const,
    quantity: op === 'sell' ? values.from?.amount : values.to?.amount,
    value: op === 'sell' ? values.to?.amount : values.from?.amount,
    anchored:
      values.anchored &&
      instrument?.Product2 &&
      instrument.Product2 === values[values.anchored].productId
        ? ('value' as const)
        : ('quantity' as const),
  };
}

export function useConvertOrderValues(values: ConvertFormValues) {
  const { data: instruments } = useGetInstrumentWithLevel1();

  return useMemo(
    () => transformConvertValues(values, instruments),
    [values, instruments],
  );
}
