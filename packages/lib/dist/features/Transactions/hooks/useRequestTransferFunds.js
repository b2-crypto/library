import { useCallback } from 'react';
import { useRequestTransferFundsMutation } from '../../../services/apexApi';
export function useRequestTransferFunds() {
    const [requestTransferFunds, mutationState] = useRequestTransferFundsMutation();
    const requestFunds = useCallback(async (values) => {
        return await requestTransferFunds({
            Notes: values.note,
            ReceiverUsername: values.emailAddress,
            Amount: parseFloat(values.amount),
            ProductId: values.productId,
        }).unwrap();
    }, [requestTransferFunds]);
    return [requestFunds, mutationState];
}
