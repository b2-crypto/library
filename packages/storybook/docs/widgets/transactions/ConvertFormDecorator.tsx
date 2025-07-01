import { DecoratorFn } from '@storybook/react';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import { useConvertForm } from '@apex-rn/library/features/Transactions';

export const convertFormDecorator: DecoratorFn = (Story, { parameters }) => {
  const form = useConvertForm(parameters.convertForm?.initialValues);
  return (
    <FormProvider {...form}>
      {' '}
      <Story />
    </FormProvider>
  );
};
