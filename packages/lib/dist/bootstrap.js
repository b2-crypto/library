import { detectBiometricSensors } from './helpers';
import { apexApi } from './services/apexApi';
import { profileApi } from './services/profileApi';
import { setLanguage } from './helpers/i18n';
export const bootstrap = async ({ getState, dispatch }) => {
    const { auth } = getState();
    if (auth.user) {
        const { data: configData } = await dispatch(profileApi.endpoints.getUserConfig.initiate({
            userId: auth.user.UserId,
        }));
        if (configData?.Language) {
            setLanguage(configData.Language);
        }
        await Promise.all([
            dispatch(apexApi.endpoints.getInstruments.initiate()),
            dispatch(apexApi.endpoints.getProducts.initiate()),
            dispatch(apexApi.endpoints.getLevel1Summary.initiate()),
        ]);
        const userInfo = await dispatch(apexApi.endpoints.getUserInfo.initiate({ userId: auth.user.UserId }));
        if (userInfo.data?.AccountId) {
            await dispatch(apexApi.endpoints.getAccountPositions.initiate({
                accountId: userInfo.data.AccountId,
            }));
        }
        if (userInfo.data?.MarginBorrowerEnabled) {
            await dispatch(profileApi.endpoints.getUserAccounts.initiate());
        }
    }
    await detectBiometricSensors(dispatch);
};
