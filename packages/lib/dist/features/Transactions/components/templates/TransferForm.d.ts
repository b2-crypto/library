import * as React from 'react';
type Props = {
  /** Optional product ID to presect in the dropdown */
  productId?: number;
  /** Handler to close the form modal */
  onClose: () => void;
  /** Handler to call when the transfer is successful */
  onSuccess: () => void;
};
export declare const TransferForm: ({
  productId,
  onClose,
  onSuccess,
}: Props) => React.JSX.Element;
export {};
