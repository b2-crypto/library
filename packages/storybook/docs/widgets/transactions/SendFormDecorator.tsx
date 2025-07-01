import { DecoratorFn } from '@storybook/react';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import { useSendForm } from '@apex-rn/library/features/Transactions';

export const sendFormDecorator: DecoratorFn = (Story, { parameters }) => {
  const form = useSendForm(parameters.sendForm?.initialValues);
  return (
    <FormProvider {...form}>
      <Story />
    </FormProvider>
  );
};
