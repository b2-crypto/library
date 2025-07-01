import React, { useCallback } from 'react';
import { useAppSelector, useBiometrics } from '../../../../hooks';
import { selectIsBioAuthenticated } from '../../../../stores/auth';
import { BiometricCard } from '../molecules';
export const BiometricWidget = ({ onEnable }) => {
    const biometricsType = useAppSelector(selectIsBioAuthenticated);
    const { isBiometricsEnabled, disableBiometrics } = useBiometrics();
    const handlePress = useCallback(async (value) => {
        value ? onEnable() : disableBiometrics();
    }, [onEnable, disableBiometrics]);
    if (!biometricsType) {
        return null;
    }
    return (<BiometricCard initialValue={isBiometricsEnabled} onSubmit={handlePress}/>);
};
