import { OrderFormValues } from '../types';
import { OrderFormValidationContextType } from './useOrderFormValidationContext';
export declare function useOrderForm(
  initialValues: Partial<OrderFormValues> & {
    accountId: number;
  },
  context?: OrderFormValidationContextType['value'],
): import('react-hook-form').UseFormReturn<OrderFormValues, any, undefined>;
