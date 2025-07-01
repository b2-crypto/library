// @ts-ignore
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

import 'fast-text-encoding';
import 'react-native-url-polyfill';

import { server } from './helpers/test-utils';

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

// @ts-ignore
global.__DEV__ = false;

// @ts-ignore
global.navigator = {
  userAgent: 'node.js',
  /** used by zrender => echarts */
  language: 'en',
};

/** used by zrender => echarts */
// @ts-ignore
global.document = {
  documentElement: {
    // @ts-ignore
    style: {},
  },
};
