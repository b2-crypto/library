import React from 'react';
import { ChartProps } from '../atoms';
export type PieChartProps = {
  data: {
    value: number;
  }[];
  colors: string[];
} & Omit<ChartProps, 'options'>;
export declare const PieChart: ({
  data,
  colors,
  minHeight,
  ...chartProps
}: PieChartProps) => React.JSX.Element;
