import {
  MarginPositionListItem,
  ActivityList,
  OrderItemView,
  WalletItemView,
} from '@apex-rn/library/features/Activity';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const orderData = [
  {
    amount: 1,
    avgPrice: 28069.5,
    currency: 'BTC',
    decimalPlaces: undefined,
    fullName: 'Bitcoin',
    iconSymbols: ['BTC', 'USD'],
    id: 8656432,
    instrumentId: 1,
    limitPrice: 1,
    side: 'Buy',
    status: 'Working',
    symbol: 'BTCUSD',
    timestamp: 1682484305619,
    type: 'Limit',
  },
  {
    amount: 1,
    avgPrice: 28069.5,
    currency: 'BTC',
    decimalPlaces: undefined,
    fullName: 'Bitcoin',
    iconSymbols: ['BTC', 'USD'],
    id: 8656430,
    instrumentId: 1,
    limitPrice: 1,
    side: 'Buy',
    status: 'Working',
    symbol: 'BTCUSD',
    timestamp: 1682484299650,
    type: 'Limit',
  },
];

const walletData = [
  {
    amount: 0.11,
    currency: 'BTC',
    decimalPlaces: 8,
    fullName: 'Bitcoin',
    iconSymbol: 'BTC',
    id: 191,
    notionalPlaces: 2,
    notionalRate: 25956,
    notionalSymbol: 'USD',
    productId: 2,
    status: 'Pending2Fa',
    symbol: 'BTC',
    timestamp: 1683012790065,
    type: 'withdraw',
  },
];

const meta: Meta<typeof ActivityList> = {
  title: 'activity/List',
  component: ActivityList,
};

export default meta;

type Story = StoryObj<typeof ActivityList>;

export const OrderActivityList: Story = {
  name: 'Orders',
  render(args) {
    return <ActivityList {...args} />;
  },
  args: {
    loading: false,
    data: orderData,
    ActivityItemView: OrderItemView,
  },
};

export const WalletActivityList: Story = {
  ...OrderActivityList,
  name: 'Deposits and Withdrawals',
  args: {
    loading: false,
    data: walletData,
    ActivityItemView: WalletItemView,
  },
};

export const MarginActivityList: Story = {
  ...OrderActivityList,
  name: 'Margin Positions',
  args: {
    loading: false,
    data: [
      {
        PositionId: 23,
        OmsId: 1,
        AccountId: 59,
        PositionInstrumentId: 1,
        BorrowedProductId: 2,
        BorrowedAmount: 266604.03415160807,
        PositionProductId: 1,
        PositionAmount: 6.19978489,
        DateOpened: '2024-01-16T16:41:45.989Z',
        DateClosed: '0001-01-01T00:00:00.000Z',
        PositionType: 'Long',
        InterestAccrued: 27.03594393494756,
        PositionState: 'Open',
        UnrealizedPnL: 26795.732586438127,
        RealizedPnL: -6.242055353790539,
        NotionalValue: 292583.23315346724,
        NotionalCostBasis: 265760.4646230942,
        AverageRate: 0.0001,
        PositionProductSymbol: 'BTC',
        PositionProductDecimalPlaces: 8,
        BorrowedProductSymbol: 'USD',
        BorrowedProductDecimalPlaces: 2,
      },
    ],
    ActivityItemView: MarginPositionListItem,
    listVariant: 'map',
    itemVariant: 'card',
  },
};
