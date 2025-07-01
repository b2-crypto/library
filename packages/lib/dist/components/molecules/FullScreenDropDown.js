import React from 'react';
import { useTheme } from '@shopify/restyle';
import { DashedBox, Text, View, DropDown as DropDownBase, } from '../atoms';
import { ArrowUnionIcon } from '../../assets/icons/ArrowUnionIcon';
const ItemOption = ({ item }) => (<View flexDirection="row" borderTopColor="border3" alignItems="center" borderTopWidth={1} paddingVertical="s" paddingHorizontal="l" mr="m">
    <View flexDirection="row" gap="s">
      {item.icon && item.icon()}
      <Text>{item.title}</Text>
    </View>
  </View>);
const DropDownTrigger = ({ isOpen, selectedItem, dropDownLabel, placeholder, labelColor = 'textSecondary', isFullSize = true, hideArrow = false, }) => {
    const theme = useTheme();
    return (<DashedBox flexDirection="row" alignItems="center" justifyContent={isFullSize ? 'space-between' : 'flex-end'} paddingHorizontal="m" paddingVertical="m" backgroundColor={isOpen ? 'background2' : undefined} bottomDash={isFullSize} width="100%">
      <View flexDirection="row" alignItems="center">
        {dropDownLabel && (<Text variant="bodyBold" color={labelColor} mr="xs">
            {dropDownLabel}:
          </Text>)}
        {selectedItem ? (<View flex={1} flexDirection="row" justifyContent={isFullSize ? 'space-between' : 'flex-end'} mr={hideArrow ? 'none' : 'm'}>
            <View flexDirection="row" gap="s">
              {selectedItem.icon && selectedItem.icon()}
              <Text variant="textBold" numberOfLines={1} ellipsizeMode="tail" textAlign={isFullSize ? 'left' : 'right'}>
                {selectedItem.title}
              </Text>
            </View>

            {isFullSize && selectedItem.subtitle && (<Text variant="textBold">{selectedItem.subtitle}</Text>)}
          </View>) : (<Text marginRight="m" variant="bodyBold">
            {placeholder}
          </Text>)}
      </View>
      {!hideArrow && <ArrowUnionIcon color={theme.colors.textPrimary}/>}
    </DashedBox>);
};
const withDropDownTrigger = (placeholder, dropDownLabel, labelColor, isFullSize, hideArrow) => {
    return function DropDownTriggerWrapper({ isOpen, selectedItem, }) {
        return (<DropDownTrigger isOpen={isOpen} selectedItem={selectedItem} dropDownLabel={dropDownLabel} placeholder={placeholder} labelColor={labelColor} isFullSize={isFullSize} hideArrow={hideArrow}/>);
    };
};
export const FullScreenDropDown = ({ value, setValue, items, dropDownLabel, header, placeholder, labelColor = 'textSecondary', isLoading, isFullSize = true, disabled = false, hideArrow = false, ...rest }) => {
    const DropDownTriggerWrapper = withDropDownTrigger(placeholder, dropDownLabel, labelColor, isFullSize, hideArrow);
    return (<DropDownBase value={value} setValue={setValue} items={items} listHeader={header} listItem={ItemOption} dropDownTrigger={DropDownTriggerWrapper} blurBackground isLoading={isLoading} disabled={disabled} {...rest}/>);
};
