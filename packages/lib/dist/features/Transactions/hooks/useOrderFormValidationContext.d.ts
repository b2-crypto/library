/// <reference types="react" />
export type OrderFormValidationContextType = {
  value: {
    isMarginAccount?: boolean;
    maxAmount?: number;
  };
  set: React.Dispatch<
    React.SetStateAction<OrderFormValidationContextType['value']>
  >;
};
export declare const OrderFormValidationContext: import('react').Context<OrderFormValidationContextType>;
export declare const useOrderFormValidationContext: () => OrderFormValidationContextType;
