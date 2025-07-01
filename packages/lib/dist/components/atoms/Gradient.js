import { boxRestyleFunctions, createRestyleComponent, spacing, } from '@shopify/restyle';
import LinearGradient from 'react-native-linear-gradient';
const restyleFunctions = [...boxRestyleFunctions, spacing];
export const Gradient = createRestyleComponent(restyleFunctions, LinearGradient);
