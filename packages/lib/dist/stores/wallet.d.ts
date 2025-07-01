import { IWalletList } from '../types/commonTypes';
import { RootState } from './store';
type WalletState = {
  walletList: IWalletList;
};
export declare const setWalletList: import('@reduxjs/toolkit').ActionCreatorWithPayload<
  {
    walletList: IWalletList;
  },
  'wallet/setWalletList'
>;
declare const _default: import('redux').Reducer<WalletState>;
export default _default;
export declare const selectWalletList: (state: RootState) => IWalletList;
