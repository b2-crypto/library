/// <reference types="react" />
export declare const ACTIVITY_DEFAULT_TABS: {
  readonly openOrders: ({
    depth,
    instrumentId,
    onActivityPress,
    ...listProps
  }: import('./types').ActivityTabProps &
    import('./types').ActivityInstrumentHook) => import('react').JSX.Element;
  readonly filledOrders: ({
    depth,
    instrumentId,
    onActivityPress,
    ...listProps
  }: import('./types').ActivityTabProps &
    import('./types').ActivityInstrumentHook) => import('react').JSX.Element;
  readonly cancelledOrders: ({
    depth,
    instrumentId,
    onActivityPress,
    ...listProps
  }: import('./types').ActivityTabProps &
    import('./types').ActivityInstrumentHook) => import('react').JSX.Element;
  readonly depositStatus: ({
    depth,
    productId,
    onActivityPress,
    ...listProps
  }: import('./types').ActivityTabProps &
    import('./types').ActivityProductHook) => import('react').JSX.Element;
  readonly withdrawal: ({
    depth,
    productId,
    onActivityPress,
    ...listProps
  }: import('./types').ActivityTabProps &
    import('./types').ActivityProductHook) => import('react').JSX.Element;
};
export declare const MARGIN_ACTIVITY_TABS: {
  readonly openOrders: ({
    depth,
    instrumentId,
    onActivityPress,
    ...listProps
  }: import('./types').ActivityTabProps &
    import('./types').ActivityInstrumentHook) => import('react').JSX.Element;
  readonly filledOrders: ({
    depth,
    instrumentId,
    onActivityPress,
    ...listProps
  }: import('./types').ActivityTabProps &
    import('./types').ActivityInstrumentHook) => import('react').JSX.Element;
  readonly cancelledOrders: ({
    depth,
    instrumentId,
    onActivityPress,
    ...listProps
  }: import('./types').ActivityTabProps &
    import('./types').ActivityInstrumentHook) => import('react').JSX.Element;
  readonly openPositions: ({
    depth,
    instrumentId,
    onActivityPress,
    ...listProps
  }: import('./types').ActivityTabProps &
    import('./types').ActivityInstrumentHook) => import('react').JSX.Element;
  readonly closedPositions: ({
    depth,
    instrumentId,
    onActivityPress,
    ...listProps
  }: import('./types').ActivityTabProps &
    import('./types').ActivityInstrumentHook) => import('react').JSX.Element;
};
