import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

export interface LeverageState {
  leverages: Record<number, number>;
}

const initialState: LeverageState = {
  leverages: {},
};

const leveragesSlice = createSlice({
  name: 'leverages',
  initialState,
  reducers: {
    setLeverage: (
      state,
      {
        payload: { instrumentId, leverage },
      }: PayloadAction<{ instrumentId: number; leverage: number }>,
    ) => {
      state.leverages[instrumentId] = leverage;
    },
  },
});

export const { setLeverage } = leveragesSlice.actions;

const getLeverageState = (state: RootState) => state.leverages;

export const selectLeverage = createSelector(
  [getLeverageState, (_, instrumentId) => instrumentId],
  ({ leverages }, instrumentId) => leverages[instrumentId],
);

export default leveragesSlice.reducer;
