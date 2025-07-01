import React from 'react';
import { ApexTrade } from '../../../helpers/apiTransformers';
import { OrderBookRowCellProps } from '../molecules';
type PairTabsProps = {
  orderBook: OrderBookRowCellProps[][];
  spread: string;
  trades?: ApexTrade[];
};
export declare const PairTabsTables: ({
  orderBook,
  spread,
  trades,
}: PairTabsProps) => React.JSX.Element;
interface PairTabsTablesWidgetProps {
  instrumentId: number;
  skipQuery?: boolean;
}
export declare const PairTabsTablesWidget: React.MemoExoticComponent<
  ({ instrumentId, skipQuery }: PairTabsTablesWidgetProps) => React.JSX.Element
>;
export {};
