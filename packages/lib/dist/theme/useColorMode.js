import { useColorScheme } from 'react-native';
import { useStringValue, STORAGE_KEYS, getDefaultStorage } from '../services';
export function useColorMode() {
    const systemColorScheme = useColorScheme();
    const [userColorMode, setColorMode] = useStringValue(STORAGE_KEYS.COLOR_SCHEME, getDefaultStorage());
    const colorMode = !userColorMode || userColorMode === 'system'
        ? systemColorScheme
        : userColorMode;
    return {
        colorMode,
        userColorMode,
        setColorMode,
    };
}
