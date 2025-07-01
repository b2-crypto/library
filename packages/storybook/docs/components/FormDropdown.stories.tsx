import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FormDropdown } from '@apex-rn/library/components';

export default {
  title: 'components/Dropdown/FormDropdown',
  component: FormDropdown,
  argTypes: {
    control: {
      control: false,
    },
    rules: {
      control: false,
    },
  },
  parameters: {
    controls: {
      exclude: ['shouldUnregister'],
    },
  },
} as Meta<typeof FormDropdown>;

export const FormDropdownStory: StoryFn<typeof FormDropdown> = args => {
  const form = useForm({
    mode: 'onChange',
  });
  return (
    <SafeAreaProvider>
      <FormDropdown control={form.control} {...args} />
    </SafeAreaProvider>
  );
};

const items = [
  {
    title: 'Option 1',
    value: 1,
  },
  {
    title: 'Option 2',
    value: 2,
  },
  {
    title: 'Option 3',
    value: 3,
  },
  {
    title: 'Option 4',
    value: 4,
  },
];

FormDropdownStory.storyName = 'FormDropdown';

FormDropdownStory.args = {
  items,
  label: 'Field Label',
  name: 'field',
  placeholder: 'Select an option',
};
