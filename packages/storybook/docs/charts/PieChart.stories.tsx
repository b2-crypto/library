import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { PieChart } from '@apex-rn/library/components';

export default {
  title: 'charts/PieChart',
  component: PieChart,
} as Meta<typeof PieChart>;

const chartData = [
  { value: 15062.02 },
  { value: 29258.39 },
  { value: 10000 },
  { value: 2768.66 },
  { value: 31490 },
  { value: 19552 },
];

const chartColors = [
  '#6CDE07',
  '#F7931A',
  '#9391E7',
  '#627EEA',
  '#04C6A3',
  '#9391E7',
];

export const PieChartComponent: StoryFn<typeof PieChart> = args => (
  <PieChart {...args} />
);

PieChartComponent.storyName = 'Pie Chart';

PieChartComponent.args = {
  colors: chartColors,
  data: chartData,
};
