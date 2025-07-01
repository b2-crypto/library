import React from 'react';
import { ViewStyle } from 'react-native';
export type ChartProps = {
  minHeight?: number;
  width?: number;
  height?: number;
  wrapperStyles?: ViewStyle;
  options: {
    [key: string]: unknown;
  };
};
export declare const Chart: ({
  minHeight,
  width: containerWidth,
  height: containerHeight,
  wrapperStyles,
  options,
}: ChartProps) => React.JSX.Element;
