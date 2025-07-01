import { ConvertFormValues } from '../types';
export declare function useConvertForm(
  initialValues?: Partial<ConvertFormValues> & {
    accountId: number;
  },
  context?: {
    balances: Record<number, number>;
  },
): import('react-hook-form').UseFormReturn<ConvertFormValues, any, undefined>;
