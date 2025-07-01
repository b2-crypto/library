import React, { ReactNode } from 'react';
import { Theme } from '../../../theme';
type Props = {
  /** Activity icon */
  image: ReactNode;
  /** Card title */
  title: string;
  /** Product name (symbol, order type, etc) */
  product?: string;
  /** Order amount */
  amount: string | number;
  /** Order currency (symbol) */
  currency?: string;
  /** Timestamp for the transaction */
  time: number | string;
  /** Transaction status (string or ReactNode) */
  status?: ReactNode;
  /** Color for the status color */
  statusColor?: keyof Theme['colors'];
  /** Item press handler */
  onPress?: () => void;
  /** Index of the item in the list */
  index?: number;
};
export declare const ActivityListItem: ({
  image,
  title,
  product,
  amount,
  currency,
  time,
  status,
  statusColor,
  onPress,
  index,
}: Props) => React.JSX.Element;
export {};
