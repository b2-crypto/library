export interface LeverageState {
  leverages: Record<number, number>;
}
export declare const setLeverage: import('@reduxjs/toolkit').ActionCreatorWithPayload<
  {
    instrumentId: number;
    leverage: number;
  },
  'leverages/setLeverage'
>;
export declare const selectLeverage: ((
  state: any,
  instrumentId: any,
) => number) &
  import('reselect').OutputSelectorFields<
    (args_0: LeverageState, args_1: any) => number,
    {
      clearCache: () => void;
    }
  > & {
    clearCache: () => void;
  };
declare const _default: import('redux').Reducer<LeverageState>;
export default _default;
