import React from 'react';
import { OrderFormValues } from '../../types';
type Props = {
  onClose: () => void;
  initialValues: Partial<OrderFormValues>;
};
export declare const OrderForm: ({
  onClose,
  initialValues,
}: Props) => React.JSX.Element;
export {};
