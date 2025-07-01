import React, { memo, useEffect, useMemo } from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { Provider, useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { bootstrap } from './bootstrap';
import { createStore } from './stores/store';
import { toastConfig as defaultToastConfig } from './helpers/toastConfig';
export const ApexProvider = memo(({ theme, onBootstrapFinish, toastConfig, children }) => {
    const { top } = useSafeAreaInsets();
    const { store, persistor } = useMemo(() => createStore(), []);
    const tConfig = useMemo(() => ({
        ...defaultToastConfig,
        ...toastConfig,
    }), [toastConfig]);
    return (<ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppBootstrap onBootstrapFinish={onBootstrapFinish}>
              {children}
              <Toast config={tConfig} topOffset={top}/>
            </AppBootstrap>
          </PersistGate>
        </Provider>
      </ThemeProvider>);
});
ApexProvider.displayName = 'ApexProvider';
/**
 * This component will be rendered as a children of PersistGate and only after
 * the persiter will recover the store's state from the storage.
 * Once done with that we are ready to finish the bootstrapping process.
 */
const AppBootstrap = ({ onBootstrapFinish, children, }) => {
    const store = useStore();
    useEffect(() => {
        bootstrap(store).then(() => onBootstrapFinish?.());
    }, [onBootstrapFinish, store]);
    return <>{children}</>;
};
