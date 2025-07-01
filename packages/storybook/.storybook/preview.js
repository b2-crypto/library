import { ThemeProvider } from '@shopify/restyle';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import en from '../../app/src/assets/translations/en.json';
import { defaultTheme } from '@apex-rn/library/theme';
import { i18n } from '@apex-rn/library/helpers/i18n';

import './styles.css';

i18n.translations = { en };
i18n.locale = 'en';

export const decorators = [
  Story => (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    </GestureHandlerRootView>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  options: {
    storySort: {
      order: [
        'Getting Started',
        'components',
        'activity',
        [
          'List',
          ['How to use'],
          'Details',
          ['How to use', '*', 'ActivityDetailsCard'],
        ],
      ],
    },
  },
  viewport: {
    viewports: {
      iphone14pro: {
        name: 'iPhone 14 Pro',
        type: 'mobile',
        styles: {
          width: '393px',
          height: '852px',
        },
      },
      iphonese: {
        name: 'iPhone SE (3rd gen)',
        type: 'mobile',
        styles: {
          width: '320px',
          height: '568px',
        },
      },
    },
    defaultViewport: 'iphone14pro',
  },
};
