import { useCallback } from 'react';
// `react-native-biometrics` doesn't support new architecture yet,
// so it has been replaced with `react-native-simple-biometrics`.
// however the latter one doesn't work on iOS,
// so its fork `react-native-easy-biometrics` has been used instead as a workaround.
// @see https://github.com/smallcase/react-native-simple-biometrics/issues/17
import rnBiometrics from 'react-native-easy-biometrics';
import { translate } from '../helpers/i18n';
import { ENCRYPTED_STORAGE_KEYS, getSecureStorage, useBoolValue, } from '../services/storage';
import { getLogger } from '../services';
export const canUseBiometrics = rnBiometrics.canAuthenticate;
export const useBiometrics = () => {
    const encryptedStorage = getSecureStorage();
    const [isBiometricsEnabled, setBiometricEnabled] = useBoolValue(ENCRYPTED_STORAGE_KEYS.IS_BIOMETRIC_ENABLED, encryptedStorage);
    const promptBiometrics = useCallback(async () => {
        try {
            await rnBiometrics.requestBioAuth(translate('auth.biometrics.title'), translate('auth.biometrics.confirm'));
            return true;
        }
        catch (error) {
            getLogger()('error', error, 'useBiometrics.promptBiometrics');
            return false;
        }
    }, []);
    const enableBiometrics = useCallback(async ({ userName, password }) => {
        const success = await promptBiometrics();
        if (success) {
            encryptedStorage.set(ENCRYPTED_STORAGE_KEYS.USER_NAME, userName);
            encryptedStorage.set(ENCRYPTED_STORAGE_KEYS.PASSWORD, password);
            setBiometricEnabled(true);
            return true;
        }
        return false;
    }, [promptBiometrics, encryptedStorage, setBiometricEnabled]);
    const clearBiometrics = useCallback(() => {
        setBiometricEnabled(false);
        encryptedStorage.clearAll();
    }, [encryptedStorage, setBiometricEnabled]);
    const disableBiometrics = useCallback(async () => {
        const success = await promptBiometrics();
        if (success) {
            clearBiometrics();
        }
    }, [promptBiometrics, clearBiometrics]);
    const getCredentials = useCallback(() => ({
        userName: encryptedStorage.getString(ENCRYPTED_STORAGE_KEYS.USER_NAME),
        password: encryptedStorage.getString(ENCRYPTED_STORAGE_KEYS.PASSWORD),
    }), [encryptedStorage]);
    const updatePassword = useCallback(async ({ userName, password }) => {
        encryptedStorage.set(ENCRYPTED_STORAGE_KEYS.USER_NAME, userName);
        encryptedStorage.set(ENCRYPTED_STORAGE_KEYS.PASSWORD, password);
    }, [encryptedStorage]);
    return {
        /** flag indicating if user enabled biometric authentication */
        isBiometricsEnabled,
        /** sets the value for the 'isBiometricsEnabled' */
        setBiometricEnabled,
        /** shows the TouchID/FaceID native prompt */
        promptBiometrics,
        /** asks for TouchID/FaceID and saves the username/password in the storage. Returns false when user doesn't pass TouchID verification. */
        enableBiometrics,
        /** clears all saved configuration */
        clearBiometrics,
        /** updates password (might be useful when user resets his password) in Web app */
        updatePassword,
        /** asks for TouchID/FaceID and clears biometric configuration */
        disableBiometrics,
        /** returns username/password stored in encrypted storage (if any) */
        getCredentials,
    };
};
