import React from 'react';
import { CandlestickChartDataType } from '../../types/chartTypes';
import { ChartProps } from '../atoms';
export type CandleStickChartProps = {
  data: CandlestickChartDataType;
  markLineValue?: number;
} & Omit<ChartProps, 'options'>;
export declare const CandleStickChart: ({
  data,
  width,
  height,
  markLineValue,
  minHeight,
  ...chartProps
}: CandleStickChartProps) => React.JSX.Element;
