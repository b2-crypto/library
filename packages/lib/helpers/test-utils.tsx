import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { render } from '@testing-library/react-native';
import { HttpResponse, http, type JsonBodyType } from 'msw';
import { setupServer } from 'msw/native';
import React from 'react';
import { MMKV } from 'react-native-mmkv';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { setTranslations } from '../helpers/i18n';
import { TYPES, container } from '../services/container';
import { createStore } from '../stores/store';
import { defaultTheme } from '../theme';

export const TEST_BASE_URL = 'http://apex.local';

// copy all public members of the ReturnType of setupServer() function.
type Interface<T> = { [P in keyof T]: T[P] };
interface ServerType extends Interface<ReturnType<typeof setupServer>> {}

export const server: ServerType = setupServer();

/** Permite personalizar el mock en un test específico */
export const mockApiSuccess = (
  endpoint: string,
  payload: JsonBodyType,
  httpMethod: keyof typeof http = 'post',
) =>
  server.use(
    http[httpMethod](new URL(endpoint, TEST_BASE_URL).href, () =>
      HttpResponse.json(payload),
    ),
  );

// Traducciones mockeadas
setTranslations({
  en: {
    tag: 'en',
    label: 'English',
    isRTL: false,
    getter: () => require('../../app/src/assets/translations/en.json'),
  },
});

// Crea el store sin persistencia para tests
export function createTestStore() {
  const { store } = createStore();
  return store;
}

// Mock de contenedor de servicios
container.registerService(TYPES.PUBLIC_STORAGE, new MMKV());
container.registerService(TYPES.SECURE_STORAGE, new MMKV());
container.registerService(TYPES.LOGGER, console.log);

container.setConfigValue('baseUrl', TEST_BASE_URL);
container.setConfigValue('verificationLevels', []);

// Proveedores envueltos
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={defaultTheme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

// Render personalizado con todos los proveedores
const customRender: typeof render = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// Re-export
export * from '@testing-library/react-native';
export { customRender as render };
