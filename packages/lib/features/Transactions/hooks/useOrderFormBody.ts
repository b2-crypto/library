import { useEffect, useMemo } from 'react';

import { useOrderProducts } from './useOrderProducts';
import { useOrderPrice } from './useOrderPrice';
import { useMaxQuantity } from './useMaxQuantity';
import { useOrderFormValidationContext } from './useOrderFormValidationContext';

export function useOrderFormBody() {
  const { product1, product2 } = useOrderProducts();
  const orderPrice = useOrderPrice();
  const maxQuantity = useMaxQuantity();
  const { set: setValidationContext } = useOrderFormValidationContext();

  useEffect(
    () =>
      setValidationContext(oldValue => ({
        ...oldValue,
        maxAmount: maxQuantity,
      })),
    [maxQuantity, setValidationContext],
  );

  return useMemo(() => {
    return {
      product1,
      product2,
      orderPrice,
      maxQuantity,
    };
  }, [product1, product2, orderPrice, maxQuantity]);
}
