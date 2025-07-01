import { RepaymentAssetOption } from '../../../services/marginApi';
import { MarginPositionItem } from '../types';
export declare const useMarginPositionActions: (
  item: MarginPositionItem,
  onSuccess?: () => void,
) => {
  onClose: (selectedItems?: RepaymentAssetOption[]) => Promise<void>;
  onCancel: () => Promise<void>;
  onRepay: () => Promise<void>;
  isLoading: boolean;
  error:
    | import('@reduxjs/toolkit/query').FetchBaseQueryError
    | import('@reduxjs/toolkit').SerializedError
    | undefined;
  isProcessed: boolean;
  isLoadingCancel: boolean;
  errorCancel:
    | import('@reduxjs/toolkit/query').FetchBaseQueryError
    | import('@reduxjs/toolkit').SerializedError
    | undefined;
};
