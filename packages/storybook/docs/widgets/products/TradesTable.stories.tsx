import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TradesTable } from '@apex-rn/library/features/PairDetails';

export default {
  title: 'products/Trades List',
  component: TradesTable,
} as Meta<typeof TradesTable>;

const data = [
  {
    tradeId: 4389726,
    productPairCode: 1,
    quantity: 0.4381,
    price: 28294.1,
    order1: 8493140,
    order2: 8493141,
    tradetime: 1680269448569,
    direction: 0,
    takerSide: 0,
    blockTrade: 1,
    orderClientId: 0,
  },
  {
    tradeId: 4389727,
    productPairCode: 1,
    quantity: 0.4339,
    price: 28308.9,
    order1: 8493142,
    order2: 8493143,
    tradetime: 1680269455901,
    direction: 1,
    takerSide: 0,
    blockTrade: 1,
    orderClientId: 0,
  },
  {
    tradeId: 4389728,
    productPairCode: 1,
    quantity: 0.4503,
    price: 28311.3,
    order1: 8493144,
    order2: 8493145,
    tradetime: 1680269462162,
    direction: 1,
    takerSide: 1,
    blockTrade: 1,
    orderClientId: 0,
  },
  {
    tradeId: 4389729,
    productPairCode: 1,
    quantity: 0.0912,
    price: 28311.3,
    order1: 8493146,
    order2: 8493147,
    tradetime: 1680269467496,
    direction: 0,
    takerSide: 1,
    blockTrade: 1,
    orderClientId: 0,
  },
  {
    tradeId: 4389730,
    productPairCode: 1,
    quantity: 0.463,
    price: 28334.7,
    order1: 8493148,
    order2: 8493149,
    tradetime: 1680269477745,
    direction: 1,
    takerSide: 0,
    blockTrade: 1,
    orderClientId: 0,
  },
  {
    tradeId: 4389731,
    productPairCode: 1,
    quantity: 0.2636,
    price: 28340.6,
    order1: 8493150,
    order2: 8493151,
    tradetime: 1680269483024,
    direction: 1,
    takerSide: 1,
    blockTrade: 1,
    orderClientId: 0,
  },
  {
    tradeId: 4389732,
    productPairCode: 1,
    quantity: 0.2016,
    price: 28330.3,
    order1: 8493152,
    order2: 8493153,
    tradetime: 1680269490296,
    direction: 2,
    takerSide: 1,
    blockTrade: 1,
    orderClientId: 0,
  },
  {
    tradeId: 4389733,
    productPairCode: 1,
    quantity: 0.2114,
    price: 28330.3,
    order1: 8493154,
    order2: 8493155,
    tradetime: 1680269498557,
    direction: 0,
    takerSide: 1,
    blockTrade: 1,
    orderClientId: 0,
  },
];

export const TradesTableWidget: StoryFn<typeof TradesTable> = args => (
  <TradesTable {...args} />
);

TradesTableWidget.storyName = 'Trades List';

TradesTableWidget.args = {
  data: data,
};
