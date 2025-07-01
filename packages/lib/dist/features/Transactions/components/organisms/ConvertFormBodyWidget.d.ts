import React from 'react';
import { IInstrumentWithLevel1 } from '../../../../types/apiResponses';
import { AmountFieldAsset } from '../../types';
type Props = {
  /** Array of instruments with a level1 data */
  instruments: Array<IInstrumentWithLevel1>;
  /** Array of products with user's balance */
  products: Array<AmountFieldAsset>;
};
/**
 * Wraps the ConvertFormBody with `useConvertFormBody` hook.
 */
export declare const ConvertFormBodyWidget: ({
  instruments,
  products,
}: Props) => React.JSX.Element;
export {};
