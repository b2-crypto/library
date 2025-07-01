import { SendFormValues } from '../types';
export declare function useSendForm(
  initialValues: Partial<SendFormValues>,
  context: {
    userEmail?: string;
    /** key is the product ID, value is amount */
    balances: Record<number, number>;
    /** key is product ID, value is symbol */
    productSymbols: Record<number, string>;
  },
): import('react-hook-form').UseFormReturn<SendFormValues, any, undefined>;
