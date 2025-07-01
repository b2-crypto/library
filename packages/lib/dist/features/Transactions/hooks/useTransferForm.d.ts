import { TransferFormValues } from '../types';
export declare function useTransferForm(
  initialValues: Partial<TransferFormValues>,
  context: {
    /** two dimentional object: first key is accountId, and the second is productId, value is available balance */
    balances: Record<number, Record<number, number>>;
  },
): import('react-hook-form').UseFormReturn<TransferFormValues, any, undefined>;
