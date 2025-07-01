import { createSelector, createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: null,
    isAuthenticated: false,
    pending2FaToken: '',
    bioAuthPassed: false,
};
const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, { payload: { user } }) => {
            state.user = user;
        },
        setAuthenticated: state => {
            state.isAuthenticated = true;
        },
        setToken: (state, { payload: { token } }) => {
            if (state.user) {
                state.user.SessionToken = token;
            }
        },
        logout: state => ({ ...initialState, bioAuthPassed: state.bioAuthPassed }),
        set2FAToken: (state, { payload: { pending2FaToken }, }) => {
            state.pending2FaToken = pending2FaToken;
        },
        setBioAuthStatus: (state, { payload: status }) => {
            state.bioAuthPassed = status;
        },
    },
});
export const { logout, setUser, setAuthenticated, set2FAToken, setToken, setBioAuthStatus, } = slice.actions;
export default slice.reducer;
const authSliceState = (state) => state.auth;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const select2FaToken = (state) => state.auth.pending2FaToken;
export const selectUser = createSelector(authSliceState, authState => authState.user);
export const selectSessionToken = (state) => state.auth.user?.SessionToken;
export const selectIsBioAuthenticated = (state) => state.auth.bioAuthPassed;
