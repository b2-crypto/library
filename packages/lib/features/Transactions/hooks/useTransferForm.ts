import { yupResolver } from '@hookform/resolvers/yup';
import get from 'lodash/get';
import { useForm } from 'react-hook-form';
import { number, object, ref } from 'yup';

import {
  numberTypeError,
  positiveNumberError,
  requiredErrorMessage,
} from '../../../helpers/constants';
import { TransferFormValues } from '../types';

const schema = object({
  fromAccountId: number().required(requiredErrorMessage),
  toAccountId: number()
    .required(requiredErrorMessage)
    .notOneOf([ref('fromAccountId')], 'formError.selectDifferentAccounts'),
  productId: number().required(requiredErrorMessage),
  amount: number()
    .positive(positiveNumberError)
    .typeError(numberTypeError)
    .when(
      ['$balances', 'productId', 'fromAccountId'],
      ([balances, productId, accountId], s) => {
        const balance = get(balances, [accountId, productId]);
        if (typeof balance === 'number') {
          return s.max(balance, 'formError.lackOfFunds');
        }
        return s;
      },
    )
    .required(requiredErrorMessage),
});

export function useTransferForm(
  initialValues: Partial<TransferFormValues>,
  context: {
    /** two dimentional object: first key is accountId, and the second is productId, value is available balance */
    balances: Record<number, Record<number, number>>;
  },
) {
  return useForm<TransferFormValues>({
    defaultValues: { amount: '', ...initialValues },
    mode: 'onChange',
    context,
    // @ts-ignore
    resolver: yupResolver(schema),
  });
}
