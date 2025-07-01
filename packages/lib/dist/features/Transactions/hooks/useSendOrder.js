import { useCallback } from 'react';
import { useSendOrderMutation } from '../../../services/apexApi';
import { TIF_OPTIONS } from '../types';
export function useSendOrder() {
    const [mutation, queryState] = useSendOrderMutation();
    const sendOrder = useCallback(async (values) => {
        const marketByValue = values.type === 'Market' && values.anchored === 'value';
        const payload = {
            InstrumentId: values.instrumentId,
            OMSId: 1,
            AccountId: values.accountId,
            Side: Number(values.op === 'sell'),
            Quantity: marketByValue ? undefined : parseFloat(values.quantity),
            Value: marketByValue ? parseFloat(values.value) : undefined,
            OrderType: values.type,
            TimeInForce: values.tif || TIF_OPTIONS[0],
            Leverage: values.leverage ? 1 / (values.leverage - 1) : undefined,
        };
        if (values.type === 'Limit') {
            payload.LimitPrice = parseFloat(values.limit || '0');
        }
        if (values.type === 'StopMarket') {
            payload.StopPrice = parseFloat(values.stopPrice || '0');
        }
        return await mutation(payload).unwrap();
    }, [mutation]);
    return [sendOrder, queryState];
}
