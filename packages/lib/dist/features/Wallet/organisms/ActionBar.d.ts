import * as React from 'react';
import { BoxProps } from '@shopify/restyle';
import { Theme } from '../../../theme';
interface ActionBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  isSearchExpanded: boolean;
  onSearchPress: () => void;
  onSearchClose: () => void;
  hideSmallAmounts: boolean;
  onToggleHideSmallAmounts: (checked: boolean) => void;
  onTransferPress: () => void;
  containerProps?: BoxProps<Theme>;
  hideTransferButton?: boolean;
}
export declare const ActionBar: ({
  searchValue,
  setSearchValue,
  isSearchExpanded,
  onSearchPress,
  onSearchClose,
  hideSmallAmounts,
  onToggleHideSmallAmounts,
  onTransferPress,
  containerProps,
  hideTransferButton,
}: ActionBarProps) => React.JSX.Element;
export {};
