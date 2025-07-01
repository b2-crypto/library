import { MARGIN_REFRESH_INTERVAL } from '../../../helpers/constants';
import { useGetAllMarginProductConfigsQuery } from '../../../services';

export function useMarginProductConfig() {
  return useGetAllMarginProductConfigsQuery(undefined, {
    pollingInterval: MARGIN_REFRESH_INTERVAL,
  });
}
