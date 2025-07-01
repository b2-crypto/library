import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Input } from '@apex-rn/library/components';
import { CurrencyPill } from '@apex-rn/library/features/Transactions';

export default {
  title: 'components/Input',
  component: Input,
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['default', 'small'],
    },
  },
  parameters: {
    controls: {
      include: ['placeholder', 'hasError', 'disabled', 'value', 'size'],
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = args => <Input {...args} />;

export const SimpleInput = Template.bind({});
SimpleInput.args = {
  placeholder: 'Input Here',
  size: 'default',
};

export const SmallInput = Template.bind({});
SmallInput.args = {
  placeholder: 'Input Here',
  size: 'small',
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  hasError: true,
};

export const MoneyInput = Template.bind({});
MoneyInput.args = {
  size: 'big',
  prefix: <CurrencyPill symbol="USD" />,
};
