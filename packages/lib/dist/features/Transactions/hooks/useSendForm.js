import { useForm } from 'react-hook-form';
import { mixed, number, object, string, lazy, addMethod } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import mapValues from 'lodash/mapValues';
import { SEND_TYPE } from '../types';
import { emailError, numberTypeError, positiveNumberError, requiredErrorMessage, } from '../../../helpers/constants';
import { validateCryptoAddress } from '../../../helpers/cryptoAddressValidator';
import { translate } from '../../../helpers/i18n';
addMethod(string, 'email', function validateEmail(message) {
    return this.matches(/^\S+@\S+\.\S+$/, {
        message,
        name: 'email',
        excludeEmptyString: true,
    });
});
const schema = object({
    productId: number().required(requiredErrorMessage),
    type: mixed()
        .oneOf(SEND_TYPE.slice())
        .required(requiredErrorMessage)
        .default('withdraw'),
    amount: number()
        .positive(positiveNumberError)
        .typeError(numberTypeError)
        .when(['$balances', 'productId'], ([balances, productId], s) => {
        if (typeof balances === 'object' &&
            balances !== null &&
            productId &&
            productId in balances) {
            return s.max(balances[productId], 'formError.lackOfFunds');
        }
        return s;
    })
        .required(requiredErrorMessage),
    providerId: number().when('type', {
        is: 'withdraw',
        then: s => s.required(requiredErrorMessage),
    }),
    templateType: string().when('type', {
        is: 'withdraw',
        then: s => s.required(requiredErrorMessage),
    }),
    emailAddress: string()
        .email(emailError)
        .when('type', {
        is: 'transfer',
        then: s => s.required(requiredErrorMessage),
    })
        .when('$userEmail', ([userEmail], s) => userEmail
        ? s.notOneOf([userEmail], 'formError.notPersonalEmail')
        : s),
    templateForm: mixed().when(['type', 'productId', '$productSymbols'], ([type, productId, symbols], s) => {
        if (type !== 'withdraw') {
            return s;
        }
        return lazy(obj => {
            if (typeof obj !== 'object' || obj === null) {
                return s;
            }
            const templateSchema = mapValues(obj, (_, key) => {
                if (key === 'ExternalAddress') {
                    return string()
                        .ensure()
                        .required(requiredErrorMessage)
                        .test('validate-crypto', () => translate('formError.invalidCryptoAddress', {
                        symbol: symbols[productId],
                    }), value => !value || validateCryptoAddress(value, symbols[productId]));
                }
                const optionalTemplateFields = [
                    'DestinationTagNumber',
                    'Comment',
                    'TemplateType',
                ];
                return optionalTemplateFields.includes(key)
                    ? string()
                    : string().ensure().required(requiredErrorMessage);
            });
            return object(templateSchema);
        });
    }),
    note: string().default(''),
});
export function useSendForm(initialValues, context) {
    return useForm({
        defaultValues: {
            type: 'withdraw',
            ...initialValues,
        },
        mode: 'onChange',
        context,
        // @ts-ignore
        resolver: yupResolver(schema),
    });
}
