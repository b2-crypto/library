import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { mixed, number, object } from 'yup';

import {
  ORDER_TYPES,
  OrderFormValues,
  OrderOp,
  OrderType,
  TIF_OPTIONS,
  TifType,
} from '../types';
import {
  numberTypeError,
  positiveNumberError,
  requiredErrorMessage,
} from '../../../helpers/constants';

import { OrderFormValidationContextType } from './useOrderFormValidationContext';

const schema = object({
  accountId: number().required(),
  op: mixed<OrderOp>()
    .oneOf(['buy', 'sell'])
    .required(requiredErrorMessage)
    .default('buy'),
  instrumentId: number().required(requiredErrorMessage),
  type: mixed<OrderType>()
    .oneOf(ORDER_TYPES.slice())
    .required(requiredErrorMessage)
    .default('Market'),
  quantity: number()
    .typeError(numberTypeError)
    .required(requiredErrorMessage)
    .when('op', {
      is: 'buy',
      then: s => s.positive(positiveNumberError),
    })
    .when('$maxAmount', ([maxAmount], s) =>
      maxAmount > 0 ? s.max(maxAmount, 'formError.exceedsMaxAmount') : s,
    ),
  value: number()
    .typeError(numberTypeError)
    .required(requiredErrorMessage)
    .when('op', {
      is: 'sell',
      then: s => s.positive(positiveNumberError),
    }),
  limit: number()
    .typeError(numberTypeError)
    .transform((value, originalValue) =>
      originalValue === '' ? undefined : value,
    )
    .when('type', ([type], s) => {
      if (type === 'Limit' || type === 'StopLimit') {
        return s.required(requiredErrorMessage);
      }
      return s;
    }),
  tif: mixed<TifType>()
    .oneOf(TIF_OPTIONS.slice())
    .default('GTC')
    .when('type', ([type], s) => {
      if (type === 'Limit' || type === 'StopLimit' || type === 'StopMarket') {
        return s.required(requiredErrorMessage);
      }
      return s;
    }),
  stopPrice: number()
    .typeError(numberTypeError)
    .transform((value, originalValue) =>
      originalValue === '' ? undefined : value,
    )
    .when('type', ([type], s) => {
      if (type === 'StopMarket' || type === 'StopLimit') {
        return s.required(requiredErrorMessage);
      }
      return s;
    }),
});

export function useOrderForm(
  initialValues: Partial<OrderFormValues> & { accountId: number },
  context?: OrderFormValidationContextType['value'],
) {
  return useForm<OrderFormValues>({
    defaultValues: {
      op: 'buy',
      type: 'Market',
      tif: 'GTC',
      ...initialValues,
    },
    mode: 'onChange',
    // @ts-ignore
    resolver: yupResolver(schema),
    context,
  });
}
