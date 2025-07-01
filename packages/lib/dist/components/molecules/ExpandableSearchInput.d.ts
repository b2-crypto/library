import React from 'react';
import { InputProps } from '../atoms';
type SearchInputProps = InputProps & {
  isExpanded?: boolean;
  onExpand?: () => void;
  onCollapse?: () => void;
};
export declare const ExpandableSearchInput: (
  props: SearchInputProps,
) => React.JSX.Element;
export {};
