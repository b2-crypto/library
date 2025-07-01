import React from 'react';
export type WalletBalanceItem = {
  id: number;
  symbol: string;
  name: string;
  amount: number;
  price: number;
  priceSymbol: string;
  decimals: number;
};
type Props = {
  icon: React.ReactNode;
  item: WalletBalanceItem;
  onPress?: () => void;
};
export declare const WalletBalanceCard: ({
  icon,
  item,
  onPress,
}: Props) => React.JSX.Element;
export {};
