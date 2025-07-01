import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { SendTypeTabs } from '@apex-rn/library/features/Transactions';

import { sendFormDecorator } from './SendFormDecorator';

export default {
  title: 'transactions/Send/SendTypeTabs',
  component: SendTypeTabs,
  decorators: [sendFormDecorator],
} as Meta<typeof SendTypeTabs>;

export const SendTypeStory: StoryFn<typeof SendTypeTabs> = () => {
  return <SendTypeTabs />;
};

SendTypeStory.storyName = 'SendTypeTabs';
