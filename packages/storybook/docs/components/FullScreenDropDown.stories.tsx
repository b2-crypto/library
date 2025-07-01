import { useArgs } from '@storybook/client-api';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  FullScreenDropDown,
  ProductIcon,
  ProductPairIcon,
  Tabs,
} from '@apex-rn/library/components';
import { defaultTheme } from '@apex-rn/library/theme';

export default {
  title: 'components/Dropdown/FullScreenDropDown',
  component: FullScreenDropDown,
  argTypes: {
    value: {
      control: 'text',
    },
    labelColor: {
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
} as Meta<typeof FullScreenDropDown>;

const Template: StoryFn<typeof FullScreenDropDown> = ({
  value,
  setValue,
  ...args
}) => {
  const [, updateArgs] = useArgs();
  return (
    <SafeAreaProvider>
      <FullScreenDropDown
        value={value}
        setValue={val => {
          updateArgs({ value: val });
          setValue(val);
        }}
        {...args}
      />
    </SafeAreaProvider>
  );
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
  dropDownLabel: 'Buy',
  items: instrumentItems,
};

const radioButtonsDataMock = [
  { value: 1, label: 'USD' },
  { value: 2, label: 'BTC' },
  { value: 3, label: 'ETH' },
];

export const InstrumentDropDownHeader = Template.bind({});
InstrumentDropDownHeader.name = 'Instrument DropDown with Header';
InstrumentDropDownHeader.args = {
  placeholder: 'Select Asset',
  items: instrumentItems,
  header: (
    <Tabs
      type="pills_wide"
      data={radioButtonsDataMock}
      value={1}
      onChange={console.log}
    />
  ),
};

const productItems = [
  {
    title: 'BTC Bitcoin',
    value: 1,
    icon: () => <ProductIcon size={24} symbol={'BTC'} />,
  },
  {
    title: 'ETH Ethereum',
    value: 2,
    icon: () => <ProductIcon size={24} symbol={'ETH'} />,
  },
  {
    title: 'LTC Litecoin',
    value: 3,
    icon: () => <ProductIcon size={24} symbol={'LTC'} />,
  },
];

export const ProductDropDown = Template.bind({});
ProductDropDown.args = {
  placeholder: 'Select Product',
  items: productItems,
};
