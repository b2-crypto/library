import React, { useCallback } from 'react';
import { useTheme } from '@shopify/restyle';

import { Text, TouchableOpacity, View } from '../atoms';
import { ArrowUnionIcon } from '../../assets/icons/ArrowUnionIcon';
import { DropDown, DropdownListItemProps } from '../atoms';
import { Theme } from '../../theme';

interface SmallDropDownProps<T>
  extends Omit<
    React.ComponentProps<typeof TouchableOpacity>,
    'onPress' | 'width'
  > {
  value?: T;
  setValue: (value: T) => void;
  items: DropdownListItemProps<T>[];
  dropDownLabel?: string;
  placeholder?: string;
  labelColor?: keyof Theme['colors'];
  header?: React.ReactNode | React.ReactNode[];
  bold?: boolean;
  valueTextColor?: keyof Theme['colors'];
  isLoading?: boolean;
}

export const SmallDropDown = <T,>({
  value,
  setValue,
  items,
  dropDownLabel,
  header,
  placeholder,
  valueTextColor,
  labelColor = 'textSecondary',
  ...rest
}: SmallDropDownProps<T>) => {
  const { colors } = useTheme<Theme>();

  const ItemOption = useCallback(
    ({ item }: { item: DropdownListItemProps<T> }) => (
      <View
        flexDirection="row"
        borderBottomColor="border3"
        alignItems="center"
        overflow="hidden"
        borderBottomWidth={1}
        padding="s">
        {item.icon && item.icon()}
        <Text
          variant="textBold"
          fontWeight="400"
          numberOfLines={1}
          ml={item.icon ? 'xs' : undefined}>
          {item.title}
        </Text>
      </View>
    ),
    [],
  );

  const DropDownTrigger = useCallback(
    ({
      isOpen,
      selectedItem,
    }: {
      isOpen: boolean;
      selectedItem?: DropdownListItemProps<T>;
    }) => (
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderWidth={1}
        borderRadius={6}
        padding="s"
        minHeight={44}
        borderColor={isOpen ? 'brandDisabled' : 'border3'}>
        <View flexDirection="row" alignItems="center">
          {dropDownLabel && (
            <Text variant="bodyBold" color={labelColor} mr="xs">
              {dropDownLabel}:
            </Text>
          )}
          {selectedItem ? (
            <>
              {selectedItem.icon && selectedItem.icon()}
              <Text
                variant="textBold"
                color={valueTextColor}
                ml={selectedItem.icon ? 'xs' : undefined}>
                {selectedItem.title}
              </Text>
            </>
          ) : (
            placeholder && (
              <Text marginRight="m" variant="bodyBold">
                {placeholder}
              </Text>
            )
          )}
        </View>
        <ArrowUnionIcon color={colors.textPrimary} />
      </View>
    ),
    [dropDownLabel, placeholder, labelColor, valueTextColor, colors],
  );

  return (
    <DropDown
      value={value}
      setValue={setValue}
      items={items}
      listHeader={header}
      listItem={ItemOption}
      dropDownTrigger={DropDownTrigger}
      {...rest}
    />
  );
};
