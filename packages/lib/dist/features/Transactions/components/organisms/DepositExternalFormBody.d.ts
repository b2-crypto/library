import React from 'react';
type Props = {
  /** Selected asset (product) object */
  asset: {
    Product: string;
    DecimalPlaces: number;
  };
};
export declare const DepositExternalFormBody: ({
  asset,
}: Props) => React.JSX.Element;
export {};
