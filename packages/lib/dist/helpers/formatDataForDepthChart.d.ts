import { DepthChartDataType } from '../types/chartTypes';
import { OrderType } from '../types/orderBookTypes';
export declare const formatOrderBookForDepthChart: (
  orderBook: OrderType[],
  sumInAscendingOrder: boolean,
) => DepthChartDataType;
export declare const formatDataForDepthChart: (
  orderBookBuy: OrderType[],
  orderBookSell: OrderType[],
) => {
  bidData: DepthChartDataType;
  askData: DepthChartDataType;
  bestPrice: number;
};
