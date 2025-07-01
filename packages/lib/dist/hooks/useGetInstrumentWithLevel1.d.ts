import { IInstrument, ILevel1 } from '../types/apiResponses';
export type InstrumentLevel1 = IInstrument &
  ILevel1 & {
    ProductFullName?: string;
  };
export declare const useGetInstrumentWithLevel1: (skipQuery?: boolean) => {
  data: InstrumentLevel1[];
  isLoading: boolean;
};
