import { IInstrument } from '../../../types/apiResponses';
import { OrderFormValues } from '../types';
type ConfirmItem = {
  label: string;
  value: string;
};
export declare function useOrderConfirmValues(values: OrderFormValues): {
  instrument: IInstrument | undefined;
  confirmItems: ConfirmItem[];
};
export {};
