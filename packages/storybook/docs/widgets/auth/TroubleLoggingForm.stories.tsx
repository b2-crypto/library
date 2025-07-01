import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TroubleLoggingForm } from '@apex-rn/library/features/Auth';

export default {
  title: 'auth/Forms/Trouble Logging Form',
  component: TroubleLoggingForm,
} as Meta<typeof TroubleLoggingForm>;

export const TroubleLoggingFormStory: StoryFn<
  typeof TroubleLoggingForm
> = args => <TroubleLoggingForm {...args} />;

TroubleLoggingFormStory.storyName = 'Trouble Logging Form';
TroubleLoggingFormStory.args = {
  onSubmit: console.log,
};
