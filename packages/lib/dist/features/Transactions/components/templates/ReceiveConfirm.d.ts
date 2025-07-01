import React from 'react';
import { ReceiveFormValues } from '../../types';
type Props = {
  /** Form values */
  values: ReceiveFormValues & {
    type: 'transfer';
  };
  /** Callback to close confirm modal */
  onClose: () => void;
  /** Flag indicating submission process */
  submitting?: boolean;
  /** Callback to call on confirm button press */
  onSubmit: () => void;
  /** Selected asset (product) object */
  asset: {
    Product: string;
    ProductFullName: string;
    DecimalPlaces: number;
  };
};
export declare const ReceiveConfirm: ({
  values,
  onClose,
  onSubmit,
  submitting,
  asset,
}: Props) => React.JSX.Element;
export {};
