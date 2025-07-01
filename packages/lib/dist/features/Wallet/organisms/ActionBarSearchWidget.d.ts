import React from 'react';
interface ActionBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  isSearchExpanded: boolean;
  onSearchPress: () => void;
  onSearchClose: () => void;
  hideSmallAmounts: boolean;
  onToggleHideSmallAmounts: (checked: boolean) => void;
  onTransfer: () => void;
  isMarginAvailable: boolean;
}
export declare const ActionBarSearchWidget: ({
  searchValue,
  setSearchValue,
  isSearchExpanded,
  onSearchPress,
  onSearchClose,
  hideSmallAmounts,
  onToggleHideSmallAmounts,
  onTransfer,
  isMarginAvailable,
}: ActionBarProps) => React.JSX.Element;
export {};
