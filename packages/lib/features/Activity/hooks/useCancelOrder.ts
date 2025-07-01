import { useCallback } from 'react';

import { useUserCurrentAccount } from '../../../hooks';
import { useCancelOrderMutation } from '../../../services/apexApi';

export function useCancelOrder() {
  const { currentAccount } = useUserCurrentAccount();

  const [mutation, queryState] = useCancelOrderMutation();

  const callback = useCallback(
    (orderId: number) =>
      mutation({ orderId, accountId: currentAccount!.AccountId }),
    [currentAccount?.AccountId],
  );

  return [callback, queryState] as const;
}
