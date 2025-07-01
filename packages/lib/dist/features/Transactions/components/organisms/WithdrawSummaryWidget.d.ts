import React from 'react';
type Asset = {
  Product: string;
  DecimalPlaces: number;
};
type Props = {
  /** Selected asset (product) */
  asset: Asset;
  /** User's balance of the selected product */
  balance: number;
};
export declare const WithdrawSummaryWidget: ({
  asset,
  balance,
}: Props) => React.JSX.Element;
export {};
