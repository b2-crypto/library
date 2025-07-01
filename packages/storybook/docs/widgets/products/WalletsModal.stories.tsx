import { useArgs } from '@storybook/client-api';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { cryptoSection } from './mocks';
import { VisibleWalletsModal } from '@apex-rn/library/features/Wallet';
import { WalletsEditCheckbox } from '@apex-rn/library/features/Wallet';

export default {
  title: 'products/VisibleWalletsModal',
  component: VisibleWalletsModal,
  argTypes: {
    renderItem: {
      control: false,
    },
  },
} as Meta<typeof VisibleWalletsModal>;

export const WalletModalStory: StoryObj<typeof VisibleWalletsModal> = {
  render(args) {
    const [, updateArgs] = useArgs();

    return (
      <VisibleWalletsModal
        {...args}
        renderItem={({ item }) => (
          <WalletsEditCheckbox
            item={item}
            cryptoShown={args.walletList}
            handleOnChange={val =>
              updateArgs({
                walletList: { ...args.walletList, [item.ProductId]: val },
              })
            }
          />
        )}
      />
    );
  },
  name: 'VisibleWalletsModal',
  args: {
    data: cryptoSection.data,
    walletList: {},
  },
};
