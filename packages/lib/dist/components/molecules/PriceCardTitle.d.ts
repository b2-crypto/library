import React from 'react';
type PriceCardTitleProps = {
  icon: React.ReactNode;
  item: {
    symbol: string;
    symbol2: string;
    name: string;
    price: number;
    changePct?: number;
  };
  onPress: () => void;
};
export declare const PriceCardTitle: ({
  icon,
  item,
  onPress,
}: PriceCardTitleProps) => React.JSX.Element;
export {};
