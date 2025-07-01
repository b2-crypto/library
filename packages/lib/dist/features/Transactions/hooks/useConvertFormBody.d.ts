import { IInstrumentWithLevel1 } from '../../../types/apiResponses';
import { AmountFieldAsset } from '../types';
export declare function useConvertFormBody({
  instruments,
  products,
}: {
  instruments: Array<IInstrumentWithLevel1>;
  products: Array<AmountFieldAsset>;
}): {
  anchored: any;
  setAnchored: (nextState: 'from' | 'to' | null) => void;
  fromProducts: AmountFieldAsset[];
  toProducts: AmountFieldAsset[];
  defaultFromProduct: number;
  defaultToProduct: number;
  fromDecimalPlaces: number;
  toDecimalPlaces: number;
};
