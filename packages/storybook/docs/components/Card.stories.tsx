import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Card, Box, Text, Button } from '@apex-rn/library/components';
import { defaultTheme } from '@apex-rn/library/theme';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(defaultTheme.cardVariants).filter(
        o => o !== 'defaults',
      ),
    },
  },
  parameters: {
    controls: {
      include: ['variant', 'heading', 'headingExtra', 'bottom'],
    },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = args => (
  <Card {...args}>
    <Box padding="m">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel aliquet
        quam. Donec quis maximus felis. Aenean varius libero eget gravida
        mollis.
      </Text>
    </Box>
  </Card>
);

export const SimpleCard = Template.bind({});
SimpleCard.storyName = 'Simple Card';
SimpleCard.args = {
  variant: 'elevated',
};

export const CardWithHeader = Template.bind({});
CardWithHeader.storyName = 'Card With Header';
CardWithHeader.args = {
  heading: 'Verify Your Identity',
  variant: 'elevated',
  footer: <Button label="Primary Button" onPress={console.log} />,
};
