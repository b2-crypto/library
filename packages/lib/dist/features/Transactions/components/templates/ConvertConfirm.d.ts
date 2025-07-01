import React from 'react';
import { ConvertFormValues } from '../../types';
type Props = {
  /** Convert Form values */
  values: ConvertFormValues;
  /** Callback to close the confirm dialog */
  onClose: () => void;
  /** Callback for confirm button press */
  onSubmit: () => void;
  /** Indicator for sumbission loading */
  submitting?: boolean;
};
export declare const ConvertConfirm: ({
  values,
  onClose,
  onSubmit,
  submitting,
}: Props) => React.JSX.Element;
export {};
