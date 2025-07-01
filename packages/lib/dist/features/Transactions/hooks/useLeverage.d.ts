export declare function useLeverage(): {
  leverage: number;
  noLeverage: boolean;
  disabled: boolean;
  maxLeverage: number;
  setLeverage: (l: number) => {
    payload: {
      instrumentId: number;
      leverage: number;
    };
    type: 'leverages/setLeverage';
  };
};
