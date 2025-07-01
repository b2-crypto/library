import React from 'react';
type Props = {
  value: number;
  onChange: (value: number) => void;
  minValue?: number;
  maxValue?: number;
  step?: number;
  markers?: number[];
  formatValue?: (value: number) => string;
  displayValue?: boolean;
};
export declare const SliderInput: ({
  value,
  onChange,
  minValue,
  maxValue,
  step,
  markers,
  formatValue,
  displayValue,
}: Props) => React.JSX.Element;
export {};
