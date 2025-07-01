import React from 'react';
type Props = {
  productId?: number;
  onClose: () => void;
  typeTransaction: 'deposit' | 'withdraw';
};
export declare const DepositOrWithdrawForm: ({
  productId,
  onClose,
  typeTransaction,
}: Props) => React.JSX.Element;
export {};
