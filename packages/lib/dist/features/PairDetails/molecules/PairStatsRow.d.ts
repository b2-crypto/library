import React from 'react';
import { Theme } from '../../../theme';
export interface TableCellProps {
  title: string;
  value: string;
  valueColor?: keyof Theme['colors'];
}
interface TableRowProps {
  row: TableCellProps[];
  isLastRow: boolean;
}
export declare const PairStatsRow: ({
  row,
  isLastRow,
}: TableRowProps) => React.JSX.Element;
export {};
