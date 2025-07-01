import { useForm } from 'react-hook-form';
import { mixed, number, object, string, addMethod } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { DEPOSIT_TYPE, DepositType, DepositFormValues } from '../types';
import {
  emailError,
  numberTypeError,
  positiveNumberError,
  requiredErrorMessage,
} from '../../../helpers/constants';

addMethod(string, 'email', function validateEmail(message: string) {
  return this.matches(/^\S+@\S+\.\S+$/, {
    message,
    name: 'email',
    excludeEmptyString: true,
  });
});

const schema = object({
  productId: number().required(requiredErrorMessage),
  type: mixed<DepositType>()
    .oneOf(DEPOSIT_TYPE.slice())
    .required(requiredErrorMessage)
    .default('external'),
  amount: number()
    .positive(positiveNumberError)
    .typeError(numberTypeError)
    .required(requiredErrorMessage),
  account: string().when('type', {
    is: 'external',
    then: s => s.required(requiredErrorMessage),
  }),
  routingNumber: string().when('type', {
    is: 'external',
    then: s => s.required(requiredErrorMessage),
  }),
  emailAddress: string()
    .email(emailError)
    .when('type', {
      is: 'request',
      then: s => s.required(requiredErrorMessage),
    })
    .when('$userEmail', ([userEmail], s) =>
      userEmail
        ? s.notOneOf(
            [userEmail as unknown as string],
            'formError.notPersonalEmail',
          )
        : s,
    ),

  note: string().default(''),
});

export function useDepositForm(
  initialValues: Partial<DepositFormValues>,
  context: {
    amount: string;
    account?: string;
    routingNumber?: string;
    userEmail?: string;
    note?: string;
  },
) {
  return useForm<DepositFormValues>({
    defaultValues: {
      type: 'external',
      ...initialValues,
    },
    mode: 'onChange',
    context,
    // @ts-ignore
    resolver: yupResolver(schema),
  });
}
