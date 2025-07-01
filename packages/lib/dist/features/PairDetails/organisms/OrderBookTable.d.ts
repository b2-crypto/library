import React from 'react';
import { OrderBookRowCellProps } from '../molecules';
type OrderBookTableProps = {
  data: OrderBookRowCellProps[][];
  spread: string;
};
export declare const OrderBookTable: ({
  data,
  spread,
}: OrderBookTableProps) => React.JSX.Element;
export {};
