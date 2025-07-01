import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MarginPositionCard } from '@apex-rn/library/features/Activity';

export default {
  title: 'activity/Details/MarginPositionCard',
  component: MarginPositionCard,
} as Meta<typeof MarginPositionCard>;

type Story = StoryObj<typeof MarginPositionCard>;

export const MarginPositionCardStory: Story = {
  name: 'MarginPositionCard',
  render(args) {
    return <MarginPositionCard {...args} />;
  },
  args: {
    item: {
      AccountId: 59,
      AverageRate: 0.0001,
      BorrowedAmount: 2582271.3394158063,
      BorrowedProductDecimalPlaces: 2,
      BorrowedProductId: 2,
      BorrowedProductSymbol: 'USD',
      DateClosed: '0001-01-01T00:00:00.000Z',
      DateOpened: '2024-01-16T16:41:45.989Z',
      InstrumentSymbol: 'BTCUSD',
      InterestAccrued: 265.8880762148455,
      NotionalCostBasis: 2898324.781170818,
      NotionalProductDecimalPlaces: 2,
      NotionalProductSymbol: 'USD',
      NotionalValue: 2842237.2347138273,
      OmsId: 1,
      PositionAmount: 56.4402791,
      PositionId: 23,
      PositionInstrumentId: 1,
      PositionProductDecimalPlaces: 8,
      PositionProductId: 1,
      PositionProductSymbol: 'BTC',
      PositionState: 'Open',
      PositionType: 'Long',
      PriceFraction: 2,
      Product1Symbol: 'BTC',
      Product2Symbol: 'USD',
      QuantityFraction: 8,
      RealizedPnL: 38920.69646178717,
      Status: 'Open',
      UnrealizedPnL: -56353.434533205786,
    },
  },
};
