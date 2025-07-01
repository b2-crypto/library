import React from 'react';
type Props = {
  children: React.ReactNode;
  /** Close form (modal) callback */
  onClose: () => void;
  typeTransaction: 'withdraw' | 'deposit';
};
export declare const DepositFormHeader: ({
  children,
  onClose,
  typeTransaction,
}: Props) => React.JSX.Element;
export {};
