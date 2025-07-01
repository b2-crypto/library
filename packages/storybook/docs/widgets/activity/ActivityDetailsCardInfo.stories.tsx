import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { ActivityDetailsCardInfo } from '@apex-rn/library/features/Activity';

export default {
  title: 'activity/Details/ActivityDetailsCard',
  component: ActivityDetailsCardInfo,
} as Meta<typeof ActivityDetailsCardInfo>;

export const ActivityDetailsInfo: StoryFn<
  typeof ActivityDetailsCardInfo
> = args => <ActivityDetailsCardInfo {...args} />;

ActivityDetailsInfo.storyName = 'Details Info';
ActivityDetailsInfo.args = {
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
  ],
  userInfo: [
    {
      title: 'Order ID',
      value: '123456789',
    },
  ],
};
