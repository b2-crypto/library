import { useDispatch, useSelector } from 'react-redux';
import { useAuthenticate2FAMutation } from '../../../services/profileApi';
import { STORAGE_KEYS, getDefaultStorage } from '../../../services/storage';
import { select2FaToken, setAuthenticated, setUser, } from '../../../stores/auth';
export const useTwoFactAuth = () => {
    const dispatch = useDispatch();
    const pending2FaToken = useSelector(select2FaToken);
    const storage = getDefaultStorage();
    const [authenticate2FA, { isError, isLoading }] = useAuthenticate2FAMutation();
    const onSubmit = async (formData) => {
        try {
            const authRes = await authenticate2FA({
                code: formData.code,
                pending2FaToken,
            }).unwrap();
            dispatch(setUser({
                user: {
                    UserId: authRes.UserId,
                    SessionToken: authRes.SessionToken,
                },
            }));
            // Store for logging purposes (userName was already stored in a previous
            // step).
            storage.set(STORAGE_KEYS.USER_ID, authRes.UserId);
            dispatch(setAuthenticated());
        }
        catch {
            //
        }
    };
    return [onSubmit, { isError, isLoading }];
};
