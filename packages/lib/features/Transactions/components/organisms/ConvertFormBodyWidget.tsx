import React from 'react';
import { IInstrumentWithLevel1 } from '../../../../types/apiResponses';
import { useConvertFormBody } from '../../hooks';
import { AmountFieldAsset } from '../../types';
import { ConvertFormBody } from './ConvertFormBody';

type Props = {
  /** Array of instruments with a level1 data */
  instruments: Array<IInstrumentWithLevel1>;
  /** Array of products with user's balance */
  products: Array<AmountFieldAsset>;
};

/**
 * Wraps the ConvertFormBody with `useConvertFormBody` hook.
 */
export const ConvertFormBodyWidget = ({ instruments, products }: Props) => {
  const props = useConvertFormBody({ instruments, products });

  return <ConvertFormBody {...props} />;
};
