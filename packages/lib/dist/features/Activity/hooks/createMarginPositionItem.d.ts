import { MarginPosition } from '../../../services/marginApi';
import { IInstrument, IProduct } from '../../../types/apiResponses';
export declare function createMarginPositionItem(
  item: MarginPosition,
  instruments: IInstrument[],
  products: IProduct[],
  notionalProduct?: IProduct,
): {
  QuantityFraction: number;
  PriceFraction: number;
  Product1Symbol: string;
  Product2Symbol: string;
  InstrumentSymbol: string;
  PositionProductDecimalPlaces: number;
  PositionProductSymbol: string;
  BorrowedProductDecimalPlaces: number;
  BorrowedProductSymbol: string;
  NotionalProductSymbol: string;
  NotionalProductDecimalPlaces: number;
  Status: 'Open';
  PositionId: number;
  OmsId: number;
  AccountId: number;
  PositionInstrumentId: number;
  BorrowedProductId: number;
  BorrowedAmount: number;
  PositionProductId: number;
  PositionAmount: number;
  DateOpened: string;
  DateClosed: string;
  PositionType: 'Short' | 'Unknown' | 'Long';
  InterestAccrued: number;
  PositionState: 'Open' | 'Closed';
  UnrealizedPnL: number;
  RealizedPnL: number;
  NotionalValue: number;
  NotionalCostBasis: number;
  AverageRate: number;
};
