import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { DropdownListItemProps } from '../atoms';
import { Theme } from '../../theme';
interface FullScreenDropDownProps<T>
  extends Omit<TouchableOpacityProps, 'onPress'> {
  value?: T;
  setValue: (value: T) => void;
  items: DropdownListItemProps<T>[];
  dropDownLabel?: string;
  placeholder: string;
  labelColor?: keyof Theme['colors'];
  header?: React.ReactNode | React.ReactNode[];
  isLoading?: boolean;
  onClose?: () => void;
  isFullSize?: boolean;
  disabled?: boolean;
  hideArrow?: boolean;
}
export declare const FullScreenDropDown: <T>({
  value,
  setValue,
  items,
  dropDownLabel,
  header,
  placeholder,
  labelColor,
  isLoading,
  isFullSize,
  disabled,
  hideArrow,
  ...rest
}: FullScreenDropDownProps<T>) => React.JSX.Element;
export {};
