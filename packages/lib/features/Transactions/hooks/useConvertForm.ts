import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { number, object } from 'yup';

import {
  numberTypeError,
  positiveNumberError,
  requiredErrorMessage,
} from '../../../helpers/constants';
import { ConvertFormValues } from '../types';

const schema = object({
  from: object({
    productId: number().required(requiredErrorMessage),
    amount: number()
      .positive(positiveNumberError)
      .typeError(numberTypeError)
      .required(requiredErrorMessage)
      .when(['$balances', 'productId'], ([balances, productId], s) => {
        if (
          typeof balances === 'object' &&
          balances !== null &&
          productId &&
          productId in balances
        ) {
          return s.max(balances[productId], 'formError.lackOfFunds');
        }
        return s;
      }),
  }),
  to: object({
    productId: number().required(requiredErrorMessage),
    amount: number()
      .positive(positiveNumberError)
      .typeError(numberTypeError)
      .required(requiredErrorMessage),
  }),
});

export function useConvertForm(
  initialValues?: Partial<ConvertFormValues> & { accountId: number },
  context?: { balances: Record<number, number> },
) {
  return useForm<ConvertFormValues>({
    defaultValues: initialValues,
    mode: 'onChange',
    // @ts-ignore
    resolver: yupResolver(schema),
    context,
  });
}
