import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { FormPassword } from '@apex-rn/library/components';

export default {
  title: 'components/Input',
  component: FormPassword,
  argTypes: {
    control: { control: false },
  },
  parameters: {
    controls: {
      include: ['placeholder', 'label'],
    },
  },
} as Meta<typeof FormPassword>;

export const FormPasswordStory: StoryFn<typeof FormPassword> = arg => {
  const { control } = useForm<FieldValues>({
    defaultValues: { password: '' },
    mode: 'onChange',
  });
  return (
    <FormPassword
      control={control}
      {...arg}
      name="password"
      rules={{
        minLength: { value: 6, message: 'formError.passwordValidation' },
      }}
    />
  );
};
FormPasswordStory.storyName = 'Password Field';
FormPasswordStory.args = {
  label: 'Password:',
  placeholder: '',
};
