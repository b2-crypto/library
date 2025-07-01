import React from 'react';
export type MarginItem = {
  InstrumentId: number;
  LastTradedPx: number;
  PriceIncrement: number;
  Product1Symbol: string;
  Product1Name: string;
  Product2Symbol: string;
  Product2Name: string;
  VenueSymbol: string;
  Rolling24HrPxChangePercent: number;
  MarginEnabled: boolean;
  MarginInitialRequirement: number;
};
type ItemProps = {
  item: MarginItem;
};
export declare const MarginListItem: ({ item }: ItemProps) => React.JSX.Element;
export {};
