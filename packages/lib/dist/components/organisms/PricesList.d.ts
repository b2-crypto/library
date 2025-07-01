import React from 'react';
type PriceCardItem = {
  id: number;
  symbol: string;
  symbol2: string;
  name: string;
  price: number;
  changePct?: number;
};
type PriceListProps = {
  data: PriceCardItem[];
  maxItems?: number;
  onItemPress: (item: PriceCardItem) => void;
  children: (item: PriceCardItem) => React.ReactNode | React.ReactNode[];
  isReadyToLoad?: boolean;
};
export declare function usePrices({ skipQuery }: { skipQuery: boolean }): {
  isLoading: boolean;
  data: PriceCardItem[];
};
export declare const PricesList: ({
  data,
  onItemPress,
  children,
}: Omit<PriceListProps, 'isReadyToLoad'>) => React.JSX.Element;
export declare const PricesListWidget: ({
  isReadyToLoad,
  maxItems,
  ...rest
}: Omit<PriceListProps, 'data' | 'children'>) => React.JSX.Element;
export {};
