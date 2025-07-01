import React from 'react';
import { DepositFormValues } from '../../types';
type Props = {
  /** deposit form values */
  values: DepositFormValues & {
    type: 'send';
  };
  /** Callback to close the confirm modal */
  onClose: () => void;
  /** Flag indicating the state of submission */
  submitting?: boolean;
  /** Callback to call submission handler on Confirm button press */
  onSubmit: () => void;
  /** Selected asset (product) */
  asset: {
    Product: string;
    ProductFullName: string;
    DecimalPlaces: number;
  };
  typeTransaction?: 'deposit' | 'withdraw';
};
export declare const DepositOrWithdrawConfirm: ({
  values,
  onClose,
  onSubmit,
  submitting,
  asset,
  typeTransaction,
}: Props) => React.JSX.Element;
export {};
