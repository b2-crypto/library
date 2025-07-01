import * as React from 'react';
import { useTransferBody } from '../../hooks';
import { TransferFormBody } from './TransferFormBody';
export const TransferFormBodyWidget = () => {
    const props = useTransferBody();
    return <TransferFormBody {...props}/>;
};
