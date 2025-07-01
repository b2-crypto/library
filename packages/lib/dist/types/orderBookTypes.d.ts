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
export declare enum OrderSideType {
  bid = 0,
  ask = 1,
  short = 2,
  error = 3,
}
export declare const DEFAULT_DEPTH = 20;
