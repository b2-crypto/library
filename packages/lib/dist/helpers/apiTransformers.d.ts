import { TradeHistoryItem } from '../types/apiResponses';
import { OrderType } from '../types/orderBookTypes';
export declare function transformFrame(frame: number[]): {
  time: number;
  high: number;
  low: number;
  open: number;
  close: number;
  volume: number;
  bidPrice: number;
  askPrice: number;
  instrumentId: number;
};
export type ApexFrame = ReturnType<typeof transformFrame>;
export declare const transformOrder: (order: number[]) => OrderType;
export declare const concatLevel2Updates: (
  draft: OrderType[],
  updates: OrderType[],
) => void;
export declare function transformTradeHistory(trade: TradeHistoryItem): {
  tradeId: number;
  quantity: number;
  price: number;
  tradetime: number;
  takerSide: number;
};
export type ApexTrade = ReturnType<typeof transformTradeHistory>;
