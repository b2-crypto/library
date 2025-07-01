export declare function useMarginPrechecks(): {
  isMarginEnabled: boolean;
  minDeposit: {
    value: number;
    symbol: string;
  };
  isVLEligible: boolean;
  isEnoughFunds: boolean;
  isDenied: boolean;
  isAccountFrozen: boolean;
  isLoading: boolean;
};
export type MarginPrechecks = ReturnType<typeof useMarginPrechecks>;
