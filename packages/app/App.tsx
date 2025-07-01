import React, { useEffect, useState } from 'react';
import { Platform, StatusBar } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { getManufacturer, getModel } from 'react-native-device-info';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApexProvider } from '@apex-rn/library/ApexProvider';
import { ConnectionBound } from '@apex-rn/library/components';
import { setTranslations } from '@apex-rn/library/helpers';
import { TYPES, container, STORAGE_KEYS } from '@apex-rn/library/services';
import { darkTheme, defaultTheme, useColorMode } from '@apex-rn/library/theme';

// Localization.
import { LANGUAGES } from './src/assets/translations';
import config from './src/config';
import { RootNavigator } from './src/routes/RootNavigator';
import { logger } from './src/services/logger';

const SPLASH_SCREEN_MIN_TIME_MS = 3000;

setTranslations(LANGUAGES);

const storage = new MMKV();
const encryptedStorage = new MMKV({
  id: 'storage-encrypted',
  encryptionKey: config.encryptedStorage.KEY,
});
container.registerService(TYPES.PUBLIC_STORAGE, storage);
container.registerService(TYPES.SECURE_STORAGE, encryptedStorage);
if (__DEV__) {
  storage.addOnValueChangedListener(key => {
    /* eslint-disable no-console */
    console.group(`MMKV Storage [${key}] changed`);
    console.log(storage.toJSON());
    console.groupEnd();
    /* eslint-enable no-console */
  });
  encryptedStorage.addOnValueChangedListener(key => {
    /* eslint-disable no-console */
    console.group(`Encrypted MMKV Storage [${key}] changed`);
    console.log(storage.toJSON());
    console.groupEnd();
    /* eslint-enable no-console */
  });
}

container.registerService(TYPES.LOGGER, logger);
container.setConfigValue('baseUrl', config.api.APEX_BASE_URL!);
container.setConfigValue('verificationLevels', config.KYC.levels);
container.setConfigValue('webBaseUrl', config.web.APEX_WEB_BASE_URL!);
container.setConfigValue('features', config.features);

const App = () => {
  const gestureHandlerStyle = { flex: 1 };

  const { colorMode } = useColorMode();
  const appTheme = colorMode === 'dark' ? darkTheme : defaultTheme;

  const [hasMinSplashTimeElapsed, setHasMinSplashTimeElapsed] = useState(false);
  const [bootstrapCompleted, setBootstrapCompleted] = useState(false);

  const splashScreenTimeout = setTimeout(() => {
    setHasMinSplashTimeElapsed(true);

    clearTimeout(splashScreenTimeout);
  }, SPLASH_SCREEN_MIN_TIME_MS);

  useEffect(() => {
    (async () => {
      const [manufacturer, model] = await Promise.all([
        getManufacturer(),
        getModel(),
      ]);

      storage.set(STORAGE_KEYS.DEVICE_MANUFACTURER, manufacturer);
      storage.set(STORAGE_KEYS.DEVICE_MODEL, model);
    })();
  }, []);

  useEffect(() => {
    if (hasMinSplashTimeElapsed && bootstrapCompleted) {
      RNBootSplash.hide();
    }
  }, [hasMinSplashTimeElapsed, bootstrapCompleted]);

  return (
    <GestureHandlerRootView style={gestureHandlerStyle}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'}
          translucent={Platform.OS === 'android'}
          backgroundColor="transparent"
        />
        <ApexProvider
          theme={appTheme}
          onBootstrapFinish={() => setBootstrapCompleted(true)}>
          <ConnectionBound>
            {bootstrapCompleted ? <RootNavigator /> : null}
          </ConnectionBound>
        </ApexProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
