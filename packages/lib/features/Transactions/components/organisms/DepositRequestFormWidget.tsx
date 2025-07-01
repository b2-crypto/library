import React from 'react';
import { DepositRequestFormBody } from './DepositRequestFormBody';

type Props = Pick<React.ComponentProps<typeof DepositRequestFormBody>, 'asset'>;

export const DepositRequestFormWidget = (props: Props) => {
  return <DepositRequestFormBody {...props} />;
};
