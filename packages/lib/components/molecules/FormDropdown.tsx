import { BoxProps, useTheme } from '@shopify/restyle';
import React from 'react';
import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

import { ArrowUnionIcon } from '../../assets/icons/ArrowUnionIcon';
import { testID } from '../../helpers/testId';
import { Theme } from '../../theme';
import { Box, DropDown, DropdownListItemProps, FormItem, Text } from '../atoms';

export type FormDropdown<
  ValueType,
  T extends FieldValues,
  TName extends FieldPath<T>,
> = UseControllerProps<T, TName> & {
  size?: 'default' | 'small' | 'big';
  label?: string;
  formItemProps?: BoxProps<Theme>;
  items: DropdownListItemProps<ValueType>[];
  placeholder?: string;
  disabled?: boolean;
  width?: number;
  isLoading?: boolean;
};

export const ItemOption = <V,>({
  item,
}: {
  item: DropdownListItemProps<V>;
}) => (
  <Box
    flexDirection="row"
    borderBottomColor="border3"
    alignItems="center"
    overflow="hidden"
    borderBottomWidth={1}
    padding="s">
    {!!item.icon && item.icon()}
    <Text
      color={item.disabled ? 'textSecondary' : 'textPrimary'}
      ml={item.icon ? 'xs' : undefined}
      numberOfLines={1}>
      {item.title}
    </Text>
  </Box>
);

export const DropDownTrigger = <V,>({
  size,
  isOpen,
  selectedItem,
  placeholder,
  hasError,
  disabled,
  textVariant = 'default',
}: {
  size?: 'default' | 'small' | 'big';
  isOpen: boolean;
  selectedItem?: DropdownListItemProps<V>;
  placeholder?: string;
  hasError?: boolean;
  disabled?: boolean;
  textVariant?: 'default' | 'bold';
}) => {
  const { colors } = useTheme<Theme>();
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      borderWidth={1}
      borderRadius={6}
      padding={size === 'big' ? 'sm' : 's'}
      minHeight={44}
      bg={disabled ? undefined : 'formBackground'}
      overflow="hidden"
      borderColor={
        hasError ? 'error' : isOpen ? 'brandDisabled' : 'formBorder'
      }>
      <Box flexDirection="row" flex={1} alignItems="center">
        {selectedItem ? (
          <>
            {selectedItem.icon && selectedItem.icon()}
            <Text
              variant={textVariant === 'bold' ? 'textBold' : undefined}
              numberOfLines={1}
              ml={selectedItem?.icon ? 'xs' : undefined}>
              {selectedItem.title}
            </Text>
          </>
        ) : (
          placeholder && (
            <Text marginRight="m" color="textSecondary">
              {placeholder}
            </Text>
          )
        )}
      </Box>
      <ArrowUnionIcon color={colors.textPrimary} />
    </Box>
  );
};

export const FormDropdown = <
  V,
  T extends FieldValues,
  TName extends FieldPath<T>,
>({
  size = 'default',
  items,
  placeholder,
  disabled,
  control,
  name,
  rules,
  shouldUnregister,
  defaultValue,
  label,
  formItemProps,
  isLoading,
  ...rest
}: FormDropdown<V, T, TName>) => {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
    shouldUnregister,
    defaultValue,
  });

  return (
    <FormItem
      label={label}
      error={fieldState.error?.message}
      {...formItemProps}>
      <DropDown
        value={field.value}
        setValue={field.onChange}
        items={items}
        listItem={ItemOption}
        isLoading={isLoading}
        dropDownTrigger={triggerProps => (
          <DropDownTrigger
            {...triggerProps}
            size={size}
            placeholder={placeholder}
            hasError={!!fieldState.error}
            disabled={disabled}
          />
        )}
        {...testID(name)}
        {...rest}
      />
    </FormItem>
  );
};
