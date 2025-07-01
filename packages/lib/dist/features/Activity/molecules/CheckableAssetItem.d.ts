import React from 'react';
type Props = {
  productId: number;
  symbol: string;
  fullName: string;
  amount: number;
  decimalPlaces: number;
  notional: number;
  notionalSymbol: string;
  notionalDecimalPlaces: number;
  isSelected: boolean;
  onToggle: () => void;
  drag?: () => void;
  isActive?: boolean;
};
export declare const CheckableAssetItem: ({
  productId,
  symbol,
  fullName,
  amount,
  decimalPlaces,
  notional,
  notionalSymbol,
  notionalDecimalPlaces,
  isSelected,
  onToggle,
  drag,
  isActive,
}: Props) => React.JSX.Element;
export {};
