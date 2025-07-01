import React from 'react';
import { DepthChartDataType } from '../../../types/chartTypes';
interface DepthChartDataProps {
  bestPrice: number;
  askData: DepthChartDataType;
  bidData: DepthChartDataType;
}
interface PriceChartProps {
  chartData: DepthChartDataProps;
  isLoading: boolean;
}
export declare const PairDepthChartCard: ({
  chartData,
  isLoading,
}: PriceChartProps) => React.JSX.Element;
interface PairDepthChartCardWidgetProps {
  instrumentId: number;
}
export declare const PairDepthChartCardWidget: ({
  instrumentId,
}: PairDepthChartCardWidgetProps) => React.JSX.Element;
export {};
