import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import {
  Wallets,
  WalletsScrollList,
} from '@apex-rn/library/features/Dashboard';
import { WalletBalanceItem } from '@apex-rn/library/components';

export default {
  title: 'products/Wallets',
  component: Wallets,
} as Meta<typeof Wallets>;

const data: WalletBalanceItem[] = [
  {
    id: 1,
    symbol: 'USD',
    name: 'US Dollar',
    amount: 138489,
    price: 0,
    priceSymbol: 'USD',
  },
  {
    id: 2,
    symbol: 'BTC',
    name: 'Bitcoin',
    amount: 981999.617123,
    price: 25943.3,
    priceSymbol: 'USD',
  },
  {
    id: 3,
    symbol: 'ETH',
    name: 'Etherium',
    amount: 1.6,
    price: 0,
    priceSymbol: 'USD',
  },
];

export const WalletsWidget: StoryFn<typeof Wallets> = () => (
  <WalletsScrollList data={data} />
);

WalletsWidget.storyName = 'Wallets';
