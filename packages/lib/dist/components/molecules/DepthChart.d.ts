import React from 'react';
import { DepthChartDataType } from '../../types/chartTypes';
import { ChartProps } from '../atoms';
export type DepthChartProps = {
  askData: DepthChartDataType;
  bidData: DepthChartDataType;
  backgroundColor?: string;
} & Omit<ChartProps, 'options'>;
export declare const DepthChart: ({
  askData,
  bidData,
  backgroundColor,
  minHeight,
  ...chartProps
}: DepthChartProps) => React.JSX.Element;
