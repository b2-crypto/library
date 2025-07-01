export type OrderType = {
  updateId: number;
  numberOfAccounts: number;
  actionDateTime: number;
  actionType: number;
  lastTradePrice: number;
  numberOfOrders: number;
  price: number;
  productPairCode: number;
  quantity: number;
  side: number;
};

export enum OrderSideType {
  bid = 0,
  ask = 1,
  short = 2, // (reserved for future use)
  error = 3,
}

export const DEFAULT_DEPTH = 20;
