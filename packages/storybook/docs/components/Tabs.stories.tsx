import { Meta, StoryFn } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { Tabs, Box } from '@apex-rn/library/components';

export default {
  title: 'components/Tabs',
  component: Tabs,
  argTypes: {
    type: {
      control: 'inline-radio',
    },
  },
  parameters: {
    controls: {
      include: ['data', 'value', 'type', 'activeColor', 'tabMinWidth'],
    },
  },
} as Meta<typeof Tabs>;

const buttonsList = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
  { value: 5, label: 'Option 5' },
  { value: 6, label: 'Option 6' },
];

export const TabsWidget: StoryFn<typeof Tabs> = ({
  onChange,
  value,
  ...args
}) => {
  const [activeTab, setActiveTab] = useState(value);
  useEffect(() => setActiveTab(value), [value]);

  return (
    <Box width={500}>
      <Tabs
        {...args}
        value={activeTab}
        onChange={v => {
          setActiveTab(v);
          onChange(v);
        }}
      />
    </Box>
  );
};

TabsWidget.storyName = 'Tabs';

TabsWidget.args = {
  data: buttonsList,
  value: 1,
  type: 'default',
};
