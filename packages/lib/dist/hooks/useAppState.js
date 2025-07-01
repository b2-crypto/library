import { useState, useEffect } from 'react';
import { AppState } from 'react-native';
export const useAppState = ({ onChange, onForeground, onBackground, }) => {
    const [appState, setAppState] = useState(AppState.currentState);
    useEffect(() => {
        const handleAppStateChange = (nextAppState) => {
            if (nextAppState === 'active' && appState !== 'active') {
                onForeground?.();
            }
            else if (appState === 'active' &&
                nextAppState.match(/inactive|background/)) {
                onBackground?.();
            }
            setAppState(nextAppState);
            onChange?.(nextAppState);
        };
        const appStateListner = AppState.addEventListener('change', handleAppStateChange);
        return () => appStateListner.remove();
    }, [onChange, onForeground, onBackground, appState]);
    // settings validation
    return { appState };
};
export default useAppState;
