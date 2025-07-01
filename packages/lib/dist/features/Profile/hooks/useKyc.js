import { useCallback, useState } from 'react';
import SNSMobileSDK from '@sumsub/react-native-mobilesdk-module';
import { useValidateUserRegistrationMutation } from '../../../services/sumsubApi';
import { i18n, translate } from '../../../helpers/i18n';
import { isApexError } from '../../../types/apiResponses';
const useTokenGeneration = () => {
    const [validateUserRegistration, state] = useValidateUserRegistrationMutation();
    const generateToken = useCallback(async (validationStage) => (await validateUserRegistration({
        requestIdentifier: new Date().getTime(),
        clientInfo: { validationStage, validator: 'sumsub' },
        userInfo: {},
        additionalValidationData: [],
    }).unwrap()).ValidationAnswerData.ProcessorData.accessToken, []);
    return [generateToken, state];
};
const launchSNSMobileSDK = (accessToken, tokenFallback) => {
    const snsMobileSDK = SNSMobileSDK.init(accessToken, tokenFallback)
        .withHandlers({
        onLog: (event) => {
            console.log('onLog: [Idensic] ' + event.message);
        },
    })
        .withDebug(true)
        .withLocale(i18n.locale) // Optional, for cases when you need to override the system locale
        .build();
    return snsMobileSDK.launch();
};
export const useKyc = () => {
    const [generateToken] = useTokenGeneration();
    const [error, setError] = useState();
    const [isLoading, setLoading] = useState(false);
    const runKyc = useCallback(async (nextValidationStage) => {
        setLoading(true);
        try {
            const res = await launchSNSMobileSDK(await generateToken(nextValidationStage), () => generateToken(nextValidationStage));
            if (res.errorMsg) {
                setError(res.errorMsg);
            }
            return res;
        }
        catch (err) {
            setError(isApexError(err) ? err.message : translate('common.unknownError'));
        }
        finally {
            setLoading(false);
        }
    }, [generateToken, setError]);
    return [runKyc, { isLoading, error }];
};
