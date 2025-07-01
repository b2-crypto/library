import React from 'react';
import { Pressable } from 'react-native';
import { Box, Text } from '../atoms';
import { ItemWithBg } from './ItemWithBg';
export const MarketingCard = ({ title, body, onPress, bg, }) => (<Pressable onPress={onPress}>
    <ItemWithBg source={bg} borderRadius={14} height={184}>
      <Box marginHorizontal="xs" marginVertical="s">
        <Text variant="headlineBold" color="white" mb="l">
          {title}
        </Text>
        <Text color="white">{body}</Text>
      </Box>
    </ItemWithBg>
  </Pressable>);
