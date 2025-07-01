import React from 'react';
import { OrderFormValues } from '../../types';
type Props = {
  /** Form values */
  values: OrderFormValues;
  /** Callback to close the modal on confirming */
  onClose: () => void;
  /** Callback to call on Confirm button press */
  onSubmit: () => void;
  /** Boolean flag indicating submission proccess status */
  submitting?: boolean;
};
export declare const OrderConfirm: ({
  values,
  onClose,
  onSubmit,
  submitting,
}: Props) => React.JSX.Element;
export {};
