/// SendWithdrawFormBody
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Box } from '@apex-rn/library/components';
import { SendWithdrawFormBody } from '@apex-rn/library/features/Transactions';

import { sendFormDecorator } from './SendFormDecorator';

export default {
  title: 'transactions/Send/SendWithdrawFormBody',
  component: SendWithdrawFormBody,
  decorators: [sendFormDecorator],
  parameters: {
    sendForm: {
      initialValues: { productId: 1 },
    },
  },
} as Meta<typeof SendWithdrawFormBody>;

export const SendWithdrawFormBodyStory: StoryFn<
  typeof SendWithdrawFormBody
> = args => {
  return (
    <Box gap="m">
      <SendWithdrawFormBody {...args} />
    </Box>
  );
};

SendWithdrawFormBodyStory.storyName = 'SendWithdrawFormBody';

SendWithdrawFormBodyStory.args = {
  asset: {
    Product: 'BTC',
    DecimalPlaces: 8,
  },
  templates: [
    {
      AccountProviderId: 9,
      TemplateName: 'Custom',
      AccountProviderName: 'btc',
    },
  ],
  templateInfo: { Comment: '', ExternalAddress: '', TemplateType: 'Custom' },
};
