import {
  useMMKV as useStorage,
  useMMKVString as useStringValue,
  useMMKVNumber as useNumberValue,
  useMMKVBoolean as useBoolValue,
  useMMKVObject as useObjectValue,
  useMMKVListener as useValueListener,
  MMKV,
} from 'react-native-mmkv';
declare const STORAGE_KEYS: {
  DEVICE_MANUFACTURER: string;
  DEVICE_MODEL: string;
  USER_LANGUAGE: string;
  COLOR_SCHEME: string;
  USER_ID: string;
  USER_NAME: string;
  HIDE_MARGIN_SMALL_AMOUNTS: string;
  HIDE_SPOT_SMALL_AMOUNTS: string;
  WALLET_ACTIVE_TAB: string;
};
declare const ENCRYPTED_STORAGE_KEYS: {
  IS_BIOMETRIC_ENABLED: string;
  USER_NAME: string;
  PASSWORD: string;
};
declare function getDefaultStorage(): MMKV;
declare function getSecureStorage(): MMKV;
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
