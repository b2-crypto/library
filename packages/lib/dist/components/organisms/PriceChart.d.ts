import React from 'react';
export type PriceChartWidgetProps = {
  instrumentId: number;
  symbol: string;
  color?: string;
};
type PriceChartProps = {
  data: Array<{
    x: string;
    y: number;
  }>;
  color?: string;
  symbol: string;
};
export declare const PriceChart: React.MemoExoticComponent<
  ({ data, color, symbol }: PriceChartProps) => React.JSX.Element
>;
export declare const PriceChartWidget: React.MemoExoticComponent<
  ({ instrumentId, ...props }: PriceChartWidgetProps) => React.JSX.Element
>;
export {};
