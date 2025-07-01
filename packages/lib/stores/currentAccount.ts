import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AccountCurrentInfo } from '../types';

export interface CurrentAccountState {
  currentAccount: AccountCurrentInfo | null;
  lastSessionToken: string | null;
}

const initialState: CurrentAccountState = {
  currentAccount: null,
  lastSessionToken: null,
};

const currentAccountSlice = createSlice({
  name: 'currentAccount',
  initialState,
  reducers: {
    setCurrentAccount: (
      state,
      { payload: { account } }: PayloadAction<{ account: AccountCurrentInfo }>,
    ) => {
      state.currentAccount = account;
    },
    setLastSessionToken(state, action) {
      state.lastSessionToken = action.payload.token;
    },
    clearCurrentAccount: state => {
      state.currentAccount = null;
      state.lastSessionToken = null;
    },
  },
});

export const { setCurrentAccount, clearCurrentAccount, setLastSessionToken } =
  currentAccountSlice.actions;
export default currentAccountSlice.reducer;
