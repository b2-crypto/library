import { DepositFormValues } from '../types';
export declare function useDepositForm(
  initialValues: Partial<DepositFormValues>,
  context: {
    amount: string;
    account?: string;
    routingNumber?: string;
    userEmail?: string;
    note?: string;
  },
): import('react-hook-form').UseFormReturn<DepositFormValues, any, undefined>;
