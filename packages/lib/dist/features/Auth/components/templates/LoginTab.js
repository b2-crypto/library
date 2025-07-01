import React from 'react';
import { useStore } from 'react-redux';
import { useAppSelector, useBiometrics } from '../../../../hooks';
import { selectIsBioAuthenticated, setAuthenticated, } from '../../../../stores/auth';
import { useLogin } from '../../hooks';
import { bootstrap } from '../../../../bootstrap';
import { LoginForm } from '../organisms';
export const LoginTab = ({ on2FARequired, onBiometricSetup, }) => {
    const store = useStore();
    const isBiometricAvailable = useAppSelector(selectIsBioAuthenticated);
    const [onSubmit, { error }] = useLogin();
    const { isBiometricsEnabled, updatePassword } = useBiometrics();
    const handleSubmit = async (formData) => {
        const result = await onSubmit(formData);
        if (result.Authenticated) {
            await bootstrap(store);
            if (result.Requires2FA) {
                on2FARequired?.();
            }
            else if (isBiometricAvailable &&
                typeof isBiometricsEnabled === 'undefined') {
                onBiometricSetup?.(formData);
            }
            else {
                updatePassword(formData);
                store.dispatch(setAuthenticated());
            }
        }
    };
    return <LoginForm onSubmit={handleSubmit} error={error}/>;
};
