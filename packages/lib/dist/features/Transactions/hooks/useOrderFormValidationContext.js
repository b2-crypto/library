import { createContext, useContext } from 'react';
export const OrderFormValidationContext = createContext({
    value: {
        isMarginAccount: false,
        maxAmount: undefined,
    },
    set: () => { },
});
export const useOrderFormValidationContext = () => useContext(OrderFormValidationContext);
