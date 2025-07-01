import { InstrumentLevel1 } from '../../../hooks';
import { ConvertFormValues } from '../types';
export declare function transformConvertValues(
  values: ConvertFormValues,
  instruments: InstrumentLevel1[],
): {
  accountId: number;
  instrumentId: number | undefined;
  op: 'buy' | 'sell' | undefined;
  type: 'Market';
  quantity: string;
  value: string;
  anchored: 'quantity' | 'value';
};
export declare function useConvertOrderValues(values: ConvertFormValues): {
  accountId: number;
  instrumentId: number | undefined;
  op: 'buy' | 'sell' | undefined;
  type: 'Market';
  quantity: string;
  value: string;
  anchored: 'quantity' | 'value';
};
