import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { UpdatePasswordForm } from '@apex-rn/library/features/Auth';

export default {
  title: 'auth/Forms/Update Password Form',
  component: UpdatePasswordForm,
} as Meta<typeof UpdatePasswordForm>;

export const UpdatePasswordFormStory: StoryFn<
  typeof UpdatePasswordForm
> = args => <UpdatePasswordForm {...args} />;

UpdatePasswordFormStory.storyName = 'Update Password Form';
UpdatePasswordFormStory.args = {
  onSubmit: console.log,
};
