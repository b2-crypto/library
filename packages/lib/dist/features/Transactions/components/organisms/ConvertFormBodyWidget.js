import React from 'react';
import { useConvertFormBody } from '../../hooks';
import { ConvertFormBody } from './ConvertFormBody';
/**
 * Wraps the ConvertFormBody with `useConvertFormBody` hook.
 */
export const ConvertFormBodyWidget = ({ instruments, products }) => {
    const props = useConvertFormBody({ instruments, products });
    return <ConvertFormBody {...props}/>;
};
