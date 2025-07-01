export declare function useOrderFormBody(): {
  product1:
    | {
        id: number;
        symbol: string;
        amount: number;
        decimalPlaces: number;
      }
    | undefined;
  product2:
    | {
        id: number;
        symbol: string;
        amount: number;
        decimalPlaces: number;
      }
    | undefined;
  orderPrice: number;
  maxQuantity: number;
};
