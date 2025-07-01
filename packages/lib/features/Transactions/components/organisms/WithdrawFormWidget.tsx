import React from 'react';
import { useFormContext } from 'react-hook-form';
import { SendWithdrawFormBody } from './SendWithdrawFormBody';
import { useWithrawTemplates } from '../../hooks';

type Props = Pick<
  React.ComponentProps<typeof SendWithdrawFormBody>,
  'asset' | 'onQrClick' | 'balance'
>;

export const WithdrawFormWidget = (props: Props) => {
  const { watch } = useFormContext<{ productId: number; providerId: number }>();
  const [productId, providerId] = watch(['productId', 'providerId']);
  const templateProps = useWithrawTemplates(productId, providerId);

  return <SendWithdrawFormBody {...props} {...templateProps} />;
};
