import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { OrderBookTable } from '@apex-rn/library/features/PairDetails';

export default {
  title: 'products/Order Book Table',
  component: OrderBookTable,
} as Meta<typeof OrderBookTable>;

const data = [
  [
    { title: '0.08658813', value: '28570.8', fillPercentage: 10 },
    { title: '0.84670244', value: '28570.9', fillPercentage: 10 },
  ],
  [
    { title: '2.9750697', value: '28570.7', fillPercentage: 20 },
    { title: '0.9125106', value: '28572', fillPercentage: 20 },
  ],
  [
    { title: '0.15396438', value: '28567.4', fillPercentage: 30 },
    { title: '0.11556748', value: '28572.9', fillPercentage: 30 },
  ],
  [
    { title: '2.41925127', value: '28567.3', fillPercentage: 40 },
    { title: '0.00369072', value: '28574.8', fillPercentage: 40 },
  ],
  [
    { title: '2.49', value: '28567.2', fillPercentage: 50 },
    { title: '0.21359403', value: '28574.9', fillPercentage: 50 },
  ],
  [
    { title: '1.16965331', value: '28566.3', fillPercentage: 60 },
    { title: '2.97245424', value: '28575', fillPercentage: 60 },
  ],
  [
    { title: '0.00210064', value: '28566.2', fillPercentage: 70 },
    { title: '0.07432101', value: '28575.4', fillPercentage: 70 },
  ],
  [
    { title: '0.03493939', value: '28565.1', fillPercentage: 80 },
    { title: '0.22839146', value: '28575.5', fillPercentage: 80 },
  ],
  [
    { title: '0.00262963', value: '28565', fillPercentage: 90 },
    { title: '2.40657019', value: '28576.7', fillPercentage: 90 },
  ],
  [
    { title: '2.97935547', value: '28564.9', fillPercentage: 100 },
    { title: '0.11611995', value: '28576.9', fillPercentage: 100 },
  ],
];

export const OrderBookWidget: StoryFn<typeof OrderBookTable> = args => (
  <OrderBookTable {...args} />
);

OrderBookWidget.storyName = 'Order Book Table';

OrderBookWidget.args = {
  data: data,
};
