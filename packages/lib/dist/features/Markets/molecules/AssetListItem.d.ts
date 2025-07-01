import React from 'react';
export type AssetItem = {
  InstrumentId: number;
  LastTradedPx: number;
  PriceIncrement: number;
  Product1Symbol: string;
  Product1Name: string;
  Product2Symbol: string;
  Product2Name: string;
  VenueSymbol: string;
  Rolling24HrPxChangePercent: number;
};
type ItemProps = {
  item: AssetItem;
};
export declare const AssetListItem: ({ item }: ItemProps) => React.JSX.Element;
export {};
