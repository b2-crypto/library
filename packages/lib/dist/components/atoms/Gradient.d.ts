/// <reference types="react" />
import { BoxProps, SpacingProps, BaseTheme } from '@shopify/restyle';
import { Theme } from '../../theme';
export type GradientProps = BoxProps<Theme> & SpacingProps<Theme> & BaseTheme;
export declare const Gradient: import('react').ForwardRefExoticComponent<
  Omit<
    {
      [key: string]: any;
    },
    'ref'
  > &
    import('react').RefAttributes<unknown>
> & {
  defaultProps?:
    | Partial<
        Omit<
          {
            [key: string]: any;
          },
          'ref'
        > &
          import('react').RefAttributes<unknown>
      >
    | undefined;
};
