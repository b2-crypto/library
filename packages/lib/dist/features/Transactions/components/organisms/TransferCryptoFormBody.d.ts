import React from 'react';
type Props = {
  /** Selected asset (product) */
  asset: {
    ProductId: number;
    Product: string;
    DecimalPlaces: number;
  };
  /** Balance for the product */
  balance?: number;
};
export declare const TransferCryptoFormBody: ({
  asset,
  balance,
}: Props) => React.JSX.Element;
export {};
