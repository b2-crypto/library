import { DepositStatusTab, FilledOrdersTab, OpenOrdersTab, CancelledOrdersTab, WithdrawStatusTab, OpenMarginPositionsTab, ClosedMarginPositionsTab, } from './templates';
export const ACTIVITY_DEFAULT_TABS = {
    openOrders: OpenOrdersTab,
    filledOrders: FilledOrdersTab,
    cancelledOrders: CancelledOrdersTab,
    depositStatus: DepositStatusTab,
    withdrawal: WithdrawStatusTab,
};
export const MARGIN_ACTIVITY_TABS = {
    openOrders: OpenOrdersTab,
    filledOrders: FilledOrdersTab,
    cancelledOrders: CancelledOrdersTab,
    openPositions: OpenMarginPositionsTab,
    closedPositions: ClosedMarginPositionsTab,
};
