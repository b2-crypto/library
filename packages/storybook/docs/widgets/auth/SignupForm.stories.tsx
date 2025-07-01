import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { SignUpForm } from '@apex-rn/library/features/Auth';

export default {
  title: 'auth/Forms/Sign Up Form',
  component: SignUpForm,
} as Meta<typeof SignUpForm>;

export const SignUpFormStory: StoryFn<typeof SignUpForm> = args => (
  <SignUpForm {...args} />
);

SignUpFormStory.storyName = 'Sign Up Form';
SignUpFormStory.args = {
  onSubmit: console.log,
  hideModal: console.log,
};
