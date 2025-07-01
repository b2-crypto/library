export declare function useMarginBalances(hideSmallAmounts?: boolean): {
  data:
    | {
        NotionalProductSymbol: string;
        ProductSymbol: string;
        ProductFullName: string;
        DecimalPlaces: number;
        CollateralEnabled: boolean;
        AccountId: number;
        AvailableAmount: number;
        AvailableNotional: number;
        HaircutAmount: number;
        HaircutAmountNotional: number;
        LiabilityAmount: number;
        LiabilityAmountNotional: number;
        OnHoldAmount: number;
        OnHoldNotional: number;
        ProductId: number;
        TotalAmount: number;
        TotalAmountNotional: number;
        UsableMargin: number;
        UsableMarginNotional: number;
        UsedMargin: number;
        UsedMarginNotional: number;
      }[]
    | undefined;
  refetch: () => void;
};
