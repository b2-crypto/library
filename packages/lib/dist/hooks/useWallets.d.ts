import { IAccountPosition, IProduct } from '../types/apiResponses';
export type UserWallet = IAccountPosition &
  IProduct & {
    AvailableBalance: number;
    NotionalDecimalPlaces: number;
    CollateralEnabled: boolean;
  };
export declare function useWallets({
  hideSmallAmounts,
  skipQuery,
  includePending,
}: {
  hideSmallAmounts?: boolean | undefined;
  skipQuery?: boolean | undefined;
  includePending?: boolean | undefined;
}): {
  data: UserWallet[];
  isLoading: boolean;
  refetch: () => void;
  isMarginAccount: boolean;
};
