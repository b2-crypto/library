import { useTheme } from '@shopify/restyle';
export const useThemedStyles = (styles) => {
    const theme = useTheme();
    return styles(theme);
};
