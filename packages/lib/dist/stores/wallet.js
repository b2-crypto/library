import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    walletList: {},
};
const slice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setWalletList: (state, { payload: { walletList } }) => {
            state.walletList = walletList;
        },
    },
});
export const { setWalletList } = slice.actions;
export default slice.reducer;
export const selectWalletList = (state) => state.wallet.walletList;
