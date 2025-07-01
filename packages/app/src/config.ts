import Config from 'react-native-config';

const config = {
  web: {
    APEX_WEB_BASE_URL: Config.BASE_WEB_URL,
  },
  api: {
    ENVIRONMENT: Config.ENVIRONMENT,
    APEX_BASE_URL: Config.BASE_URL,
  },
  KYC: {
    levels: [
      {
        level: 0,
        benefitsVisible: true,
        requirementsVisible: true,
      },
      {
        level: 1,
        benefitsVisible: true,
        requirementsVisible: true,
        verificationMethod: 'sumsub',
      },
      {
        level: 2,
        benefitsVisible: true,
        requirementsVisible: true,
        verificationMethod: 'sumsub',
      },
    ],
  },
  encryptedStorage: {
    KEY: Config.ENCRYPTION_KEY,
  },
  features: {},
  marketingCards: ['alphapoint_bonus', 'apy_bonus', 'send_gift', 'debit_cards'],
};

export default config;
