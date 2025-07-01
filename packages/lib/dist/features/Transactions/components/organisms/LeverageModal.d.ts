import React from 'react';
type Props = {
  leverage: number;
  maxValue: number;
  isVisible: boolean;
  onClose: () => void;
  onConfirm: (value: number) => void;
  isBuy?: boolean;
};
export declare const LeverageModal: ({
  leverage,
  isVisible,
  onClose,
  onConfirm,
  maxValue,
  isBuy,
}: Props) => React.JSX.Element;
export {};
