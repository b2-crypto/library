import React from 'react';
import { TouchableOpacity } from './TouchableOpacity';
export type DropdownListItemProps<T> = {
  title: string;
  value: T;
  icon?: () => React.ReactNode;
  disabled?: boolean;
  subtitle?: string | undefined;
  hide?: boolean;
  disabledLabel?: string;
};
export type DropDownProps<T> = Omit<
  React.ComponentProps<typeof TouchableOpacity>,
  'onPress' | 'width' | 'minWidth'
> & {
  value?: T;
  items: DropdownListItemProps<T>[];
  width?: number;
  listHeader?: React.ReactNode;
  listItem: React.ComponentType<{
    item: DropdownListItemProps<T>;
  }>;
  dropDownTrigger: React.ComponentType<{
    isOpen: boolean;
    selectedItem?: DropdownListItemProps<T>;
  }>;
  blurBackground?: boolean;
  isLoading?: boolean;
  setValue: (value: T) => void;
  onClose?: () => void;
};
export declare const DropDown: <T>({
  value,
  items,
  listHeader,
  listItem: ListItem,
  dropDownTrigger: DropDownTrigger,
  blurBackground,
  width,
  isLoading,
  setValue,
  onClose,
  disabled,
  ...rest
}: DropDownProps<T>) => React.JSX.Element;
