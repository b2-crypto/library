import { useCallback } from 'react';
import { ConvertFormValues, OrderFormValues } from '../types';
import { transformConvertValues } from './useConvertOrderValues';
import { useSendOrder } from './useSendOrder';
import { useGetInstrumentWithLevel1 } from '../../../hooks';

export function useConvertSubmit() {
  const { data: instruments } = useGetInstrumentWithLevel1();

  const [sendOrder, queryState] = useSendOrder();

  const submit = useCallback(
    async (values: ConvertFormValues) => {
      const orderValues = transformConvertValues(values, instruments);
      return await sendOrder(orderValues as OrderFormValues);
    },
    [instruments, sendOrder],
  );

  return [submit, queryState] as const;
}
