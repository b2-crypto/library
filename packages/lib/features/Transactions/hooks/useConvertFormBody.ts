import { useCallback, useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { increment2digits } from '../../../helpers/format';
import { IInstrumentWithLevel1 } from '../../../types/apiResponses';
import { AmountFieldAsset } from '../types';

export function useConvertFormBody({
  instruments,
  products,
}: {
  instruments: Array<IInstrumentWithLevel1>;
  products: Array<AmountFieldAsset>;
}) {
  const { watch, setValue } = useFormContext();
  const [fromProduct, toProduct, fromAmount, toAmount, anchored] = watch([
    'from.productId',
    'to.productId',
    'from.amount',
    'to.amount',
    'anchored',
  ]);

  //#region Calculate default TO product
  const defaultToProduct = useMemo(() => {
    const filtered = products.filter(
      p =>
        !fromProduct ||
        instruments.some(
          i =>
            (i.Product1 === fromProduct && i.Product2 === p.id) ||
            (i.Product2 === fromProduct && i.Product1 === p.id),
        ),
    );
    return (
      filtered.find(p => p.symbol === 'BTC')?.id ||
      filtered.find(p => p.symbol === 'ETH')?.id ||
      filtered[0]?.id
    );
  }, [products, instruments, fromProduct]);

  const toProductId = toProduct || defaultToProduct;
  //#endregion

  //#region Calculate options for FROM dropdown and default option.
  const fromProducts = useMemo(
    () =>
      products.filter(p =>
        instruments.some(
          i =>
            (i.Product1 === toProductId && i.Product2 === p.id) ||
            (i.Product2 === toProductId && i.Product1 === p.id),
        ),
      ),
    [products, instruments, toProductId],
  );

  const defaultFromProduct = useMemo(() => {
    const sorted = fromProducts
      .slice()
      .sort((p1, p2) => p1.amount - p2.amount)
      .sort((p1, p2) => {
        if (p1.type === 'fiat' && p2.type !== 'fiat') {
          return -1;
        } else if (p1.type !== 'fiat' && p2.type === 'fiat') {
          return 1;
        } else {
          return p1.symbol.localeCompare(p2.symbol);
        }
      });

    return sorted[0]?.id;
  }, [fromProducts]);

  const fromProductId = fromProduct || defaultFromProduct;

  useEffect(() => {
    if (fromProduct && !fromProducts.some(p => p.id === fromProduct)) {
      setValue('from.productId', defaultFromProduct);
    }
  }, [fromProducts, fromProduct, defaultFromProduct, setValue]);
  //#endregion

  //#region Find a corresponding instrument for the selected pair of products

  const instrument = useMemo(
    () =>
      instruments.find(
        i =>
          (i.Product1 === fromProductId && i.Product2 === toProductId) ||
          (i.Product1 === toProductId && i.Product2 === fromProductId),
      ),
    [instruments, fromProductId, toProductId],
  );
  //#endregion

  //#region Input anchoring and recalculate value for unachored field
  const setAnchored = useCallback(
    (nextState: 'from' | 'to' | null) => setValue('anchored', nextState),
    [setValue],
  );

  const isBuy = instrument?.Product1 === fromProduct;

  const fromDecimalPlaces = increment2digits(
    instrument?.[isBuy ? 'QuantityIncrement' : 'PriceIncrement'] || 0.01,
  );
  const toDecimalPlaces = increment2digits(
    instrument?.[isBuy ? 'PriceIncrement' : 'QuantityIncrement'] || 0.01,
  );

  const instrumentPrice = instrument?.[isBuy ? 'BestBid' : 'BestOffer'];
  useEffect(() => {
    if (anchored === 'from' && instrumentPrice) {
      const price = isBuy ? instrumentPrice : 1 / instrumentPrice;
      setValue(
        'to.amount',
        ((parseFloat(fromAmount) || 0) * price).toFixed(toDecimalPlaces),
        { shouldValidate: true },
      );
    }
  }, [fromAmount, anchored, isBuy, instrumentPrice, toDecimalPlaces, setValue]);

  useEffect(() => {
    if (anchored === 'to' && instrumentPrice) {
      const price = isBuy ? 1 / instrumentPrice : instrumentPrice;
      setValue(
        'from.amount',
        ((parseFloat(toAmount) || 0) * price).toFixed(fromDecimalPlaces),
        { shouldValidate: true },
      );
    }
  }, [toAmount, anchored, isBuy, instrumentPrice, fromDecimalPlaces, setValue]);
  //#endregion

  return {
    anchored,
    setAnchored,
    fromProducts,
    toProducts: products,
    defaultFromProduct,
    defaultToProduct,
    fromDecimalPlaces,
    toDecimalPlaces,
  };
}
