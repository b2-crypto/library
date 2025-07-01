import React from 'react';
import { SendFormValues } from '../../types';
type Props = {
  /** Send form values */
  values: SendFormValues;
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
};
export declare const SendConfirm: ({
  values,
  onClose,
  onSubmit,
  submitting,
  asset,
}: Props) => React.JSX.Element;
export {};
