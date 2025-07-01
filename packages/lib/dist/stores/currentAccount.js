import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    currentAccount: null,
    lastSessionToken: null,
};
const currentAccountSlice = createSlice({
    name: 'currentAccount',
    initialState,
    reducers: {
        setCurrentAccount: (state, { payload: { account } }) => {
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
export const { setCurrentAccount, clearCurrentAccount, setLastSessionToken } = currentAccountSlice.actions;
export default currentAccountSlice.reducer;
