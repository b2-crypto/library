import { OrderFormValues } from '../types';
export declare function useMarginOrderSummary(
  values: Partial<OrderFormValues>,
): {
  borrowingAmount: {
    amount: string;
    symbol: string;
  } | null;
  maxAmount: {
    amount: string;
    symbol: string;
  } | null;
  hourlyInterest: {
    amount: string;
    symbol: string;
  } | null;
};
