import React, { useCallback, useState } from 'react';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { translate } from '../../helpers/i18n';
import { Box } from '../atoms';
import { ConnectionAlert, Button } from '../molecules';
export const ConnectionBound = ({ inversed, children, logo }) => {
    const [isLoading, setLoading] = useState(false);
    const { isConnected } = useNetInfo();
    const { top } = useSafeAreaInsets();
    const onTryAgainPress = useCallback(async () => {
        if (isLoading) {
            return;
        }
        setLoading(true);
        try {
            await NetInfo.refresh();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }, [isLoading]);
    // ? isConnected is null by default so need to make sure it became boolean to represent connection status
    if (isConnected === false) {
        return (<Box flex={1} bg="background2" style={{ paddingTop: top }}>
        {logo}
        <ConnectionAlert inversed={inversed}/>
        <Button variant="secondary" label={translate('common.tryAgain')} margin="m" loading={isLoading} onPress={onTryAgainPress}/>
      </Box>);
    }
    return children;
};
