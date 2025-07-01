import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { PairStatsTable } from '@apex-rn/library/features/PairDetails';
import { IInstrumentWithLevel1 } from '@apex-rn/library/types';

export default {
  title: 'products/Product Statistic',
  component: PairStatsTable,
} as Meta<typeof PairStatsTable>;

const data: IInstrumentWithLevel1 = {
  OMSId: 1,
  InstrumentId: 1,
  Symbol: 'BTCUSD',
  Product1: 2,
  Product1Symbol: 'BTC',
  Product2: 1,
  Product2Symbol: 'USD',
  InstrumentType: 'Standard',
  VenueInstrumentId: 1,
  VenueId: 1,
  SortIndex: 0,
  SessionStatus: 'Running',
  PreviousSessionStatus: 'RunningPostOnly',
  SessionStatusDateTime: '2023-01-07T01:41:54.239Z',
  SelfTradePrevention: true,
  QuantityIncrement: 1e-8,
  PriceIncrement: 0.01,
  MinimumQuantity: 1e-8,
  MinimumPrice: 0.01,
  VenueSymbol: 'BTCUSD',
  IsDisable: false,
  MasterDataId: 0,
  PriceCollarThreshold: 0,
  PriceCollarPercent: 0,
  PriceCollarEnabled: false,
  PriceFloorLimit: 0,
  PriceFloorLimitEnabled: false,
  PriceCeilingLimit: 0,
  PriceCeilingLimitEnabled: false,
  CreateWithMarketRunning: true,
  AllowOnlyMarketMakerCounterParty: false,
  PriceCollarIndexDifference: 15,
  PriceCollarConvertToOtcEnabled: false,
  PriceCollarConvertToOtcClientUserId: 0,
  PriceCollarConvertToOtcAccountId: 0,
  PriceCollarConvertToOtcThreshold: 0,
  OtcConvertSizeThreshold: 10,
  OtcConvertSizeEnabled: true,
  OtcTradesPublic: true,
  PriceTier: 0,
  BestBid: 28528.5,
  BestOffer: 28536.8,
  LastTradedPx: 28483.8,
  LastTradedQty: 0.004,
  LastTradeTime: 1680273605134,
  SessionOpen: 27977.5,
  SessionHigh: 28539.7,
  SessionLow: 27977.5,
  SessionClose: 28483.8,
  Volume: 0.004,
  CurrentDayVolume: 15.6966,
  CurrentDayNotional: 444160.19516,
  CurrentDayNumTrades: 124,
  CurrentDayPxChange: 506.3,
  Rolling24HrVolume: 15.6966,
  Rolling24HrNotional: 444160.19516,
  Rolling24NumTrades: 124,
  Rolling24HrPxChange: 1.8096684836028951,
  TimeStamp: 1680273605136,
  BidQty: 0.27910026,
  AskQty: 0.78467992,
  BidOrderCt: 0,
  AskOrderCt: 0,
  Rolling24HrPxChangePercent: 1.8096684836028951,
  ProductFullName: 'Bitcoin',
};

export const PairStatsTableWidget: StoryFn<typeof PairStatsTable> = args => (
  <PairStatsTable {...args} />
);

PairStatsTableWidget.storyName = 'Product Statistic';

PairStatsTableWidget.args = {
  instrument: data,
};
