export declare function useTransferBody(): {
  accounts: {
    AccountId: number;
    AccountName: string;
  }[];
  products: {
    id: number;
    symbol: string;
    fullName: string;
    decimalPlaces: number;
    type: 'fiat' | 'crypto';
    amount: number;
    notionalSymbol: string | undefined;
    notionalRate: number | undefined;
    notionalAmount: number;
    disabled: boolean;
  }[];
  defaultFromAccount: {
    AccountId: number;
    AccountName: string;
  };
  defaultToAccount: {
    AccountId: number;
    AccountName: string;
  };
  isLoading: boolean;
};
