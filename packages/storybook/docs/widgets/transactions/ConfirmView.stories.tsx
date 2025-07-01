import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { ConfirmView } from '@apex-rn/library/features/Transactions';
import { Buy, Receive, Sell, Send } from '@apex-rn/library/assets/icons';
import { Button } from '@apex-rn/library/components';
import { palette } from '@apex-rn/library/theme';

export default {
  title: 'transactions/Confirm View',
  component: ConfirmView,
  argTypes: {
    titleColor: {
      control: 'select',
      options: ['buy', 'sell', 'textPrimary', 'textSecondary'],
    },
    icon: {
      control: 'radio',
      options: ['buy', 'sell', 'send', 'receive'],
      mapping: {
        buy: <Buy color={palette.green1} />,
        sell: <Sell color={palette.red1} />,
        send: <Send color={palette.grey3} />,
        receive: <Receive color={palette.grey3} />,
      },
    },
    button: {
      control: 'radio',
      options: ['buy', 'sell', 'ok'],
      mapping: {
        buy: (
          <Button onPress={console.log} label="Buy" variant="buy" size="big" />
        ),
        sell: (
          <Button
            onPress={console.log}
            label="Sell"
            variant="sell"
            size="big"
          />
        ),
        ok: (
          <Button
            onPress={console.log}
            label="OK"
            variant="secondary"
            size="big"
          />
        ),
      },
    },
  },
  parameters: {},
} as Meta<typeof ConfirmView>;

export const ConfirmViewStory: StoryFn<typeof ConfirmView> = args => {
  return <ConfirmView {...args} />;
};

ConfirmViewStory.storyName = 'Confirm View';

ConfirmViewStory.args = {
  symbol: 'BTC',
  icon: 'buy',
  title: 'Buy',
  titleColor: 'buy',
  subTitle: 'BTCUSD',
  button: 'buy',
  data: [
    { label: 'Order Type', value: 'Market' },
    { label: 'Market Price', value: '$2,987.12 USD' },
    { label: 'Price', value: '0.12345678 BTC' },
    { label: 'Note', value: 'user@alphapoint.com', vertical: true },
  ],
};
