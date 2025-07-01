import { useGetL2SnapshotQuery } from '../services/apexApi';
import { OrderType, OrderSideType } from '../types/orderBookTypes';

const QUERY_POLLING_INTERVAL_MS = 3000;

const ordersComparator =
  (quantityIsAscending: boolean) => (item1: OrderType, item2: OrderType) => {
    if (item1.price === item2.price) {
      return quantityIsAscending
        ? item1.quantity - item2.quantity
        : item2.quantity - item1.quantity;
    }
    return item1.price - item2.price;
  };

export const useOrderBook = (instrumentId: number) => {
  const { orderBookBuy, orderBookSell, isLoading } = useGetL2SnapshotQuery({
    instrumentId,
  }, {
    pollingInterval: QUERY_POLLING_INTERVAL_MS,
    selectFromResult: ({ data, ...rest }) => {
      const buy = data?.filter(item => item.side === OrderSideType.bid) || [];
      const sell =
        data?.filter(item => item.side === OrderSideType.ask) || [];

      return {
        orderBookBuy: buy.sort(ordersComparator(false)),
        orderBookSell: sell.sort(ordersComparator(true)),
        ...rest,
      };
    },
    refetchOnFocus: true,
  });

  return {
    isLoading,
    orderBookBuy,
    orderBookSell,
  };
};
