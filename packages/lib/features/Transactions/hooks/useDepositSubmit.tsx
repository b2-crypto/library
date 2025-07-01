import { useCallback } from 'react';
import noop from 'lodash/noop';

import {
  useCreateDepositTicketMutation,
  useCreateWithdrawTicketMutation,
} from '../../../services/apexApi';
import { DepositFormValues } from '../types';
import { useUserInfo } from '../../../hooks';

export function useDepositSubmit(typeTransaction = 'deposit') {
  const { data: userInfo } = useUserInfo();
  const [
    createWithdraw,
    {
      isLoading: withdrawLoading,
      error: withdrawError,
      isUninitialized: isWithdrawUninitialized,
      reset: resetWithdraw,
    },
  ] = useCreateWithdrawTicketMutation();
  const [
    deposit,
    {
      isLoading: transferLoading,
      error: transferError,
      isUninitialized: isTransferUninitialized,
      reset: resetTransfer,
    },
  ] = useCreateDepositTicketMutation();

  const send = useCallback(
    async ({
      values,
      assetId,
    }: {
      values: DepositFormValues;
      assetId: number;
    }) => {
      if (!userInfo?.AccountId) {
        return;
      }
      if (typeTransaction === 'deposit') {
        return await deposit({
          AccountId: userInfo.AccountId,
          ProductId: values.productId,
          AssetId: assetId,
          RequestUser: userInfo.UserId,
          DepositInfo: { ...values },
          Amount: parseFloat(values.amount),
          Status: 'New',
        }).unwrap();
      } else {
        return await createWithdraw({
          AccountId: userInfo.AccountId,
          ProductId: values.productId,
          Amount: parseFloat(values.amount),
          TemplateForm: {},
          TemplateType: '',
        }).unwrap();
      }
    },
    [userInfo, deposit, createWithdraw, typeTransaction],
  );

  return [
    send,
    {
      isLoading: withdrawLoading || transferLoading,
      error: transferError || withdrawError,
      reset: isTransferUninitialized
        ? resetWithdraw
        : isWithdrawUninitialized
        ? resetTransfer
        : noop,
    },
  ] as const;
}
