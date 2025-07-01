import React from 'react';
import { I18nManager } from 'react-native';
import { Dict, I18n, Scope, TranslateOptions } from 'i18n-js';
import memoize from 'lodash/memoize';
import mapValues from 'lodash/mapValues';
import isNil from 'lodash/isNil';
import reactStringReplace from 'react-string-replace';

import { STORAGE_KEYS, getDefaultStorage } from '../services/storage';

export const i18n = new I18n();

//#region Custom interpolation with React component support
const originalInterpolate = i18n.interpolate;

const reactInterpolate = (
  i: I18n,
  message: string,
  options: TranslateOptions,
) => {
  options = Object.keys(options).reduce((buffer, key) => {
    buffer[i.transformKey(key)] = options[key];
    return buffer;
  }, {} as TranslateOptions);

  return reactStringReplace(message, i.placeholder, (match, idx) => {
    let value: string = '';
    const placeholder = match as string;
    const name = placeholder.replace(i.placeholder, '$1');

    if (!isNil(options[name])) {
      if (React.isValidElement(options[name])) {
        value = options[name];
      } else {
        value = options[name].toString().replace(/\$/gm, '_#$#_');
      }
    } else if (name in options) {
      value = i.nullPlaceholder(i, placeholder, message, options);
    } else {
      value = i.missingPlaceholder(i, placeholder, message, options);
    }

    return <React.Fragment key={idx}>{value}</React.Fragment>;
  });
};
// Because we are using this in a react context we don't need
// this to return a string; we need it to return a valid react node
// @ts-ignore
i18n.interpolate = (i, message, options) => {
  // If any of the options is a ReactNode, use ReactInterpolate
  if (Object.values(options).some(value => React.isValidElement(value))) {
    return reactInterpolate(i, message, options);
  }
  return originalInterpolate(i, message, options);
};

export type Languages = Record<
  string,
  { tag: string; label: string; isRTL?: boolean; getter: () => Dict }
>;

let translationConfig: Languages = {
  en: {
    tag: 'en',
    label: 'English',
    isRTL: false,
    getter: () => ({}),
  },
};

export const translate = memoize(
  i18n.t.bind(i18n),
  (key: Scope, config?: TranslateOptions) =>
    JSON.stringify(key) +
    JSON.stringify(config || '', (k, v) => {
      // special stringify logic for react components that might
      // be used as a parameters for the translation strings for interpolation
      if (typeof v === 'object' && React.isValidElement(v)) {
        const type =
          typeof v.type === 'string'
            ? v.type
            : typeof v.type === 'object' && v.type !== null
            ? // @ts-expect-error
              v.type.displayName || Symbol.keyFor(v.type.$$typeof)
            : '';
        const props = JSON.stringify(v.props);
        return `${type}(${props});`;
      }
      return v;
    }),
);

export function getLanguageConfig() {
  return translationConfig;
}

export function setTranslations(languages: Languages) {
  translationConfig = languages;

  if (i18n.locale in languages) {
    i18n.store({ [i18n.locale]: languages[i18n.locale].getter() });
  } else {
    console.warn(`Missing translation for ${i18n.locale} locale`);
    i18n.store(mapValues(languages, options => options.getter()));
  }
}

export function getLanguage(lngCode: string | undefined) {
  const lng =
    lngCode || getDefaultStorage().getString(STORAGE_KEYS.USER_LANGUAGE);
  const languageCode = lng && lng in translationConfig ? lng : 'en';
  return translationConfig[languageCode];
}

export function setLanguage(lngCode?: string) {
  const language = getLanguage(lngCode);
  if (i18n.locale !== language.tag) {
    if (language.tag in translationConfig) {
      i18n.store({ [language.tag]: language.getter() });
    }
    i18n.locale = language.tag;
    I18nManager.forceRTL(language.isRTL || false);
    getDefaultStorage().set(STORAGE_KEYS.USER_LANGUAGE, language.tag);
    translate.cache.clear?.();
  }

  return language;
}
