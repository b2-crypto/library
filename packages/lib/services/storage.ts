import {
  useMMKV as useStorage,
  useMMKVString as useStringValue,
  useMMKVNumber as useNumberValue,
  useMMKVBoolean as useBoolValue,
  useMMKVObject as useObjectValue,
  useMMKVListener as useValueListener,
  MMKV,
} from 'react-native-mmkv';

import { TYPES, container } from './container';

const STORAGE_KEYS = {
  DEVICE_MANUFACTURER: 'DEVICE_MANUFACTURER',
  DEVICE_MODEL: 'DEVICE_MODEL',
  USER_LANGUAGE: 'USER_LANGUAGE',
  COLOR_SCHEME: 'COLOR_SCHEME',
  USER_ID: 'USER_ID',
  USER_NAME: 'USER_NAME',
  HIDE_MARGIN_SMALL_AMOUNTS: 'HIDE_MARGIN_SMALL_AMOUNTS',
  HIDE_SPOT_SMALL_AMOUNTS: 'HIDE_SPOT_SMALL_AMOUNTS',
  WALLET_ACTIVE_TAB: 'WALLET_ACTIVE_TAB',
};

const ENCRYPTED_STORAGE_KEYS = {
  IS_BIOMETRIC_ENABLED: 'IS_BIOMETRIC_ENABLED',
  USER_NAME: 'USER_NAME',
  PASSWORD: 'PASSWORD',
};

function getDefaultStorage() {
  return container.resolveService<MMKV>(TYPES.PUBLIC_STORAGE);
}

function getSecureStorage() {
  return container.resolveService<MMKV>(TYPES.SECURE_STORAGE);
}

export {
  STORAGE_KEYS,
  ENCRYPTED_STORAGE_KEYS,
  useStorage,
  useStringValue,
  useNumberValue,
  useBoolValue,
  useObjectValue,
  useValueListener,
  getDefaultStorage,
  getSecureStorage,
};
