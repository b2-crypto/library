import { AccountCurrentInfo } from '../types';
export interface CurrentAccountState {
  currentAccount: AccountCurrentInfo | null;
  lastSessionToken: string | null;
}
export declare const setCurrentAccount: import('@reduxjs/toolkit').ActionCreatorWithPayload<
    {
      account: AccountCurrentInfo;
    },
    'currentAccount/setCurrentAccount'
  >,
  clearCurrentAccount: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<'currentAccount/clearCurrentAccount'>,
  setLastSessionToken: import('@reduxjs/toolkit').ActionCreatorWithPayload<
    any,
    'currentAccount/setLastSessionToken'
  >;
declare const _default: import('redux').Reducer<CurrentAccountState>;
export default _default;
