import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Theme } from '../../theme';
import { Box, Text } from '../atoms';
import { Button } from '../molecules';
import { testID } from '../../helpers/testId';

export type ButtonOptions = {
  label: string;
  Icon: React.ComponentType<{ color: string }>;
  onPress: () => void;
};

type Props = {
  size: 'small' | 'medium' | 'large';
  itemSpacing?: keyof Theme['spacing'];
  buttons: ButtonOptions[];
} & React.ComponentProps<typeof Box>;

export const ButtonsRow = ({
  size,
  buttons,
  itemSpacing = 'sm',
  ...props
}: Props) => {
  const { colors } = useTheme<Theme>();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}>
      <Box {...props}>
        {buttons.map((btn, index) => (
          <Button
            key={btn.label}
            label={
              size !== 'small' ? (
                <Text variant="bodyBold" color="textSecondary">
                  {btn.label}
                </Text>
              ) : null
            }
            padding={'s'}
            icon={<btn.Icon color={colors.textSecondary} />}
            height={size !== 'large' ? 36 : 53}
            flexDirection="row"
            iconSpacing="xs"
            mr={index + 1 !== buttons.length ? itemSpacing : undefined}
            aria-label={btn.label}
            variant="secondary"
            onPress={btn.onPress}
            {...testID(btn.label)}
          />
        ))}
      </Box>
    </ScrollView>
  );
};
