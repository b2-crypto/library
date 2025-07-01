import { createSelector, createSlice } from '@reduxjs/toolkit';
const initialState = {
    leverages: {},
};
const leveragesSlice = createSlice({
    name: 'leverages',
    initialState,
    reducers: {
        setLeverage: (state, { payload: { instrumentId, leverage }, }) => {
            state.leverages[instrumentId] = leverage;
        },
    },
});
export const { setLeverage } = leveragesSlice.actions;
const getLeverageState = (state) => state.leverages;
export const selectLeverage = createSelector([getLeverageState, (_, instrumentId) => instrumentId], ({ leverages }, instrumentId) => leverages[instrumentId]);
export default leveragesSlice.reducer;
