import { useCallback } from 'react';
import { useConfirmRequestTransferMutation, useRejectRequestTransferMutation, } from '../../../services/apexApi';
export const useUserRequestConfirm = () => {
    const [confirm, { isLoading: confirming, error: confirmError }] = useConfirmRequestTransferMutation();
    const [reject, { isLoading: rejecting, error: rejectError }] = useRejectRequestTransferMutation();
    const onSubmit = useCallback(async (type, requestCode) => {
        if (type === 'confirm') {
            await confirm({ requestCode });
        }
        else {
            await reject({ requestCode });
        }
    }, []);
    return {
        submitting: confirming || rejecting,
        onSubmit,
        error: confirmError || rejectError,
    };
};
