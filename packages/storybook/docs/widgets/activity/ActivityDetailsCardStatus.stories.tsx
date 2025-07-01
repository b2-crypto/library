import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { ActivityDetailsCardStatus } from '@apex-rn/library/features/Activity';

export default {
  title: 'activity/Details/ActivityDetailsCard',
  component: ActivityDetailsCardStatus,
} as Meta<typeof ActivityDetailsCardStatus>;

export const ActivityDetailsStatus: StoryFn<
  typeof ActivityDetailsCardStatus
> = args => <ActivityDetailsCardStatus {...args} />;

ActivityDetailsStatus.storyName = 'Details Status';
ActivityDetailsStatus.args = {
  activityStatus: 'Success',
  activityTextColor: 'success',
  activityId: '123456789',
  time: new Date().getTime(),
};
