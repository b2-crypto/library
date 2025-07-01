import { useCallback } from 'react';
import { transformConvertValues } from './useConvertOrderValues';
import { useSendOrder } from './useSendOrder';
import { useGetInstrumentWithLevel1 } from '../../../hooks';
export function useConvertSubmit() {
    const { data: instruments } = useGetInstrumentWithLevel1();
    const [sendOrder, queryState] = useSendOrder();
    const submit = useCallback(async (values) => {
        const orderValues = transformConvertValues(values, instruments);
        return await sendOrder(orderValues);
    }, [instruments, sendOrder]);
    return [submit, queryState];
}
