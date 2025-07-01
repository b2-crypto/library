import { createContext, useContext } from 'react';

export type OrderFormValidationContextType = {
  value: {
    isMarginAccount?: boolean;
    maxAmount?: number;
  };
  set: React.Dispatch<
    React.SetStateAction<OrderFormValidationContextType['value']>
  >;
};

export const OrderFormValidationContext =
  createContext<OrderFormValidationContextType>({
    value: {
      isMarginAccount: false,
      maxAmount: undefined,
    },
    set: () => {},
  });

export const useOrderFormValidationContext = () =>
  useContext(OrderFormValidationContext);
