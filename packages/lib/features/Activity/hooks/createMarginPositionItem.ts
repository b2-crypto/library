import { increment2digits } from '../../../helpers/format';
import { MarginPosition } from '../../../services/marginApi';
import { IInstrument, IProduct } from '../../../types/apiResponses';

export function createMarginPositionItem(
  item: MarginPosition,
  instruments: IInstrument[],
  products: IProduct[],
  notionalProduct?: IProduct,
) {
  const instrument = instruments.find(
    i => i.InstrumentId === item.PositionInstrumentId,
  );
  const positionProduct = products.find(
    p => p.ProductId === item.PositionProductId,
  );
  const borrowedProduct = products.find(
    p => p.ProductId === item.BorrowedProductId,
  );
  return {
    ...item,
    QuantityFraction: instrument?.QuantityIncrement
      ? increment2digits(instrument.QuantityIncrement)
      : 2,
    PriceFraction: instrument?.PriceIncrement
      ? increment2digits(instrument.PriceIncrement)
      : 2,
    Product1Symbol: instrument?.Product1Symbol || '',
    Product2Symbol: instrument?.Product2Symbol || '',
    InstrumentSymbol: instrument?.VenueSymbol || '',
    PositionProductDecimalPlaces: positionProduct?.DecimalPlaces || 2,
    PositionProductSymbol: positionProduct?.Product || '',
    BorrowedProductDecimalPlaces: borrowedProduct?.DecimalPlaces || 2,
    BorrowedProductSymbol: borrowedProduct?.Product || '',
    NotionalProductSymbol: notionalProduct?.Product || '',
    NotionalProductDecimalPlaces: notionalProduct?.DecimalPlaces || 2,
    Status: 'Open' as const,
  };
}
