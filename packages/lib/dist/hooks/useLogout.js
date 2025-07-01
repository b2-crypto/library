import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { apexApi } from '../services/apexApi';
import { STORAGE_KEYS, getDefaultStorage } from '../services/storage';
import { logout } from '../stores/auth';
import { setLanguage } from '../helpers';
export function useLogout() {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(apexApi.util.resetApiState());
        dispatch(logout());
        const plainStorage = getDefaultStorage();
        plainStorage.delete(STORAGE_KEYS.USER_ID);
        plainStorage.delete(STORAGE_KEYS.USER_NAME);
        setLanguage('en');
    }, [dispatch]);
}
