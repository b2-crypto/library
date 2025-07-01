import React from 'react';
import { useOrderFormBody } from '../../hooks';
import { useUserCurrentAccount } from '../../../../hooks';
import { OrderFormBody } from './OrderFormBody';
export const OrderFormBodyWidget = () => {
    const providedProps = useOrderFormBody();
    const { isMarginAccount } = useUserCurrentAccount();
    return <OrderFormBody {...providedProps} isMarginAccount={isMarginAccount}/>;
};
