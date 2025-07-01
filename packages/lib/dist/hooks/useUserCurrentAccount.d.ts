import { GetAccountInfoResponse, AccountCurrentInfo } from '../types';
export declare const useUserCurrentAccount: () => {
  currentAccount: AccountCurrentInfo | null;
  isMarginAccount: boolean;
  onChangeCurrentAccount: (account: GetAccountInfoResponse) => void;
};
