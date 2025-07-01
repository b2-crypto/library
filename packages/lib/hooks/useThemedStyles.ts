import { useTheme } from '@shopify/restyle';

import { Theme } from '../theme';

export const useThemedStyles = <T extends Record<string, unknown>>(
  styles: (theme: Theme) => T,
) => {
  const theme = useTheme<Theme>();
  return styles(theme);
};
