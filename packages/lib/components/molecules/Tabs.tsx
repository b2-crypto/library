import * as React from 'react';
import { FlatList, Platform, StyleSheet, ViewStyle } from 'react-native';

import { testID } from '../../helpers/testId';
import { Theme } from '../../theme';
import { Box, Text } from '../atoms';

import { Button } from './Button';

export type TabItem<Type> = {
  value: Type;
  label: string;
};

type TabsProps<Type extends string | number> = {
  /** Callback when tab is pressed */
  onChange: (value: Type) => void;
  /** Current selected tab */
  value: Type | Array<Type> | null;
  /** Array of TabItems */
  data?: TabItem<Type>[];
  /** Styles for the container of the tabs */
  containerStyles?: ViewStyle;
  /** Props for the wrapper Box */
  wrapperProps?: React.ComponentProps<typeof Box>;
  /** Type of tabs ('default' | 'pills_wide' | 'pills_narrow')*/
  type?: 'default' | 'pills_wide' | 'pills_narrow';
  /** Color of the active tab */
  activeColor?: keyof Theme['colors'];
  /** Minimum width of the tab */
  tabMinWidth?: number;
  /** Center content */
  centerContent?: boolean;
};

export const Tabs = <Type extends string | number>({
  data,
  value,
  onChange,
  containerStyles,
  wrapperProps,
  type = 'default',
  activeColor = 'brandSolid',
  tabMinWidth,
  centerContent,
}: TabsProps<Type>) => {
  const isCentered = centerContent ?? type === 'default';
  const listRef = React.useRef<FlatList>(null);
  // Wait for FlatList to complete positioning and size calculations before
  // scrolling to any element beyond the first one. This prevents scrolling
  // to elements outside the visible area, which could trigger the error:
  // "scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed"
  const [isReady, setReady] = React.useState<boolean>(false);

  let itemIndex = data?.findIndex(i => i.value === value) ?? 0;
  if (itemIndex === -1) {
    itemIndex = 0;
  }

  // Premise is: the component can scroll if there is ONLY a single value selected.
  // If the type of value is array, then it doesn't make sense to try to center the Tab component
  // because of possible multiple values selected.
  const isMultiValue = Array.isArray(value);
  const canScroll = !isMultiValue;

  React.useLayoutEffect(() => {
    if (
      canScroll &&
      isReady &&
      typeof value !== 'undefined' &&
      value !== null
    ) {
      listRef.current?.scrollToIndex({
        index: itemIndex,
        animated: true,
        viewPosition: 0.5,
      });
    }
  }, [value, itemIndex, isReady, canScroll]);

  const renderItem = React.useCallback(
    ({ item }: { item: TabItem<Type> }) => {
      const isActive = Array.isArray(value)
        ? value.includes(item.value)
        : value === item.value;
      const onPress = () => onChange(item.value);
      if (type === 'default') {
        return (
          <Button
            variant="transparent"
            onPress={onPress}
            label={
              <Text
                variant="bodyBold"
                color={isActive ? 'textPrimary' : 'textSecondary'}>
                {item.label}
              </Text>
            }
            paddingHorizontal="m"
            minWidth={tabMinWidth}
            justifyContent="center"
            alignItems="center"
            borderColor={isActive ? activeColor : 'transparent'}
            borderBottomWidth={2}
            borderRadius={0}
            accessible
            accessibilityRole="tab"
            {...testID(item.value.toString())}
          />
        );
      } else {
        return (
          <Button
            variant="transparent"
            backgroundColor={isActive ? activeColor : 'transparent'}
            height={type === 'pills_wide' ? 28 : 20}
            marginHorizontal="xs"
            marginVertical="s"
            paddingHorizontal={type === 'pills_wide' ? 's' : 'm'}
            borderRadius={type === 'pills_wide' ? 30 : 10}
            onPress={onPress}
            label={
              <Text
                variant="captionBold"
                color={isActive ? 'textInverse' : 'textSecondary'}>
                {item.label}
              </Text>
            }
            accessible
            accessibilityRole="tab"
            {...testID(item.value.toString())}
          />
        );
      }
    },
    [type, value, onChange, activeColor, tabMinWidth],
  );

  // Using standard width for now, but can be overridden with tabMinWidth
  const TAB_WIDTH = tabMinWidth ?? 120;

  return (
    <Box
      borderBottomColor={type === 'default' ? 'border3' : undefined}
      borderBottomWidth={type === 'default' ? 1 : 0}
      flexDirection="row"
      accessible
      accessibilityRole="tablist"
      {...wrapperProps}>
      <FlatList
        ref={listRef}
        onLayout={() => {
          setReady(true);
        }}
        showsHorizontalScrollIndicator={Platform.OS === 'web'}
        data={data}
        horizontal
        contentContainerStyle={[
          isCentered ? styles.centeredContent : {},
          containerStyles,
        ]}
        renderItem={renderItem}
        // The usage of getItemLayout is necessary for the scrollToIndex to work properly
        getItemLayout={(_, index) => ({
          length: TAB_WIDTH,
          offset: TAB_WIDTH * index,
          index,
        })}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  centeredContent: {
    minWidth: '100%',
    justifyContent: 'center',
  },
});
