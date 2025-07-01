import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { ProfileDataCard } from '@apex-rn/library/features/Profile';

export default {
  title: 'Profile/ProfileDataCard',
  component: ProfileDataCard,
} as Meta<typeof ProfileDataCard>;

export const ProfileCard: StoryFn<typeof ProfileDataCard> = args => (
  <ProfileDataCard {...args} />
);

ProfileCard.storyName = 'Profile Data Card';

ProfileCard.args = {
  headerText: 'Profile',
  fields: [
    { key: 'User Name', value: 'john' },
    { key: 'Email', value: 'email@example.com' },
    { key: 'Language', value: 'English' },
  ],
};
