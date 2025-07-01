import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { orderFormDecorator } from './OrderFormDecorator';
import { TifField } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/Orders/TifField',
  component: TifField,
  decorators: [orderFormDecorator],
} as Meta<typeof TifField>;

export const TifFieldStory: StoryObj<typeof TifField> = {
  name: 'TifField',
  render(args) {
    return (
      <SafeAreaProvider>
        <TifField {...args} />
      </SafeAreaProvider>
    );
  },
};
