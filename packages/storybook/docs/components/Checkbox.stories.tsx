import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Checkbox } from '@apex-rn/library/components';

export default {
  title: 'components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['label', 'checked', 'disabled', 'hasError', 'onChange', 'size'],
    },
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = args => <Checkbox {...args} />;

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
  label: 'Default Checkbox',
};

export const CheckedCheckbox = Template.bind({});
CheckedCheckbox.args = {
  label: 'Checked Checkbox',
  checked: true,
};

export const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
  label: 'Disabled Checkbox',
  checked: true,
  disabled: true,
};

export const ErrorCheckbox = Template.bind({});
ErrorCheckbox.args = {
  label: 'Error Checkbox',
  hasError: true,
};
