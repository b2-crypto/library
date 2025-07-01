import React from 'react';
import { ChartProps } from '../atoms';
import { LineChartDataType } from '../../types/chartTypes';
export type LineChartProps = {
  data: LineChartDataType;
  backgroundColor?: string;
  fillShadowGradientFrom?: string;
  fillShadowGradientTo?: string;
  fillInside?: boolean;
  lineColor?: string;
  isScrollDisabled?: boolean;
  showYLabels?: boolean;
  showXLabels?: boolean;
  showXTick?: boolean;
  showXMinLabel?: boolean;
  typeYLabels?: string;
  typeAxisLine?: string;
  typeGridLine?: string;
  withVerticalGrid?: boolean;
  withHorizontalGrid?: boolean;
  markLineValue?: number;
} & Omit<ChartProps, 'options'>;
export declare const LineChart: ({
  data,
  backgroundColor,
  fillShadowGradientFrom,
  fillShadowGradientTo,
  lineColor,
  fillInside,
  isScrollDisabled,
  showYLabels,
  showXLabels,
  showXTick,
  showXMinLabel,
  typeYLabels,
  typeAxisLine,
  typeGridLine,
  withVerticalGrid,
  withHorizontalGrid,
  markLineValue,
  minHeight,
  ...chartProps
}: LineChartProps) => React.JSX.Element;
