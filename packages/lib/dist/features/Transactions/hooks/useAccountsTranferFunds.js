import { useCallback } from 'react';
import { useTransferFundsMutation } from '../../../services/apexApi';
export function useAccountsTranferFunds() {
    const [mutate, state] = useTransferFundsMutation();
    const handler = useCallback((values) => mutate({
        senderAccountId: values.fromAccountId,
        receiverAccountId: values.toAccountId,
        productId: values.productId,
        amount: parseFloat(values.amount),
        note: 'margin transfer',
    }).unwrap(), [mutate]);
    return [handler, state];
}
