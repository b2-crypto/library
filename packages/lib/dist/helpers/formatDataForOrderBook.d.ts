import { OrderType } from '../types/orderBookTypes';
import { IInstrument } from '../types/apiResponses';
export declare const formatDataForOrderBook: (
  orderBookBuy: OrderType[],
  orderBookSell: OrderType[],
  instrument: IInstrument,
) => {
  title: string;
  value: string;
  rawValue: number;
  fillPercentage: number;
}[][];
