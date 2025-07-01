import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IWalletList } from '../types/commonTypes';

import { RootState } from './store';

type WalletState = {
  walletList: IWalletList;
};

const initialState: WalletState = {
  walletList: {},
};

const slice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletList: (
      state,
      { payload: { walletList } }: PayloadAction<{ walletList: IWalletList }>,
    ) => {
      state.walletList = walletList;
    },
  },
});

export const { setWalletList } = slice.actions;

export default slice.reducer;

export const selectWalletList = (state: RootState) => state.wallet.walletList;
