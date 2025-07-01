import { skipToken } from '@reduxjs/toolkit/dist/query';

import { useGetAccountPositionSummaryQuery } from '../../../services';
import { useUserCurrentAccount } from '../../../hooks';
import { MARGIN_REFRESH_INTERVAL } from '../../../helpers';
import { useMarginAccountInfo } from './useMarginAccountInfo';

export function useAccountSummary() {
  const { currentAccount, isMarginAccount } = useUserCurrentAccount();

  const marginResult = useMarginAccountInfo();

  const spotResult = useGetAccountPositionSummaryQuery(
    !isMarginAccount && currentAccount
      ? { accountId: currentAccount.AccountId }
      : skipToken,
    { pollingInterval: MARGIN_REFRESH_INTERVAL },
  );

  return isMarginAccount ? marginResult : spotResult;
}
