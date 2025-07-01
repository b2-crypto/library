import { Decorator } from '@storybook/react';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import { useTransferForm } from '@apex-rn/library/features/Transactions';

export const transferFormDecorator: Decorator = (Story, { parameters }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useTransferForm(parameters.transferForm?.initialValues, {
    balances: parameters.transferForm?.balances || [],
  });
  return (
    <FormProvider {...form}>
      <Story />
    </FormProvider>
  );
};
