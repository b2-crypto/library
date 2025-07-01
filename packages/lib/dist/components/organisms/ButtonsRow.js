import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Box, Text } from '../atoms';
import { Button } from '../molecules';
import { testID } from '../../helpers/testId';
export const ButtonsRow = ({ size, buttons, itemSpacing = 'sm', ...props }) => {
    const { colors } = useTheme();
    return (<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16 }}>
      <Box {...props}>
        {buttons.map((btn, index) => (<Button key={btn.label} label={size !== 'small' ? (<Text variant="bodyBold" color="textSecondary">
                  {btn.label}
                </Text>) : null} padding={'s'} icon={<btn.Icon color={colors.textSecondary}/>} height={size !== 'large' ? 36 : 53} flexDirection="row" iconSpacing="xs" mr={index + 1 !== buttons.length ? itemSpacing : undefined} aria-label={btn.label} variant="secondary" onPress={btn.onPress} {...testID(btn.label)}/>))}
      </Box>
    </ScrollView>);
};
