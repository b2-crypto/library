import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReceiveTypeTabs } from '@apex-rn/library/features/Transactions';

import { receiveFormDecorator } from './ReceiveFormDecorator';

export default {
  title: 'transactions/Receive/ReceiveTypeTabs',
  component: ReceiveType,
  decorators: [receiveFormDecorator],
} as Meta<typeof ReceiveTypeTabs>;

export const ReceiveTypeStory: StoryObj<typeof ReceiveTypeTabs> = {
  name: 'ReceiveTypeTabs',
  render() {
    return <ReceiveTypeTabs />;
  },
};
