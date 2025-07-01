import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { AccountBalance } from '@apex-rn/library/features/Dashboard';

export default {
  title: 'Profile/AccountBalance',
  component: AccountBalance,
  parameters: {
    layout: 'fullscreen',
    controls: {
      include: ['totalBalance', 'direction'],
    },
  },
} as Meta<typeof AccountBalance>;

export const AccountBalanceStory: StoryFn<typeof AccountBalance> = args => (
  <AccountBalance {...args} />
);

AccountBalanceStory.storyName = 'AccountBalance';

AccountBalanceStory.args = {
  totalBalance: 1_234_567.89,
};
