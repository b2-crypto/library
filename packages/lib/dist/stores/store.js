import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore, } from 'redux-persist';
import { apexApi } from '../services/apexApi';
import { TYPES, container } from '../services/container';
import auth from './auth';
import wallet from './wallet';
import currentAccount from './currentAccount';
import leverages from './leverage';
export const mmkvStorage = {
    setItem: (key, value) => {
        const storage = container.resolveService(TYPES.PUBLIC_STORAGE);
        storage.set(key, value);
        return Promise.resolve(true);
    },
    getItem: key => {
        const storage = container.resolveService(TYPES.PUBLIC_STORAGE);
        const value = storage.getString(key);
        return Promise.resolve(value);
    },
    removeItem: key => {
        const storage = container.resolveService(TYPES.PUBLIC_STORAGE);
        storage.delete(key);
        return Promise.resolve();
    },
};
const authPersistReducer = persistReducer({ key: 'auth', storage: mmkvStorage, blacklist: [apexApi.reducerPath] }, auth);
const walletPersistReducer = persistReducer({
    key: 'wallet',
    storage: mmkvStorage,
    blacklist: [apexApi.reducerPath],
}, wallet);
const currentAccountPersistReducer = persistReducer({
    key: 'currentAccount',
    storage: mmkvStorage,
    blacklist: [apexApi.reducerPath],
}, currentAccount);
export const createStore = () => {
    const store = configureStore({
        reducer: {
            // Add the generated reducer as a specific top-level slice
            [apexApi.reducerPath]: apexApi.reducer,
            auth: authPersistReducer,
            wallet: walletPersistReducer,
            currentAccount: currentAccountPersistReducer,
            leverages,
        },
        // Adding the api middleware enables caching, invalidation, polling,
        // and other useful features of `rtk-query`.
        middleware: getDefaultMiddleware => {
            const middlewares = getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(apexApi.middleware);
            if (__DEV__) {
                // const createDebugger = require('redux-flipper').default;
                // middlewares.push(createDebugger());
            }
            return middlewares;
        },
    });
    // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
    // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
    setupListeners(store.dispatch);
    const persistor = persistStore(store);
    return { store, persistor };
};
