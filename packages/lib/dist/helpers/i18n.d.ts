/// <reference types="lodash" />
import { Dict, I18n, Scope, TranslateOptions } from 'i18n-js';
export declare const i18n: I18n;
export type Languages = Record<
  string,
  {
    tag: string;
    label: string;
    isRTL?: boolean;
    getter: () => Dict;
  }
>;
export declare const translate: (<T = string>(
  scope: Scope,
  options?: TranslateOptions | undefined,
) => string | T) &
  import('lodash').MemoizedFunction;
export declare function getLanguageConfig(): Languages;
export declare function setTranslations(languages: Languages): void;
export declare function getLanguage(lngCode: string | undefined): {
  tag: string;
  label: string;
  isRTL?: boolean | undefined;
  getter: () => Dict;
};
export declare function setLanguage(lngCode?: string): {
  tag: string;
  label: string;
  isRTL?: boolean | undefined;
  getter: () => Dict;
};
