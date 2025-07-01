import React from 'react';
import { AmountFieldProps } from '../molecules';
type Props = Partial<AmountFieldProps> & {
  maxQuantity: number;
  orderPrice: number;
  isMarginAccount: boolean;
};
export declare const OrderFormBody: ({
  product1,
  product2,
  orderPrice,
  maxQuantity,
  isMarginAccount,
}: Props) => React.JSX.Element;
export {};
