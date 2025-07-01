import React from 'react';

import { DepositExternalFormBody } from './DepositExternalFormBody';

type Props = Pick<
  React.ComponentProps<typeof DepositExternalFormBody>,
  'asset'
>;

export const DepositExternalFormWidget = (props: Props) => {
  return <DepositExternalFormBody {...props} />;
};
