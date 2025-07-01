import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

type IUserProps = {
  UserId: number;
  SessionToken: string;
};

type UserState = {
  user: null | IUserProps;
  isAuthenticated: boolean;
  pending2FaToken: string;
  bioAuthPassed: boolean;
};

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  pending2FaToken: '',
  bioAuthPassed: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (
      state,
      { payload: { user } }: PayloadAction<{ user: IUserProps }>,
    ) => {
      state.user = user;
    },
    setAuthenticated: state => {
      state.isAuthenticated = true;
    },
    setToken: (
      state,
      { payload: { token } }: PayloadAction<{ token: string }>,
    ) => {
      if (state.user) {
        state.user.SessionToken = token;
      }
    },
    logout: state => ({ ...initialState, bioAuthPassed: state.bioAuthPassed }),
    set2FAToken: (
      state,
      {
        payload: { pending2FaToken },
      }: PayloadAction<{ pending2FaToken: string }>,
    ) => {
      state.pending2FaToken = pending2FaToken;
    },
    setBioAuthStatus: (state, { payload: status }: PayloadAction<boolean>) => {
      state.bioAuthPassed = status;
    },
  },
});

export const {
  logout,
  setUser,
  setAuthenticated,
  set2FAToken,
  setToken,
  setBioAuthStatus,
} = slice.actions;

export default slice.reducer;

const authSliceState = (state: RootState) => state.auth;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const select2FaToken = (state: RootState) => state.auth.pending2FaToken;

export const selectUser = createSelector(
  authSliceState,
  authState => authState.user,
);

export const selectSessionToken = (state: RootState) =>
  state.auth.user?.SessionToken;

export const selectIsBioAuthenticated = (state: RootState) =>
  state.auth.bioAuthPassed;
