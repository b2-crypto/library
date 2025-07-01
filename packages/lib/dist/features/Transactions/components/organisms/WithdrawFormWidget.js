import React from 'react';
import { useFormContext } from 'react-hook-form';
import { SendWithdrawFormBody } from './SendWithdrawFormBody';
import { useWithrawTemplates } from '../../hooks';
export const WithdrawFormWidget = (props) => {
    const { watch } = useFormContext();
    const [productId, providerId] = watch(['productId', 'providerId']);
    const templateProps = useWithrawTemplates(productId, providerId);
    return <SendWithdrawFormBody {...props} {...templateProps}/>;
};
