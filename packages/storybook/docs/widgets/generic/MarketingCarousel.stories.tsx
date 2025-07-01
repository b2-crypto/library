import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { MarketingCarousel } from '@apex-rn/library/features/Dashboard';

export default {
  title: 'generic/MarketingCarousel',
  component: MarketingCarousel,
  parameters: {
    layout: 'fullscreen',
    controls: {
      include: [
        'cards',
        'itemHeight',
        'backgrounds',
        'dotActiveColor',
        'dotInactiveColor',
      ],
    },
  },
} as Meta<typeof MarketingCarousel>;

export const MarketingCarouselWidget: StoryFn<
  typeof MarketingCarousel
> = args => <MarketingCarousel {...args} />;

MarketingCarouselWidget.storyName = 'MarketingCarousel';

MarketingCarouselWidget.args = {
  cards: [
    'alphapoint_bonus',
    'apy_bonus',
    'send_gift',
    'alphapoint_bonus',
    'apy_bonus',
    'send_gift',
  ],
};
