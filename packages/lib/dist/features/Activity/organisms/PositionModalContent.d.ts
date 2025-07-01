/// <reference types="react" />
import { RepaymentAssetOption } from '../../../services';
import { MarginPositionItem } from '../types';
type Props = {
  type: 'close' | 'cancel' | 'repay';
  item: MarginPositionItem;
};
export declare const PositionModalContent: ({
  type,
  item,
  onSelectedItemsReady,
}: Props & {
  onSelectedItemsReady?: ((items: RepaymentAssetOption[]) => void) | undefined;
}) => import('react').JSX.Element | null;
export {};
