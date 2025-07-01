import React from 'react';
export interface OrderBookRowCellProps {
  title: string;
  value: string;
  rawValue: number;
  fillPercentage: number;
  valueColor?: string;
}
interface TableRowProps {
  row: OrderBookRowCellProps[];
}
export declare const OrderBookRow: ({
  row,
}: TableRowProps) => React.JSX.Element;
export {};
