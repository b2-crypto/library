import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box } from '@apex-rn/library/components';
import { OrderFormHeader } from '@apex-rn/library/features/Transactions';

import { orderFormDecorator } from './OrderFormDecorator';

export default {
  title: 'transactions/Orders/OrderFormHeader',
  component: OrderFormHeader,
  parameters: {
    controls: { exclude: ['children'] },
  },
  decorators: [orderFormDecorator],
} as Meta<typeof OrderFormHeader>;

export const OrderFormHeaderStory: StoryObj<typeof OrderFormHeader> = {
  name: 'OrderFormHeader',
  render(args) {
    return (
      <OrderFormHeader {...args}>
        <Box
          flex={1}
          borderWidth={1}
          borderRadius={6}
          borderColor="formBorder"
          height={44}
        />
      </OrderFormHeader>
    );
  },
};
