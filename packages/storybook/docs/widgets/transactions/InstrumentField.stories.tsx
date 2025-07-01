import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { orderFormDecorator } from './OrderFormDecorator';
import { InstrumentField } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/Orders/InstrumentField',
  component: InstrumentField,
  decorators: [orderFormDecorator],
} as Meta<typeof InstrumentField>;

export const InstrumentFieldStory: StoryObj<typeof InstrumentField> = {
  render(args) {
    return (
      <SafeAreaProvider>
        <InstrumentField {...args} />
      </SafeAreaProvider>
    );
  },
  name: 'InstrumentField',
  args: {
    instruments: [
      {
        InstrumentId: 1,
        Product1: 1,
        Product1Symbol: 'USD',
        Product2: 2,
        Product2Symbol: 'BTC',
        VenueSymbol: 'USDBTC',
      },
      {
        InstrumentId: 2,
        Product1: 1,
        Product1Symbol: 'USD',
        Product2: 3,
        Product2Symbol: 'ETH',
        VenueSymbol: 'USDETH',
      },
    ],
  },
};
