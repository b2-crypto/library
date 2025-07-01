import { yupResolver } from '@hookform/resolvers/yup';
import get from 'lodash/get';
import { useForm } from 'react-hook-form';
import { number, object, ref } from 'yup';
import { numberTypeError, positiveNumberError, requiredErrorMessage, } from '../../../helpers/constants';
const schema = object({
    fromAccountId: number().required(requiredErrorMessage),
    toAccountId: number()
        .required(requiredErrorMessage)
        .notOneOf([ref('fromAccountId')], 'formError.selectDifferentAccounts'),
    productId: number().required(requiredErrorMessage),
    amount: number()
        .positive(positiveNumberError)
        .typeError(numberTypeError)
        .when(['$balances', 'productId', 'fromAccountId'], ([balances, productId, accountId], s) => {
        const balance = get(balances, [accountId, productId]);
        if (typeof balance === 'number') {
            return s.max(balance, 'formError.lackOfFunds');
        }
        return s;
    })
        .required(requiredErrorMessage),
});
export function useTransferForm(initialValues, context) {
    return useForm({
        defaultValues: { amount: '', ...initialValues },
        mode: 'onChange',
        context,
        // @ts-ignore
        resolver: yupResolver(schema),
    });
}
