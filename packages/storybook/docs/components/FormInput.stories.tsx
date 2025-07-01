import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { FormInput } from '@apex-rn/library/components';

export default {
  title: 'components/Input',
  component: FormInput,

  parameters: {
    controls: {
      include: ['placeholder', 'label'],
    },
  },
} as Meta<typeof FormInput>;

export const FormInputStory: StoryFn<typeof FormInput> = arg => {
  const { control } = useForm<FieldValues>({
    defaultValues: { value: '' },
    mode: 'onChange',
  });
  return <FormInput control={control} {...arg} name="password" />;
};
FormInputStory.storyName = 'Form Input';
FormInputStory.args = {
  label: 'Form Input:',
  placeholder: 'Form Input Placeholder',
};
