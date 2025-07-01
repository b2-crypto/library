import { OrderFormValues } from '../types';
export declare function useOrderSummary(values: Partial<OrderFormValues>): {
  market: {
    amount: string;
    symbol: string;
  } | null;
  fee: {
    amount: string;
    symbol: string;
  } | null;
  totalPrice: {
    amount: string;
    symbol: string;
  } | null;
  net: {
    amount: string;
    symbol: string;
  } | null;
};
