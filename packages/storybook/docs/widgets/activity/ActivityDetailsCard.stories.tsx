import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { ActivityDetailsCard } from '@apex-rn/library/features/Activity';
import {
  ProductIcon,
  ProductPairIcon,
  Button,
} from '@apex-rn/library/components';
import { Buy, Sell, Deposit, Withdraw } from '@apex-rn/library/assets/icons';

export default {
  title: 'activity/Details/ActivityDetailsCard',
  component: ActivityDetailsCard,
  argTypes: {
    icon: {
      options: ['BTCUSD', 'ETHUSD', 'BTCUSDT', 'BTC', 'ETH', 'USD'],
      mapping: {
        BTCUSD: <ProductPairIcon symbol1="BTC" symbol2="USD" />,
        ETHUSD: <ProductPairIcon symbol1="ETH" symbol2="USD" />,
        BTCUSDT: <ProductPairIcon symbol1="BTC" symbol2="USDT" />,
        BTC: <ProductIcon symbol="BTC" />,
        ETH: <ProductIcon symbol="ETH" />,
        USD: <ProductIcon symbol="USD" />,
      },
      control: 'select',
    },
    extraIcon: {
      options: ['Buy', 'Sell', 'Deposit', 'Withdraw'],
      mapping: {
        Buy: <Buy />,
        Sell: <Sell />,
        Deposit: <Deposit />,
        Withdraw: <Withdraw />,
      },
      control: 'select',
    },
  },
} as Meta<typeof ActivityDetailsCard>;

const Template: StoryFn<typeof ActivityDetailsCard> = args => (
  <ActivityDetailsCard {...args} />
);

export const OpenOrderDetails = Template.bind({});
OpenOrderDetails.storyName = 'Open Order';
OpenOrderDetails.args = {
  title: 'ETHUSD',
  icon: <ProductPairIcon symbol1="ETH" symbol2="USD" />,
  extraIcon: <Buy />,
  amount: '1.45847472',
  currency: 'ETH',
  product: 'ETHUSD',
  activityType: 'Buy',
  activityTypeColor: 'buy',
  orderType: 'Limit',
  valuesInfo: [
    {
      title: 'Avg Price',
      value: '$19,987.65',
    },
    { title: 'Limit Price', value: '$20,000.00' },
  ],
  activityStatus: 'OPEN',
  activityTextColor: 'buy',
  activityId: '938-3736363535',
  time: 1681875573683,
  footer: (
    <Button
      variant="danger"
      label="Cancel Order"
      onPress={console.log}
      marginVertical="none"
    />
  ),
};

export const FilledOrderDetails = Template.bind({});
FilledOrderDetails.storyName = 'Filled Order';
FilledOrderDetails.args = {
  title: 'BTCUSD',
  icon: <ProductPairIcon symbol1="BTC" symbol2="USD" />,
  extraIcon: <Sell />,
  amount: '1.00000000',
  currency: 'BTC',
  product: 'BTCUSD',
  activityType: 'Sell',
  activityTypeColor: 'sell',
  orderType: 'Market',
  valuesInfo: [
    {
      title: 'Avg Price',
      value: '$28,648.49',
    },
  ],
  activityStatus: 'Filled',
  activityId: '938-3736363535',
  time: 1681875573683,
};

export const DepositDetails = Template.bind({});
DepositDetails.storyName = 'Deposit';
DepositDetails.args = {
  title: 'USD US Dollar',
  icon: <ProductIcon symbol="USD" />,
  extraIcon: <Deposit />,
  amount: '100.00',
  currency: 'USD',
  product: 'USD',
  activityType: 'Depositing',
  valuesInfo: [
    {
      title: 'Value',
      value: '$100.00',
    },
  ],
  userInfo: [{ title: 'Comment', value: 'Additional info' }],
  activityStatus: 'New',
  activityId: '938-3736363535',
  time: 1681875573683,
};

export const WithdrawDetails = Template.bind({});
WithdrawDetails.storyName = 'Withdraw';
WithdrawDetails.args = {
  title: 'BTC Bitcoin',
  icon: <ProductIcon symbol="USD" />,
  extraIcon: <Withdraw />,
  amount: '1.00000000',
  currency: 'BTC',
  product: 'BTC',
  activityType: 'Withdrawed',
  valuesInfo: [
    {
      title: 'Value',
      value: '$28,777.00',
    },
  ],
  activityStatus: 'Rejected',
  activityTextColor: 'error',
  activityId: '938-3736363535',
  time: 1681875573683,
};

export const AccountTransactionDetails = Template.bind({});
AccountTransactionDetails.storyName = 'Account Transaction';
AccountTransactionDetails.args = {
  activityId: 36024192,
  activityStatus: 'complete',
  activityType: 'Sold',
  amount: '0.21040000',
  currency: 'BTC',
  extraIcon: <Sell />,
  icon: <ProductIcon symbol="BTC" />,
  product: 'BTC',
  time: 1686009705695,
  title: 'BTC',
  userInfo: [
    { title: 'Reference type', value: 'Trade' },
    { title: 'Transaction type', value: 'Trade' },
  ],
  valuesInfo: [{ title: 'Value', value: '5,564.45 $' }],
};
