import React from 'react';
type Props<T extends string> = {
  /**
   * tab names (not titles). Title will be a translation of `activity.${name}`.
   */
  tabs: readonly T[];
  renderTab: (tabName: T) => JSX.Element;
};
export declare const ActivityTabs: <T extends string>({
  tabs,
  renderTab,
}: Props<T>) => React.JSX.Element;
export {};
