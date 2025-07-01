import * as React from 'react';
type MarginPrechecksProps = {
  minDeposit: {
    value: number;
    symbol: string;
  };
  isVLEligible: boolean;
  isEnoughFunds: boolean;
  isAccountFrozen: boolean;
};
export declare const MarginPrecheckErrors: ({
  minDeposit,
  isVLEligible,
  isEnoughFunds,
  isAccountFrozen,
}: MarginPrechecksProps) => React.JSX.Element;
export {};
