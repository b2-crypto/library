import { OrderType } from '../types/orderBookTypes';
export declare const useOrderBook: (instrumentId: number) => {
  isLoading: boolean;
  orderBookBuy: OrderType[];
  orderBookSell: OrderType[];
};
