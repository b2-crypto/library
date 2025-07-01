import { BoxProps } from '@shopify/restyle';
import React from 'react';
import { FieldPath, FieldValues, UseControllerProps } from 'react-hook-form';
import { Theme } from '../../theme';
import { DropdownListItemProps } from '../atoms';
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
export declare const ItemOption: <V>({
  item,
}: {
  item: DropdownListItemProps<V>;
}) => React.JSX.Element;
export declare const DropDownTrigger: <V>({
  size,
  isOpen,
  selectedItem,
  placeholder,
  hasError,
  disabled,
  textVariant,
}: {
  size?: 'default' | 'small' | 'big' | undefined;
  isOpen: boolean;
  selectedItem?: DropdownListItemProps<V> | undefined;
  placeholder?: string | undefined;
  hasError?: boolean | undefined;
  disabled?: boolean | undefined;
  textVariant?: 'default' | 'bold' | undefined;
}) => React.JSX.Element;
export declare const FormDropdown: <
  V,
  T extends FieldValues,
  TName extends FieldPath<T>,
>({
  size,
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
}: FormDropdown<V, T, TName>) => React.JSX.Element;
