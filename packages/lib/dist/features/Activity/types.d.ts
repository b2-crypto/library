import { ContentStyle } from '@shopify/flash-list';
import type { ComponentType } from 'react';
import { MarginPosition } from '../../services/marginApi';
import type {
  AccountTransactionActivity,
  OrderActivity,
  WalletActivity,
} from '../../types/apiResponses';
export type MarginPositionItem = MarginPosition & {
  Status: 'Open' | 'Closed';
  PositionProductSymbol: string;
  PositionProductDecimalPlaces: number;
  BorrowedProductSymbol: string;
  BorrowedProductDecimalPlaces: number;
  NotionalProductSymbol: string;
  NotionalProductDecimalPlaces: number;
  InstrumentSymbol: string;
  Product1Symbol: string;
  Product2Symbol: string;
  PriceFraction: number;
  QuantityFraction: number;
  CostBasis?: number;
  PositionValue?: number;
  RemainingLiability?: number;
};
export type ActivityDetails =
  | {
      type: 'order';
      item: OrderActivity;
    }
  | {
      type: 'wallet';
      item: WalletActivity;
    }
  | {
      type: 'accountTransaction';
      item: AccountTransactionActivity;
    }
  | {
      type: 'position';
      item: MarginPositionItem;
    };
export declare const ACTIVITY_TABS: readonly [
  'openOrders',
  'filledOrders',
  'cancelledOrders',
  'depositStatus',
  'withdrawal',
  'openPositions',
  'closedPositions',
];
export type ActivityTab = (typeof ACTIVITY_TABS)[number];
export type ActivityListProps<T> = {
  /**
   * List variant:
   *  - `list` uses FlatList component
   *  - `map` just renders it with `data.map` — should be used for small lists without the "load more" feature)
   */
  listVariant?: 'list' | 'map';
  /**
   * List item variant:
   *  - `card` renders each item in the `Card` component
   *  - `plain` renders items separated by simple dashed line)
   */
  itemVariant?: 'card' | 'plain';
  /** List of activities */
  data: Array<T>;
  /** Loading state */
  loading: boolean;
  /** Refetching state */
  refetching?: boolean;
  /** Whether there are more items to load */
  hasMore?: boolean;
  /** Style of the list content */
  listContentStyle?: ContentStyle;
  /**  List item component */
  ActivityItemView: ComponentType<{
    item: T;
    onPress?: (item: T) => void;
    index?: number;
  }> & {
    /**
     * Average or median size for elements in the list.
     * Doesn't have to be very accurate but a good estimate can improve performance.
     */
    estimatedItemSize?: number;
  };
  /**  Callback when the user presses on an item */
  onPress?: (item: T) => void;
  /** Callback when the user reaches the end of the list */
  loadMore: () => void;
  /** Callback when the user pulls to refresh */
  refetch: () => void;
  /** Used to extract a unique key for a given item at the specified index. */
  keyExtractor?: ((item: T, index: number) => string) | undefined;
};
export type ActivityGeneralHook = {
  /** How many items load per the page */
  depth?: number;
  /** How many items load per the page */
  productId?: number;
  /** How many items load per the page */
  instrumentId?: number;
};
export type ActivityProductHook = {
  /** How many items load per the page */
  depth?: number;
  /** How many items load per the page */
  productId?: number;
};
export type ActivityInstrumentHook = {
  /** How many items load per the page */
  depth?: number;
  /** How many items load per the page */
  instrumentId?: number;
};
export type ActivityTabProps = {
  /**
   * List variant:
   *  - `list` uses FlatList component
   *  - `map` just renders it with `data.map` — should be used for small lists without the "load more" feature)
   */
  listVariant?: 'list' | 'map';
  /**
   * List item variant:
   *  - `card` renders each item in the `Card` component
   *  - `plain` renders items separated by simple dashed line)
   */
  itemVariant?: 'card' | 'plain';
  /** Style props for the list component */
  listContentStyle?: ContentStyle;
  /** Press callback for the item */
  onActivityPress: (props: ActivityDetails) => void;
};
