import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { LoginForm } from '@apex-rn/library/features/Auth';

export default {
  title: 'auth/Forms/Sign In Form',
  component: LoginForm,
} as Meta<typeof LoginForm>;

export const LoginFormStory: StoryFn<typeof LoginForm> = args => (
  <LoginForm {...args} />
);

LoginFormStory.storyName = 'Sign In Form';
LoginFormStory.args = {
  onSubmit: console.log,
};
