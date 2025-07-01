import { MMKV } from 'react-native-mmkv';
import {
  TYPES,
  container,
  STORAGE_KEYS,
  Logger,
} from '@apex-rn/library/services';

import packageJson from '../../package.json';
import config from '../config';

const APP_START_ID = new Date().getTime();

export const logger: Logger = (event = 'debug', payload, moduleName) => {
  const message =
    typeof payload === 'string'
      ? payload
      : payload instanceof Error
      ? payload.stack || payload.toString()
      : typeof payload === 'object' && payload !== null
      ? JSON.stringify(payload)
      : payload?.toString();
  let formattedMessage = message?.replace(/\\/g, '');

  if (moduleName && moduleName !== 'fetchWithLogger') {
    formattedMessage += ' | Module: ' + moduleName;
  }

  if (event === 'error') {
    formattedMessage +=
      '\n' +
      (payload instanceof Error && payload.stack
        ? payload.stack
        : new Error().stack);
  }

  // eslint-disable-next-line no-console
  console[event === 'info' ? 'log' : event](formattedMessage);

  //if (!__DEV__) {
  const env = config.api.ENVIRONMENT;
  const storage = container.resolveService<MMKV>(TYPES.PUBLIC_STORAGE);

  const userId = storage.getNumber(STORAGE_KEYS.USER_ID);
  const userName = storage.getString(STORAGE_KEYS.USER_NAME);

  const manufacturer = storage.getString(STORAGE_KEYS.DEVICE_MANUFACTURER);
  const model = storage.getString(STORAGE_KEYS.DEVICE_MODEL);

  const nanoseconds = new Date().getTime() * 1000000;

  const messageArray = [];
  messageArray.push(`Log: ${formattedMessage}`);
  if (userId) {
    messageArray.push(`User ID: ${userId}`);
  }
  if (userName) {
    messageArray.push(`UserName: ${userName}`);
  }
  messageArray.push(`Environment: ${env}`);
  messageArray.push(`Version: ${packageJson.version}`);
  messageArray.push(`Device: ${manufacturer} ${model}`);
  messageArray.push(`App Start ID: ${APP_START_ID}`);

  const logMessage = messageArray.join(' | ');

  // TODO: Determine correct values.
  let provider;
  let logApiUrl;
  switch (env) {
    case 'dev':
      provider = 'Dev';
      logApiUrl = 'https://logs.qa-current.apstage.net/loki/api/v1/push';
      break;

    case 'staging':
      provider = 'QACurrent';
      logApiUrl = 'https://logs.qa-current.apstage.net/loki/api/v1/push';
      break;

    default:
      provider = 'Demo';
      logApiUrl = 'https://logs.qa-current.apstage.net/loki/api/v1/push';
      break;
  }

  const body = {
    streams: [
      {
        stream: {
          Provider: provider,
          Client: `ApexMobile:v${packageJson.version}`,
        },
        values: [[nanoseconds.toString(), logMessage]],
      },
    ],
  };

  fetch(logApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  //}
};
