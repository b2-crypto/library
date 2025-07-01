import React from 'react';
import { Theme } from '../../theme';
type PeriodFilterProps = {
  separatorColor?: keyof Theme['colors'];
  value: number;
  onChange: (value: number) => void;
};
export declare const PeriodFilter: ({
  separatorColor,
  value,
  onChange,
}: PeriodFilterProps) => React.JSX.Element;
export {};
