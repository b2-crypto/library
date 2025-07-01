import { useArgs } from '@storybook/client-api';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  ProductPairIcon,
  SmallDropDown,
  Tabs,
} from '@apex-rn/library/components';
import { defaultTheme } from '@apex-rn/library/theme';

export default {
  title: 'components/Dropdown/SmallDropDown',
  component: SmallDropDown,
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
    labelColor: {
      control: {
        options: Object.keys(defaultTheme.colors),
        type: 'select',
      },
    },
    valueTextColor: {
      control: {
        options: Object.keys(defaultTheme.colors),
        type: 'select',
      },
    },
    header: {
      control: false,
    },
    setValue: {
      action: 'setValue',
    },
  },
} as Meta<typeof SmallDropDown>;

const Template: StoryFn<typeof SmallDropDown> = ({
  value,
  setValue,
  ...args
}) => {
  const [, updateArgs] = useArgs();
  return (
    <SafeAreaProvider>
      <SmallDropDown
        {...args}
        value={value}
        setValue={val => {
          updateArgs({ value: val });
          setValue(val);
        }}
      />
    </SafeAreaProvider>
  );
};

Template.args = {
  placeholder: 'Select Asset',
  dropDownLabel: 'Select',
};

const instrumentItems = [
  {
    title: 'BTCUSD',
    value: 1,
    icon: () => <ProductPairIcon size={24} symbol1="BTC" symbol2="USD" />,
  },
  {
    title: 'ETHUSD',
    value: 2,
    icon: () => <ProductPairIcon size={24} symbol1="ETH" symbol2="USD" />,
  },
  {
    title: 'BTCUSDT',
    value: 3,
    icon: () => <ProductPairIcon size={24} symbol1="BTC" symbol2="USDT" />,
  },
  {
    title: 'BTCCAD',
    value: 4,
    icon: () => <ProductPairIcon size={24} symbol1="BTC" symbol2="CAD" />,
  },
];

export const InstrumentDropDown = Template.bind({});
InstrumentDropDown.args = {
  placeholder: 'Select Asset',
  items: instrumentItems,
};
const filters = [
  { label: 'BTC', value: 1 },
  { label: 'USD', value: 2 },
];

export const InstrumentDropDownHeader = Template.bind({});
InstrumentDropDownHeader.name = 'Instrument Dropdown with Header';
InstrumentDropDownHeader.args = {
  placeholder: 'Select Asset',
  items: instrumentItems,
  header: (
    <Tabs type="pills_wide" data={filters} value={1} onChange={console.log} />
  ),
};
