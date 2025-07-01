import React, { useCallback } from 'react';
import { useTheme } from '@shopify/restyle';
import { Text, View } from '../atoms';
import { ArrowUnionIcon } from '../../assets/icons/ArrowUnionIcon';
import { DropDown } from '../atoms';
export const SmallDropDown = ({ value, setValue, items, dropDownLabel, header, placeholder, valueTextColor, labelColor = 'textSecondary', ...rest }) => {
    const { colors } = useTheme();
    const ItemOption = useCallback(({ item }) => (<View flexDirection="row" borderBottomColor="border3" alignItems="center" overflow="hidden" borderBottomWidth={1} padding="s">
        {item.icon && item.icon()}
        <Text variant="textBold" fontWeight="400" numberOfLines={1} ml={item.icon ? 'xs' : undefined}>
          {item.title}
        </Text>
      </View>), []);
    const DropDownTrigger = useCallback(({ isOpen, selectedItem, }) => (<View flexDirection="row" alignItems="center" justifyContent="space-between" borderWidth={1} borderRadius={6} padding="s" minHeight={44} borderColor={isOpen ? 'brandDisabled' : 'border3'}>
        <View flexDirection="row" alignItems="center">
          {dropDownLabel && (<Text variant="bodyBold" color={labelColor} mr="xs">
              {dropDownLabel}:
            </Text>)}
          {selectedItem ? (<>
              {selectedItem.icon && selectedItem.icon()}
              <Text variant="textBold" color={valueTextColor} ml={selectedItem.icon ? 'xs' : undefined}>
                {selectedItem.title}
              </Text>
            </>) : (placeholder && (<Text marginRight="m" variant="bodyBold">
                {placeholder}
              </Text>))}
        </View>
        <ArrowUnionIcon color={colors.textPrimary}/>
      </View>), [dropDownLabel, placeholder, labelColor, valueTextColor, colors]);
    return (<DropDown value={value} setValue={setValue} items={items} listHeader={header} listItem={ItemOption} dropDownTrigger={DropDownTrigger} {...rest}/>);
};
