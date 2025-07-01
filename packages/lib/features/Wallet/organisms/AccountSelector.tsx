import React, { useMemo, useRef } from 'react';
import { useTheme } from '@shopify/restyle';

import { FullScreenDropDown } from '../../../components/molecules';
import { useUserCurrentAccount, useUserAccounts } from '../../../hooks';
import { useAccountSummary } from '../../Margin/hooks/useAccountSummary';
import { translate } from '../../../helpers/i18n';
import { formatUSD } from '../../../helpers';
import { WalletIcon } from '../../../assets/icons';
import { Theme } from '../../../theme';
import {
  AccountPositionSummaryResponse,
  MarginAccountInfoResponse,
} from '../../../types';

interface AccountSelectorProps {
  isFullSize?: boolean;
}

export const AccountSelector = ({
  isFullSize = true,
}: AccountSelectorProps) => {
  const { colors } = useTheme<Theme>();
  const { data: accounts, isLoading } = useUserAccounts();
  const { currentAccount, isMarginAccount, onChangeCurrentAccount } =
    useUserCurrentAccount();
  const {
    data: summary,
    isFetching: isFetchingSummary,
    isLoading: isLoadingSummary,
  } = useAccountSummary();

  const previousTotalBalanceRef = useRef<number>(0);

  const totalBalance = useMemo(() => {
    if (isLoadingSummary || isFetchingSummary || !summary) {
      return previousTotalBalanceRef.current;
    }

    const newBalance = isMarginAccount
      ? (summary as MarginAccountInfoResponse).MarginBalance ?? 0
      : (summary as AccountPositionSummaryResponse).TotalBalanceNotional ?? 0;

    previousTotalBalanceRef.current = newBalance;

    return newBalance;
  }, [summary, isFetchingSummary, isMarginAccount, isLoadingSummary]);

  const dropdownItems = useMemo(() => {
    if (!accounts?.length) {
      return [];
    }

    return accounts.map(({ AccountId, AccountName }) => ({
      title: `${AccountName}`,
      value: AccountId,
      subtitle: formatUSD(totalBalance || 0),
      hide: AccountId === currentAccount?.AccountId,
      icon: () => <WalletIcon fill={colors.textPrimary} />,
    }));
  }, [accounts, currentAccount?.AccountId, colors.textPrimary, totalBalance]);

  const disabledDropDown = useMemo(
    () => (accounts?.length ?? 0) <= 1,
    [accounts],
  );

  const handleChangeAccount = (accountId: number) => {
    const acc = accounts?.find(
      ac => Number(accountId) === Number(ac.AccountId),
    );

    if (acc) {
      onChangeCurrentAccount(acc);
    }
  };

  return (
    <FullScreenDropDown
      value={currentAccount?.AccountId}
      setValue={handleChangeAccount}
      items={dropdownItems}
      placeholder={translate('selectAccount')}
      isLoading={isLoading}
      accessibilityLabel="Account dropdown"
      isFullSize={isFullSize}
      disabled={disabledDropDown}
      hideArrow={disabledDropDown}
    />
  );
};
