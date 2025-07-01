import { useCallback } from 'react';
import noop from 'lodash/noop';
import { useTransferFundsMutation } from '../../../services/apexApi';
import { useCreateWithdrawTicketMutation } from '../../../services/apexApi';
import { useUserInfo } from '../../../hooks';
export function useSendSubmit() {
    const { data: userInfo } = useUserInfo();
    const [createWithdraw, { isLoading: withdrawLoading, error: withdrawError, isUninitialized: isWithdrawUninitialized, reset: resetWithdraw, },] = useCreateWithdrawTicketMutation();
    const [transferFunds, { isLoading: transferLoading, error: transferError, isUninitialized: isTransferUninitialized, reset: resetTransfer, },] = useTransferFundsMutation();
    const send = useCallback(async (values) => {
        if (!userInfo?.AccountId) {
            return;
        }
        if (values.type === 'transfer') {
            return await transferFunds({
                senderAccountId: userInfo.AccountId,
                productId: values.productId,
                note: values.note,
                amount: parseFloat(values.amount),
                recipientEmail: values.emailAddress,
            }).unwrap();
        }
        else {
            return await createWithdraw({
                AccountId: userInfo.AccountId,
                ProductId: values.productId,
                Amount: parseFloat(values.amount),
                TemplateForm: values.templateForm,
                TemplateType: values.templateType,
            }).unwrap();
        }
    }, [userInfo, transferFunds, createWithdraw]);
    return [
        send,
        {
            isLoading: withdrawLoading || transferLoading,
            error: transferError || withdrawError,
            reset: isTransferUninitialized
                ? resetWithdraw
                : isWithdrawUninitialized
                    ? resetTransfer
                    : noop,
        },
    ];
}
