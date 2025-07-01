import React from 'react';
import { TouchableOpacity } from '../atoms';
import { DropdownListItemProps } from '../atoms';
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
export declare const SmallDropDown: <T>({
  value,
  setValue,
  items,
  dropDownLabel,
  header,
  placeholder,
  valueTextColor,
  labelColor,
  ...rest
}: SmallDropDownProps<T>) => React.JSX.Element;
export {};
