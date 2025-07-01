import { useMemo } from 'react';
import { useGetInstrumentWithLevel1 } from '../../../hooks';
export function transformConvertValues(values, instruments) {
    const instrument = instruments.find(i => (i.Product1 === values.from?.productId &&
        i.Product2 === values.to?.productId) ||
        (i.Product1 === values.to?.productId &&
            i.Product2 === values.from?.productId));
    const op = instrument
        ? instrument.Product1 === values.from?.productId
            ? 'sell'
            : 'buy'
        : undefined;
    return {
        accountId: values.accountId,
        instrumentId: instrument?.InstrumentId,
        op,
        type: 'Market',
        quantity: op === 'sell' ? values.from?.amount : values.to?.amount,
        value: op === 'sell' ? values.to?.amount : values.from?.amount,
        anchored: values.anchored &&
            instrument?.Product2 &&
            instrument.Product2 === values[values.anchored].productId
            ? 'value'
            : 'quantity',
    };
}
export function useConvertOrderValues(values) {
    const { data: instruments } = useGetInstrumentWithLevel1();
    return useMemo(() => transformConvertValues(values, instruments), [values, instruments]);
}
