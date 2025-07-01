import { Theme } from '../theme';
export declare const useThemedStyles: <T extends Record<string, unknown>>(
  styles: (theme: Theme) => T,
) => T;
