import { AffiliateTagCard } from '@apex-rn/library/features/Profile';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
  title: 'Profile/Affiliate',
  component: AffiliateTagCard,
} as Meta<typeof AffiliateTagCard>;

export const AffiliateTagCardStory: StoryObj<typeof AffiliateTagCard> = {
  render(args) {
    return <AffiliateTagCard {...args} />;
  },
  name: 'AffiliateTagCard',
  args: {
    affiliateUrl: 'http://example.org/',
  },
};
