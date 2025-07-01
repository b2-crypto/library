import { DecoratorFn } from '@storybook/react';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import { useReceiveForm } from '@apex-rn/library/features/Transactions';

export const receiveFormDecorator: DecoratorFn = (Story, { parameters }) => {
  const form = useReceiveForm(
    parameters.receiveForm?.initialValues || { type: 'deposit' },
  );
  return (
    <FormProvider {...form}>
      {' '}
      <Story />
    </FormProvider>
  );
};
