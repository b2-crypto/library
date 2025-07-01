import { Decorator } from '@storybook/react';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import { useOrderForm } from '@apex-rn/library/features/Transactions';

export const orderFormDecorator: Decorator = (Story, { parameters }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useOrderForm(
    { accountId: 1, ...parameters.orderForm?.initialValues } || { op: 'buy' },
    { balances: parameters.orderForm?.balances ?? { '1': {} } },
  );
  return (
    <FormProvider {...form}>
      <Story />
    </FormProvider>
  );
};
