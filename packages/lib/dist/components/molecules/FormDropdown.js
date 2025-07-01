import { useTheme } from '@shopify/restyle';
import React from 'react';
import { useController, } from 'react-hook-form';
import { ArrowUnionIcon } from '../../assets/icons/ArrowUnionIcon';
import { testID } from '../../helpers/testId';
import { Box, DropDown, FormItem, Text } from '../atoms';
export const ItemOption = ({ item, }) => (<Box flexDirection="row" borderBottomColor="border3" alignItems="center" overflow="hidden" borderBottomWidth={1} padding="s">
    {!!item.icon && item.icon()}
    <Text color={item.disabled ? 'textSecondary' : 'textPrimary'} ml={item.icon ? 'xs' : undefined} numberOfLines={1}>
      {item.title}
    </Text>
  </Box>);
export const DropDownTrigger = ({ size, isOpen, selectedItem, placeholder, hasError, disabled, textVariant = 'default', }) => {
    const { colors } = useTheme();
    return (<Box flexDirection="row" alignItems="center" borderWidth={1} borderRadius={6} padding={size === 'big' ? 'sm' : 's'} minHeight={44} bg={disabled ? undefined : 'formBackground'} overflow="hidden" borderColor={hasError ? 'error' : isOpen ? 'brandDisabled' : 'formBorder'}>
      <Box flexDirection="row" flex={1} alignItems="center">
        {selectedItem ? (<>
            {selectedItem.icon && selectedItem.icon()}
            <Text variant={textVariant === 'bold' ? 'textBold' : undefined} numberOfLines={1} ml={selectedItem?.icon ? 'xs' : undefined}>
              {selectedItem.title}
            </Text>
          </>) : (placeholder && (<Text marginRight="m" color="textSecondary">
              {placeholder}
            </Text>))}
      </Box>
      <ArrowUnionIcon color={colors.textPrimary}/>
    </Box>);
};
export const FormDropdown = ({ size = 'default', items, placeholder, disabled, control, name, rules, shouldUnregister, defaultValue, label, formItemProps, isLoading, ...rest }) => {
    const { field, fieldState } = useController({
        control,
        name,
        rules,
        shouldUnregister,
        defaultValue,
    });
    return (<FormItem label={label} error={fieldState.error?.message} {...formItemProps}>
      <DropDown value={field.value} setValue={field.onChange} items={items} listItem={ItemOption} isLoading={isLoading} dropDownTrigger={triggerProps => (<DropDownTrigger {...triggerProps} size={size} placeholder={placeholder} hasError={!!fieldState.error} disabled={disabled}/>)} {...testID(name)} {...rest}/>
    </FormItem>);
};
