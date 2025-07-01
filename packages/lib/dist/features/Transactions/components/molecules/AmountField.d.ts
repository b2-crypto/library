import React from 'react';
export type AmountFieldProps = {
  /** Left product (Product1) of the instrument (symbol, amount user owns and decimal places to round the amount) */
  product1: {
    symbol: string;
    amount: number;
    decimalPlaces: number;
  };
  /** Right product (roduct2) of the instrument (symbol, amount user owns and decimal places to round the amount) */
  product2: {
    symbol: string;
    amount: number;
    decimalPlaces: number;
  };
  /** Current market price for the selected instrument */
  orderPrice: number;
  /** Maximum quantity allowed for the transaction */
  maxQuantity: number;
};
export declare const AmountField: ({
  product1,
  product2,
  orderPrice: price,
  maxQuantity,
}: AmountFieldProps) => React.JSX.Element;
