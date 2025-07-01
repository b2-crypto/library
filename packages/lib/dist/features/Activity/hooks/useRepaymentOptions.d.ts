import { RepaymentAssetOption } from '../../../services/marginApi';
export declare const useRepaymentOptions: (
  AccountId: number,
  PositionId: number,
  borrowedProductId: number,
) => {
  options: RepaymentAssetOption[];
  selectedIds: number[];
  selectedItems: RepaymentAssetOption[];
  toggleSelection: (id: number) => void;
  updateOrder: (newOrder: RepaymentAssetOption[]) => void;
  isLoading: boolean;
  error:
    | import('@reduxjs/toolkit/query').FetchBaseQueryError
    | import('@reduxjs/toolkit').SerializedError
    | undefined;
};
