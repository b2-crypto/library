import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, Text } from '@apex-rn/library/components';
import { defaultTheme } from '@apex-rn/library/theme';
import {
  Buy,
  Check,
  CloseIcon,
  Convert,
  Cross,
  QrCode,
  Sell,
} from '@apex-rn/library/assets/icons';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: Object.keys(defaultTheme.buttonVariants),
      control: {
        type: 'select',
      },
    },
    icon: {
      options: ['close', 'convert', 'buy', 'sell'],
      control: 'select',
      mapping: {
        close: <CloseIcon color={defaultTheme.colors.textSecondary} />,
        convert: <Convert color={defaultTheme.colors.textSecondary} />,
        buy: <Buy color={defaultTheme.colors.textSecondary} />,
        sell: <Sell color={defaultTheme.colors.textSecondary} />,
        cross: <Cross color={defaultTheme.colors.textSecondary} />,
      },
    },
  },
  parameters: {
    controls: {
      include: ['label', 'variant', 'loading', 'disabled', 'size', 'icon'],
    },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  render(args) {
    return <Button {...args} />;
  },
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const SecondaryButton: Story = {
  ...PrimaryButton,
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const SmallButton: Story = {
  ...PrimaryButton,
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'small',
  },
};

export const LinkButton: Story = {
  ...PrimaryButton,
  args: {
    label: (
      <Text variant="bodyBold" color="brandSolid">
        Link
      </Text>
    ),
    variant: 'transparent',
  },
};

export const CloseButton: Story = {
  ...PrimaryButton,
  args: {
    variant: 'line',
    icon: 'close',
  },
};

export const DeclineButton: Story = {
  ...PrimaryButton,
  args: {
    variant: 'sell',
    size: 'small',
    icon: <Cross />,
    backgroundColor: 'reject',
    width: 36,
    paddingTop: 'xs',
    paddingLeft: 'xs',
    shadowColor: 'sellDisabled',
    elevation: 2,
  },
};

export const AcceptButton: Story = {
  ...PrimaryButton,
  args: {
    variant: 'primary',
    size: 'small',
    icon: <Check fill="white" />,
    paddingTop: 'xs',
    paddingLeft: 'xs',
    shadowColor: 'brandDisabled',
    elevation: 2,
  },
};

export const IconOnlyButton: Story = {
  ...PrimaryButton,
  args: {
    variant: 'transparent',
    icon: <QrCode color={defaultTheme.colors.brandSolid} />,
  },
};

export const BuyButton: Story = {
  ...PrimaryButton,
  args: {
    label: 'Buy',
    variant: 'buy',
    size: 'big',
  },
};

export const SellButton: Story = {
  ...PrimaryButton,
  args: {
    label: 'Sell',
    variant: 'sell',
    size: 'big',
  },
};
