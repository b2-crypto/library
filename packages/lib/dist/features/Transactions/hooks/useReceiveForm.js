import { useForm } from 'react-hook-form';
import { object, number, string, mixed } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailError, numberTypeError, requiredErrorMessage, } from '../../../helpers/constants';
import { RECEIVE_TYPE } from '../types';
const schema = object({
    productId: number().required(requiredErrorMessage),
    type: mixed()
        .oneOf(RECEIVE_TYPE.slice())
        .required(requiredErrorMessage)
        .default('deposit'),
    emailAddress: string()
        .email(emailError)
        .when('type', {
        is: 'transfer',
        then: s => s.required(requiredErrorMessage),
    })
        .when('$userEmail', ([userEmail], s) => userEmail
        ? s.notOneOf([userEmail], 'formError.notPersonalEmail')
        : s),
    amount: number()
        .positive()
        .typeError(numberTypeError)
        .when('type', {
        is: 'transfer',
        then: s => s.required(requiredErrorMessage),
    }),
    note: string().default(''),
});
export function useReceiveForm(initialValues, userEmail) {
    return useForm({
        defaultValues: { type: 'deposit', ...initialValues },
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
        context: { userEmail },
    });
}
