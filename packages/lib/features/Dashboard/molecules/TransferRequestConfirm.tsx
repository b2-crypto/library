import { useTheme } from '@shopify/restyle';
import React from 'react';

import { Email } from '../../../assets/icons/Email';
import { Button } from '../../../components/molecules';
import { translate } from '../../../helpers/i18n';
import { RequestModel } from '../../../types/commonTypes';
import { ConfirmView } from '../../Transactions/components/organisms';
import { useTransferRequestConfirmValues } from '../hooks';

type Props = {
  type?: string;
  onClose: () => void;
  onSubmit: () => void;
  submitting: boolean;
  request: RequestModel;
};

export const TransferRequestConfirm = ({
  type,
  request,
  onClose,
  onSubmit,
  submitting,
}: Props) => {
  const data = useTransferRequestConfirmValues(request);
  const { colors } = useTheme();
  return (
    <ConfirmView
      symbol={request.symbol}
      icon={
        <Email
          color={type !== 'confirm' ? colors.reject : colors.textSecondary}
        />
      }
      title={translate(
        type === 'confirm'
          ? 'requests.confirmRequest'
          : 'requests.declineRequest',
      )}
      titleColor={type === 'confirm' ? 'textSecondary' : 'reject'}
      subTitle={request.symbol}
      data={data}
      onClose={onClose}
      button={
        <Button
          onPress={onSubmit}
          loading={submitting}
          size="big"
          variant={type === 'confirm' ? 'primary' : 'sell'}
          label={translate(type === 'confirm' ? 'confirm' : 'decline')}
        />
      }
    />
  );
};
