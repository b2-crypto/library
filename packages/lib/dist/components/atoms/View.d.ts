/// <reference types="react" />
import { ViewProps as RNViewProps } from 'react-native';
import {
  BorderProps,
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps,
  VariantProps,
  BackgroundColorProps,
} from '@shopify/restyle';
import { Theme } from '../../theme';
export type ViewProps = VariantProps<Theme, 'viewVariants'> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme> &
  RNViewProps;
export declare const View: import('react').ForwardRefExoticComponent<
  VariantProps<
    {
      colors: {
        brandSolid: string;
        brandBackground: string;
        brandDisabled: string;
        brandGradientFrom: string;
        brandGradientTo: string;
        brandWGradientFrom: string;
        brandWGradientTo: string;
        buy: string;
        buyDisabled: string;
        sell: string;
        sellDisabled: string;
        positive: string;
        reject: string;
        error: string;
        textPrimary: string;
        textSecondary: string;
        textDisabled: string;
        textInverse: string;
        formBorder: string;
        formBackground: string;
        onDark: string;
        button2ndBackground: string;
        button2ndBorder: string;
        background1: string;
        background2: string;
        background3: string;
        background4: string;
        toolbarBlur: string;
        border1: string;
        border2: string;
        border3: string;
        border4: string;
        black: string;
        white: string;
        transparent: string;
        cryptoDefault: string;
        positiveChange: string;
        negativeChange: string;
        success: string;
        buttonSell: string;
        shadowRed: string;
        buttonBuy: string;
        shadowGreen: string;
        shadowGrey: string;
        riskVeryLow: string;
        riskLow: string;
        riskMedium: string;
        riskHigh: string;
        riskVeryHigh: string;
      };
      spacing: {
        none: number;
        xxs: number;
        xs: number;
        s: number;
        sm: number;
        m: number;
        l: number;
        xl: number;
        lg: number;
      };
      buttonVariants: {
        brandOpposite: {
          backgroundColor: string;
          borderColor: string;
          borderWidth: number;
          borderRadius: number;
          shadowRadius: number;
          shadowOpacity: number;
        };
        primary: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        secondary: {
          backgroundColor: string;
          borderColor: string;
          borderWidth: number;
        };
        buy: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        sell: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        danger: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        line: {
          backgroundColor: string;
          alignItems: string;
          justifyContent: string;
          borderWidth: number;
          borderColor: string;
          borderRadius: number;
        };
        transparent: {
          backgroundColor: string;
          borderColor: string;
          marginVertical: string;
        };
        leverage: {
          backgroundColor: string;
        };
      };
      textVariants: {
        defaults: {
          fontFamily: string;
          fontSize: number;
          lineHeight: number;
          color: string;
        };
        textBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
          color: string;
        };
        headlineBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
        };
        headlineReg: {
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
        };
        subHeadlineBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
        };
        subHeadlineReg: {
          fontSize: number;
          color: string;
          lineHeight: number;
          fontWeight: string;
          letterSpacing: number;
        };
        bodyReg: {
          fontSize: number;
          lineHeight: number;
        };
        bodyBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
        };
        captionBold: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
        };
        captionReg: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
        };
        button_primary: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
          marginLeft: string;
        };
        button_transparent: {
          fontSize: number;
          fontWeight: string;
          color: string;
        };
        button_secondary: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
        };
        button_buy: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
        };
        button_sell: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
        };
        button_danger: {
          fontSize: number;
          color: string;
          fontWeight: string;
        };
        button_line: {
          color: string;
        };
        button_brandOpposite: {
          fontSize: number;
          fontWeight: string;
          color: string;
        };
        button_leverage: {
          fontSize: number;
          fontWeight: string;
          color: string;
        };
        error: {
          color: string;
        };
        chartAxisText: {
          fontSize: number;
        };
        chartMarklineText: {
          fontSize: number;
          fontWeight: string;
        };
        riskIndicator: {
          fontSize: number;
          fontWeight: string;
          lineHeight: number;
        };
      };
      breakpoints: {
        small: number;
        medium: number;
        large: number;
      };
      viewVariants: {
        defaults: {};
        totalBalance: {
          backgroundColor: string;
          padding: string;
          borderTopWidth: number;
          borderBottomWidth: number;
          borderColor: string;
        };
        orderInputCurrency: {
          backgroundColor: string;
          padding: string;
          paddingHorizontal: string;
          borderRadius: number;
        };
      };
      cardVariants: {
        defaults: {
          borderRadius: number;
          backgroundColor: string;
        };
        elevated: {
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowColor: string;
          shadowOpacity: number;
          elevation: number;
        };
        floating: {
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowColor: string;
          shadowOpacity: number;
          elevation: number;
        };
      };
    },
    'viewVariants'
  > &
    SpacingProps<{
      colors: {
        brandSolid: string;
        brandBackground: string;
        brandDisabled: string;
        brandGradientFrom: string;
        brandGradientTo: string;
        brandWGradientFrom: string;
        brandWGradientTo: string;
        buy: string;
        buyDisabled: string;
        sell: string;
        sellDisabled: string;
        positive: string;
        reject: string;
        error: string;
        textPrimary: string;
        textSecondary: string;
        textDisabled: string;
        textInverse: string;
        formBorder: string;
        formBackground: string;
        onDark: string;
        button2ndBackground: string;
        button2ndBorder: string;
        background1: string;
        background2: string;
        background3: string;
        background4: string;
        toolbarBlur: string;
        border1: string;
        border2: string;
        border3: string;
        border4: string;
        black: string;
        white: string;
        transparent: string;
        cryptoDefault: string;
        positiveChange: string;
        negativeChange: string;
        success: string;
        buttonSell: string;
        shadowRed: string;
        buttonBuy: string;
        shadowGreen: string;
        shadowGrey: string;
        riskVeryLow: string;
        riskLow: string;
        riskMedium: string;
        riskHigh: string;
        riskVeryHigh: string;
      };
      spacing: {
        none: number;
        xxs: number;
        xs: number;
        s: number;
        sm: number;
        m: number;
        l: number;
        xl: number;
        lg: number;
      };
      buttonVariants: {
        brandOpposite: {
          backgroundColor: string;
          borderColor: string;
          borderWidth: number;
          borderRadius: number;
          shadowRadius: number;
          shadowOpacity: number;
        };
        primary: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        secondary: {
          backgroundColor: string;
          borderColor: string;
          borderWidth: number;
        };
        buy: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        sell: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        danger: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        line: {
          backgroundColor: string;
          alignItems: string;
          justifyContent: string;
          borderWidth: number;
          borderColor: string;
          borderRadius: number;
        };
        transparent: {
          backgroundColor: string;
          borderColor: string;
          marginVertical: string;
        };
        leverage: {
          backgroundColor: string;
        };
      };
      textVariants: {
        defaults: {
          fontFamily: string;
          fontSize: number;
          lineHeight: number;
          color: string;
        };
        textBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
          color: string;
        };
        headlineBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
        };
        headlineReg: {
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
        };
        subHeadlineBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
        };
        subHeadlineReg: {
          fontSize: number;
          color: string;
          lineHeight: number;
          fontWeight: string;
          letterSpacing: number;
        };
        bodyReg: {
          fontSize: number;
          lineHeight: number;
        };
        bodyBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
        };
        captionBold: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
        };
        captionReg: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
        };
        button_primary: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
          marginLeft: string;
        };
        button_transparent: {
          fontSize: number;
          fontWeight: string;
          color: string;
        };
        button_secondary: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
        };
        button_buy: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
        };
        button_sell: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
        };
        button_danger: {
          fontSize: number;
          color: string;
          fontWeight: string;
        };
        button_line: {
          color: string;
        };
        button_brandOpposite: {
          fontSize: number;
          fontWeight: string;
          color: string;
        };
        button_leverage: {
          fontSize: number;
          fontWeight: string;
          color: string;
        };
        error: {
          color: string;
        };
        chartAxisText: {
          fontSize: number;
        };
        chartMarklineText: {
          fontSize: number;
          fontWeight: string;
        };
        riskIndicator: {
          fontSize: number;
          fontWeight: string;
          lineHeight: number;
        };
      };
      breakpoints: {
        small: number;
        medium: number;
        large: number;
      };
      viewVariants: {
        defaults: {};
        totalBalance: {
          backgroundColor: string;
          padding: string;
          borderTopWidth: number;
          borderBottomWidth: number;
          borderColor: string;
        };
        orderInputCurrency: {
          backgroundColor: string;
          padding: string;
          paddingHorizontal: string;
          borderRadius: number;
        };
      };
      cardVariants: {
        defaults: {
          borderRadius: number;
          backgroundColor: string;
        };
        elevated: {
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowColor: string;
          shadowOpacity: number;
          elevation: number;
        };
        floating: {
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowColor: string;
          shadowOpacity: number;
          elevation: number;
        };
      };
    }> &
    SpacingShorthandProps<{
      colors: {
        brandSolid: string;
        brandBackground: string;
        brandDisabled: string;
        brandGradientFrom: string;
        brandGradientTo: string;
        brandWGradientFrom: string;
        brandWGradientTo: string;
        buy: string;
        buyDisabled: string;
        sell: string;
        sellDisabled: string;
        positive: string;
        reject: string;
        error: string;
        textPrimary: string;
        textSecondary: string;
        textDisabled: string;
        textInverse: string;
        formBorder: string;
        formBackground: string;
        onDark: string;
        button2ndBackground: string;
        button2ndBorder: string;
        background1: string;
        background2: string;
        background3: string;
        background4: string;
        toolbarBlur: string;
        border1: string;
        border2: string;
        border3: string;
        border4: string;
        black: string;
        white: string;
        transparent: string;
        cryptoDefault: string;
        positiveChange: string;
        negativeChange: string;
        success: string;
        buttonSell: string;
        shadowRed: string;
        buttonBuy: string;
        shadowGreen: string;
        shadowGrey: string;
        riskVeryLow: string;
        riskLow: string;
        riskMedium: string;
        riskHigh: string;
        riskVeryHigh: string;
      };
      spacing: {
        none: number;
        xxs: number;
        xs: number;
        s: number;
        sm: number;
        m: number;
        l: number;
        xl: number;
        lg: number;
      };
      buttonVariants: {
        brandOpposite: {
          backgroundColor: string;
          borderColor: string;
          borderWidth: number;
          borderRadius: number;
          shadowRadius: number;
          shadowOpacity: number;
        };
        primary: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        secondary: {
          backgroundColor: string;
          borderColor: string;
          borderWidth: number;
        };
        buy: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        sell: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        danger: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        line: {
          backgroundColor: string;
          alignItems: string;
          justifyContent: string;
          borderWidth: number;
          borderColor: string;
          borderRadius: number;
        };
        transparent: {
          backgroundColor: string;
          borderColor: string;
          marginVertical: string;
        };
        leverage: {
          backgroundColor: string;
        };
      };
      textVariants: {
        defaults: {
          fontFamily: string;
          fontSize: number;
          lineHeight: number;
          color: string;
        };
        textBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
          color: string;
        };
        headlineBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
        };
        headlineReg: {
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
        };
        subHeadlineBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
        };
        subHeadlineReg: {
          fontSize: number;
          color: string;
          lineHeight: number;
          fontWeight: string;
          letterSpacing: number;
        };
        bodyReg: {
          fontSize: number;
          lineHeight: number;
        };
        bodyBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
        };
        captionBold: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
        };
        captionReg: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
        };
        button_primary: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
          marginLeft: string;
        };
        button_transparent: {
          fontSize: number;
          fontWeight: string;
          color: string;
        };
        button_secondary: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
        };
        button_buy: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
        };
        button_sell: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
        };
        button_danger: {
          fontSize: number;
          color: string;
          fontWeight: string;
        };
        button_line: {
          color: string;
        };
        button_brandOpposite: {
          fontSize: number;
          fontWeight: string;
          color: string;
        };
        button_leverage: {
          fontSize: number;
          fontWeight: string;
          color: string;
        };
        error: {
          color: string;
        };
        chartAxisText: {
          fontSize: number;
        };
        chartMarklineText: {
          fontSize: number;
          fontWeight: string;
        };
        riskIndicator: {
          fontSize: number;
          fontWeight: string;
          lineHeight: number;
        };
      };
      breakpoints: {
        small: number;
        medium: number;
        large: number;
      };
      viewVariants: {
        defaults: {};
        totalBalance: {
          backgroundColor: string;
          padding: string;
          borderTopWidth: number;
          borderBottomWidth: number;
          borderColor: string;
        };
        orderInputCurrency: {
          backgroundColor: string;
          padding: string;
          paddingHorizontal: string;
          borderRadius: number;
        };
      };
      cardVariants: {
        defaults: {
          borderRadius: number;
          backgroundColor: string;
        };
        elevated: {
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowColor: string;
          shadowOpacity: number;
          elevation: number;
        };
        floating: {
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowColor: string;
          shadowOpacity: number;
          elevation: number;
        };
      };
    }> &
    BackgroundColorProps<{
      colors: {
        brandSolid: string;
        brandBackground: string;
        brandDisabled: string;
        brandGradientFrom: string;
        brandGradientTo: string;
        brandWGradientFrom: string;
        brandWGradientTo: string;
        buy: string;
        buyDisabled: string;
        sell: string;
        sellDisabled: string;
        positive: string;
        reject: string;
        error: string;
        textPrimary: string;
        textSecondary: string;
        textDisabled: string;
        textInverse: string;
        formBorder: string;
        formBackground: string;
        onDark: string;
        button2ndBackground: string;
        button2ndBorder: string;
        background1: string;
        background2: string;
        background3: string;
        background4: string;
        toolbarBlur: string;
        border1: string;
        border2: string;
        border3: string;
        border4: string;
        black: string;
        white: string;
        transparent: string;
        cryptoDefault: string;
        positiveChange: string;
        negativeChange: string;
        success: string;
        buttonSell: string;
        shadowRed: string;
        buttonBuy: string;
        shadowGreen: string;
        shadowGrey: string;
        riskVeryLow: string;
        riskLow: string;
        riskMedium: string;
        riskHigh: string;
        riskVeryHigh: string;
      };
      spacing: {
        none: number;
        xxs: number;
        xs: number;
        s: number;
        sm: number;
        m: number;
        l: number;
        xl: number;
        lg: number;
      };
      buttonVariants: {
        brandOpposite: {
          backgroundColor: string;
          borderColor: string;
          borderWidth: number;
          borderRadius: number;
          shadowRadius: number;
          shadowOpacity: number;
        };
        primary: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        secondary: {
          backgroundColor: string;
          borderColor: string;
          borderWidth: number;
        };
        buy: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        sell: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        danger: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        line: {
          backgroundColor: string;
          alignItems: string;
          justifyContent: string;
          borderWidth: number;
          borderColor: string;
          borderRadius: number;
        };
        transparent: {
          backgroundColor: string;
          borderColor: string;
          marginVertical: string;
        };
        leverage: {
          backgroundColor: string;
        };
      };
      textVariants: {
        defaults: {
          fontFamily: string;
          fontSize: number;
          lineHeight: number;
          color: string;
        };
        textBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
          color: string;
        };
        headlineBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
        };
        headlineReg: {
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
        };
        subHeadlineBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
        };
        subHeadlineReg: {
          fontSize: number;
          color: string;
          lineHeight: number;
          fontWeight: string;
          letterSpacing: number;
        };
        bodyReg: {
          fontSize: number;
          lineHeight: number;
        };
        bodyBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
        };
        captionBold: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
        };
        captionReg: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
        };
        button_primary: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
          marginLeft: string;
        };
        button_transparent: {
          fontSize: number;
          fontWeight: string;
          color: string;
        };
        button_secondary: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
        };
        button_buy: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
        };
        button_sell: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
        };
        button_danger: {
          fontSize: number;
          color: string;
          fontWeight: string;
        };
        button_line: {
          color: string;
        };
        button_brandOpposite: {
          fontSize: number;
          fontWeight: string;
          color: string;
        };
        button_leverage: {
          fontSize: number;
          fontWeight: string;
          color: string;
        };
        error: {
          color: string;
        };
        chartAxisText: {
          fontSize: number;
        };
        chartMarklineText: {
          fontSize: number;
          fontWeight: string;
        };
        riskIndicator: {
          fontSize: number;
          fontWeight: string;
          lineHeight: number;
        };
      };
      breakpoints: {
        small: number;
        medium: number;
        large: number;
      };
      viewVariants: {
        defaults: {};
        totalBalance: {
          backgroundColor: string;
          padding: string;
          borderTopWidth: number;
          borderBottomWidth: number;
          borderColor: string;
        };
        orderInputCurrency: {
          backgroundColor: string;
          padding: string;
          paddingHorizontal: string;
          borderRadius: number;
        };
      };
      cardVariants: {
        defaults: {
          borderRadius: number;
          backgroundColor: string;
        };
        elevated: {
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowColor: string;
          shadowOpacity: number;
          elevation: number;
        };
        floating: {
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowColor: string;
          shadowOpacity: number;
          elevation: number;
        };
      };
    }> & {
      borderBottomWidth?: import('@shopify/restyle').ResponsiveValue<
        number | undefined,
        {
          small: number;
          medium: number;
          large: number;
        }
      >;
      borderLeftWidth?: import('@shopify/restyle').ResponsiveValue<
        number | undefined,
        {
          small: number;
          medium: number;
          large: number;
        }
      >;
      borderRightWidth?: import('@shopify/restyle').ResponsiveValue<
        number | undefined,
        {
          small: number;
          medium: number;
          large: number;
        }
      >;
      borderStyle?: import('@shopify/restyle').ResponsiveValue<
        'solid' | 'dashed' | 'dotted' | undefined,
        {
          small: number;
          medium: number;
          large: number;
        }
      >;
      borderTopWidth?: import('@shopify/restyle').ResponsiveValue<
        number | undefined,
        {
          small: number;
          medium: number;
          large: number;
        }
      >;
      borderStartWidth?: import('@shopify/restyle').ResponsiveValue<
        number | undefined,
        {
          small: number;
          medium: number;
          large: number;
        }
      >;
      borderEndWidth?: import('@shopify/restyle').ResponsiveValue<
        number | undefined,
        {
          small: number;
          medium: number;
          large: number;
        }
      >;
      borderWidth?: import('@shopify/restyle').ResponsiveValue<
        number | undefined,
        {
          small: number;
          medium: number;
          large: number;
        }
      >;
    } & {
      borderColor?:
        | import('@shopify/restyle').ResponsiveValue<
            | 'brandSolid'
            | 'brandBackground'
            | 'brandDisabled'
            | 'brandGradientFrom'
            | 'brandGradientTo'
            | 'brandWGradientFrom'
            | 'brandWGradientTo'
            | 'buy'
            | 'buyDisabled'
            | 'sell'
            | 'sellDisabled'
            | 'positive'
            | 'reject'
            | 'error'
            | 'textPrimary'
            | 'textSecondary'
            | 'textDisabled'
            | 'textInverse'
            | 'formBorder'
            | 'formBackground'
            | 'onDark'
            | 'button2ndBackground'
            | 'button2ndBorder'
            | 'background1'
            | 'background2'
            | 'background3'
            | 'background4'
            | 'toolbarBlur'
            | 'border1'
            | 'border2'
            | 'border3'
            | 'border4'
            | 'black'
            | 'white'
            | 'transparent'
            | 'cryptoDefault'
            | 'positiveChange'
            | 'negativeChange'
            | 'success'
            | 'buttonSell'
            | 'shadowRed'
            | 'buttonBuy'
            | 'shadowGreen'
            | 'shadowGrey'
            | 'riskVeryLow'
            | 'riskLow'
            | 'riskMedium'
            | 'riskHigh'
            | 'riskVeryHigh',
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
      borderTopColor?:
        | import('@shopify/restyle').ResponsiveValue<
            | 'brandSolid'
            | 'brandBackground'
            | 'brandDisabled'
            | 'brandGradientFrom'
            | 'brandGradientTo'
            | 'brandWGradientFrom'
            | 'brandWGradientTo'
            | 'buy'
            | 'buyDisabled'
            | 'sell'
            | 'sellDisabled'
            | 'positive'
            | 'reject'
            | 'error'
            | 'textPrimary'
            | 'textSecondary'
            | 'textDisabled'
            | 'textInverse'
            | 'formBorder'
            | 'formBackground'
            | 'onDark'
            | 'button2ndBackground'
            | 'button2ndBorder'
            | 'background1'
            | 'background2'
            | 'background3'
            | 'background4'
            | 'toolbarBlur'
            | 'border1'
            | 'border2'
            | 'border3'
            | 'border4'
            | 'black'
            | 'white'
            | 'transparent'
            | 'cryptoDefault'
            | 'positiveChange'
            | 'negativeChange'
            | 'success'
            | 'buttonSell'
            | 'shadowRed'
            | 'buttonBuy'
            | 'shadowGreen'
            | 'shadowGrey'
            | 'riskVeryLow'
            | 'riskLow'
            | 'riskMedium'
            | 'riskHigh'
            | 'riskVeryHigh',
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
      borderRightColor?:
        | import('@shopify/restyle').ResponsiveValue<
            | 'brandSolid'
            | 'brandBackground'
            | 'brandDisabled'
            | 'brandGradientFrom'
            | 'brandGradientTo'
            | 'brandWGradientFrom'
            | 'brandWGradientTo'
            | 'buy'
            | 'buyDisabled'
            | 'sell'
            | 'sellDisabled'
            | 'positive'
            | 'reject'
            | 'error'
            | 'textPrimary'
            | 'textSecondary'
            | 'textDisabled'
            | 'textInverse'
            | 'formBorder'
            | 'formBackground'
            | 'onDark'
            | 'button2ndBackground'
            | 'button2ndBorder'
            | 'background1'
            | 'background2'
            | 'background3'
            | 'background4'
            | 'toolbarBlur'
            | 'border1'
            | 'border2'
            | 'border3'
            | 'border4'
            | 'black'
            | 'white'
            | 'transparent'
            | 'cryptoDefault'
            | 'positiveChange'
            | 'negativeChange'
            | 'success'
            | 'buttonSell'
            | 'shadowRed'
            | 'buttonBuy'
            | 'shadowGreen'
            | 'shadowGrey'
            | 'riskVeryLow'
            | 'riskLow'
            | 'riskMedium'
            | 'riskHigh'
            | 'riskVeryHigh',
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
      borderLeftColor?:
        | import('@shopify/restyle').ResponsiveValue<
            | 'brandSolid'
            | 'brandBackground'
            | 'brandDisabled'
            | 'brandGradientFrom'
            | 'brandGradientTo'
            | 'brandWGradientFrom'
            | 'brandWGradientTo'
            | 'buy'
            | 'buyDisabled'
            | 'sell'
            | 'sellDisabled'
            | 'positive'
            | 'reject'
            | 'error'
            | 'textPrimary'
            | 'textSecondary'
            | 'textDisabled'
            | 'textInverse'
            | 'formBorder'
            | 'formBackground'
            | 'onDark'
            | 'button2ndBackground'
            | 'button2ndBorder'
            | 'background1'
            | 'background2'
            | 'background3'
            | 'background4'
            | 'toolbarBlur'
            | 'border1'
            | 'border2'
            | 'border3'
            | 'border4'
            | 'black'
            | 'white'
            | 'transparent'
            | 'cryptoDefault'
            | 'positiveChange'
            | 'negativeChange'
            | 'success'
            | 'buttonSell'
            | 'shadowRed'
            | 'buttonBuy'
            | 'shadowGreen'
            | 'shadowGrey'
            | 'riskVeryLow'
            | 'riskLow'
            | 'riskMedium'
            | 'riskHigh'
            | 'riskVeryHigh',
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
      borderBottomColor?:
        | import('@shopify/restyle').ResponsiveValue<
            | 'brandSolid'
            | 'brandBackground'
            | 'brandDisabled'
            | 'brandGradientFrom'
            | 'brandGradientTo'
            | 'brandWGradientFrom'
            | 'brandWGradientTo'
            | 'buy'
            | 'buyDisabled'
            | 'sell'
            | 'sellDisabled'
            | 'positive'
            | 'reject'
            | 'error'
            | 'textPrimary'
            | 'textSecondary'
            | 'textDisabled'
            | 'textInverse'
            | 'formBorder'
            | 'formBackground'
            | 'onDark'
            | 'button2ndBackground'
            | 'button2ndBorder'
            | 'background1'
            | 'background2'
            | 'background3'
            | 'background4'
            | 'toolbarBlur'
            | 'border1'
            | 'border2'
            | 'border3'
            | 'border4'
            | 'black'
            | 'white'
            | 'transparent'
            | 'cryptoDefault'
            | 'positiveChange'
            | 'negativeChange'
            | 'success'
            | 'buttonSell'
            | 'shadowRed'
            | 'buttonBuy'
            | 'shadowGreen'
            | 'shadowGrey'
            | 'riskVeryLow'
            | 'riskLow'
            | 'riskMedium'
            | 'riskHigh'
            | 'riskVeryHigh',
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
      borderStartColor?:
        | import('@shopify/restyle').ResponsiveValue<
            | 'brandSolid'
            | 'brandBackground'
            | 'brandDisabled'
            | 'brandGradientFrom'
            | 'brandGradientTo'
            | 'brandWGradientFrom'
            | 'brandWGradientTo'
            | 'buy'
            | 'buyDisabled'
            | 'sell'
            | 'sellDisabled'
            | 'positive'
            | 'reject'
            | 'error'
            | 'textPrimary'
            | 'textSecondary'
            | 'textDisabled'
            | 'textInverse'
            | 'formBorder'
            | 'formBackground'
            | 'onDark'
            | 'button2ndBackground'
            | 'button2ndBorder'
            | 'background1'
            | 'background2'
            | 'background3'
            | 'background4'
            | 'toolbarBlur'
            | 'border1'
            | 'border2'
            | 'border3'
            | 'border4'
            | 'black'
            | 'white'
            | 'transparent'
            | 'cryptoDefault'
            | 'positiveChange'
            | 'negativeChange'
            | 'success'
            | 'buttonSell'
            | 'shadowRed'
            | 'buttonBuy'
            | 'shadowGreen'
            | 'shadowGrey'
            | 'riskVeryLow'
            | 'riskLow'
            | 'riskMedium'
            | 'riskHigh'
            | 'riskVeryHigh',
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
      borderEndColor?:
        | import('@shopify/restyle').ResponsiveValue<
            | 'brandSolid'
            | 'brandBackground'
            | 'brandDisabled'
            | 'brandGradientFrom'
            | 'brandGradientTo'
            | 'brandWGradientFrom'
            | 'brandWGradientTo'
            | 'buy'
            | 'buyDisabled'
            | 'sell'
            | 'sellDisabled'
            | 'positive'
            | 'reject'
            | 'error'
            | 'textPrimary'
            | 'textSecondary'
            | 'textDisabled'
            | 'textInverse'
            | 'formBorder'
            | 'formBackground'
            | 'onDark'
            | 'button2ndBackground'
            | 'button2ndBorder'
            | 'background1'
            | 'background2'
            | 'background3'
            | 'background4'
            | 'toolbarBlur'
            | 'border1'
            | 'border2'
            | 'border3'
            | 'border4'
            | 'black'
            | 'white'
            | 'transparent'
            | 'cryptoDefault'
            | 'positiveChange'
            | 'negativeChange'
            | 'success'
            | 'buttonSell'
            | 'shadowRed'
            | 'buttonBuy'
            | 'shadowGreen'
            | 'shadowGrey'
            | 'riskVeryLow'
            | 'riskLow'
            | 'riskMedium'
            | 'riskHigh'
            | 'riskVeryHigh',
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
    } & {
      borderRadius?:
        | import('@shopify/restyle').ResponsiveValue<
            number,
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
      borderBottomLeftRadius?:
        | import('@shopify/restyle').ResponsiveValue<
            number,
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
      borderBottomRightRadius?:
        | import('@shopify/restyle').ResponsiveValue<
            number,
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
      borderTopLeftRadius?:
        | import('@shopify/restyle').ResponsiveValue<
            number,
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
      borderTopRightRadius?:
        | import('@shopify/restyle').ResponsiveValue<
            number,
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
      borderBottomStartRadius?:
        | import('@shopify/restyle').ResponsiveValue<
            number,
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
      borderBottomEndRadius?:
        | import('@shopify/restyle').ResponsiveValue<
            number,
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
      borderTopStartRadius?:
        | import('@shopify/restyle').ResponsiveValue<
            number,
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
      borderTopEndRadius?:
        | import('@shopify/restyle').ResponsiveValue<
            number,
            {
              small: number;
              medium: number;
              large: number;
            }
          >
        | undefined;
    } & LayoutProps<{
      colors: {
        brandSolid: string;
        brandBackground: string;
        brandDisabled: string;
        brandGradientFrom: string;
        brandGradientTo: string;
        brandWGradientFrom: string;
        brandWGradientTo: string;
        buy: string;
        buyDisabled: string;
        sell: string;
        sellDisabled: string;
        positive: string;
        reject: string;
        error: string;
        textPrimary: string;
        textSecondary: string;
        textDisabled: string;
        textInverse: string;
        formBorder: string;
        formBackground: string;
        onDark: string;
        button2ndBackground: string;
        button2ndBorder: string;
        background1: string;
        background2: string;
        background3: string;
        background4: string;
        toolbarBlur: string;
        border1: string;
        border2: string;
        border3: string;
        border4: string;
        black: string;
        white: string;
        transparent: string;
        cryptoDefault: string;
        positiveChange: string;
        negativeChange: string;
        success: string;
        buttonSell: string;
        shadowRed: string;
        buttonBuy: string;
        shadowGreen: string;
        shadowGrey: string;
        riskVeryLow: string;
        riskLow: string;
        riskMedium: string;
        riskHigh: string;
        riskVeryHigh: string;
      };
      spacing: {
        none: number;
        xxs: number;
        xs: number;
        s: number;
        sm: number;
        m: number;
        l: number;
        xl: number;
        lg: number;
      };
      buttonVariants: {
        brandOpposite: {
          backgroundColor: string;
          borderColor: string;
          borderWidth: number;
          borderRadius: number;
          shadowRadius: number;
          shadowOpacity: number;
        };
        primary: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        secondary: {
          backgroundColor: string;
          borderColor: string;
          borderWidth: number;
        };
        buy: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        sell: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        danger: {
          backgroundColor: string;
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          shadowColor: string;
        };
        line: {
          backgroundColor: string;
          alignItems: string;
          justifyContent: string;
          borderWidth: number;
          borderColor: string;
          borderRadius: number;
        };
        transparent: {
          backgroundColor: string;
          borderColor: string;
          marginVertical: string;
        };
        leverage: {
          backgroundColor: string;
        };
      };
      textVariants: {
        defaults: {
          fontFamily: string;
          fontSize: number;
          lineHeight: number;
          color: string;
        };
        textBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
          color: string;
        };
        headlineBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
        };
        headlineReg: {
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
        };
        subHeadlineBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
        };
        subHeadlineReg: {
          fontSize: number;
          color: string;
          lineHeight: number;
          fontWeight: string;
          letterSpacing: number;
        };
        bodyReg: {
          fontSize: number;
          lineHeight: number;
        };
        bodyBold: {
          fontWeight: string;
          fontSize: number;
          lineHeight: number;
        };
        captionBold: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
        };
        captionReg: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
        };
        button_primary: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
          marginLeft: string;
        };
        button_transparent: {
          fontSize: number;
          fontWeight: string;
          color: string;
        };
        button_secondary: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
        };
        button_buy: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
        };
        button_sell: {
          fontSize: number;
          lineHeight: number;
          fontWeight: string;
          color: string;
        };
        button_danger: {
          fontSize: number;
          color: string;
          fontWeight: string;
        };
        button_line: {
          color: string;
        };
        button_brandOpposite: {
          fontSize: number;
          fontWeight: string;
          color: string;
        };
        button_leverage: {
          fontSize: number;
          fontWeight: string;
          color: string;
        };
        error: {
          color: string;
        };
        chartAxisText: {
          fontSize: number;
        };
        chartMarklineText: {
          fontSize: number;
          fontWeight: string;
        };
        riskIndicator: {
          fontSize: number;
          fontWeight: string;
          lineHeight: number;
        };
      };
      breakpoints: {
        small: number;
        medium: number;
        large: number;
      };
      viewVariants: {
        defaults: {};
        totalBalance: {
          backgroundColor: string;
          padding: string;
          borderTopWidth: number;
          borderBottomWidth: number;
          borderColor: string;
        };
        orderInputCurrency: {
          backgroundColor: string;
          padding: string;
          paddingHorizontal: string;
          borderRadius: number;
        };
      };
      cardVariants: {
        defaults: {
          borderRadius: number;
          backgroundColor: string;
        };
        elevated: {
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowColor: string;
          shadowOpacity: number;
          elevation: number;
        };
        floating: {
          shadowOffset: {
            width: number;
            height: number;
          };
          shadowRadius: number;
          shadowColor: string;
          shadowOpacity: number;
          elevation: number;
        };
      };
    }> &
    RNViewProps &
    import('react').RefAttributes<unknown>
> & {
  defaultProps?:
    | Partial<
        VariantProps<
          {
            colors: {
              brandSolid: string;
              brandBackground: string;
              brandDisabled: string;
              brandGradientFrom: string;
              brandGradientTo: string;
              brandWGradientFrom: string;
              brandWGradientTo: string;
              buy: string;
              buyDisabled: string;
              sell: string;
              sellDisabled: string;
              positive: string;
              reject: string;
              error: string;
              textPrimary: string;
              textSecondary: string;
              textDisabled: string;
              textInverse: string;
              formBorder: string;
              formBackground: string;
              onDark: string;
              button2ndBackground: string;
              button2ndBorder: string;
              background1: string;
              background2: string;
              background3: string;
              background4: string;
              toolbarBlur: string;
              border1: string;
              border2: string;
              border3: string;
              border4: string;
              black: string;
              white: string;
              transparent: string;
              cryptoDefault: string;
              positiveChange: string;
              negativeChange: string;
              success: string;
              buttonSell: string;
              shadowRed: string;
              buttonBuy: string;
              shadowGreen: string;
              shadowGrey: string;
              riskVeryLow: string;
              riskLow: string;
              riskMedium: string;
              riskHigh: string;
              riskVeryHigh: string;
            };
            spacing: {
              none: number;
              xxs: number;
              xs: number;
              s: number;
              sm: number;
              m: number;
              l: number;
              xl: number;
              lg: number;
            };
            buttonVariants: {
              brandOpposite: {
                backgroundColor: string;
                borderColor: string;
                borderWidth: number;
                borderRadius: number;
                shadowRadius: number;
                shadowOpacity: number;
              };
              primary: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              secondary: {
                backgroundColor: string;
                borderColor: string;
                borderWidth: number;
              };
              buy: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              sell: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              danger: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              line: {
                backgroundColor: string;
                alignItems: string;
                justifyContent: string;
                borderWidth: number;
                borderColor: string;
                borderRadius: number;
              };
              transparent: {
                backgroundColor: string;
                borderColor: string;
                marginVertical: string;
              };
              leverage: {
                backgroundColor: string;
              };
            };
            textVariants: {
              defaults: {
                fontFamily: string;
                fontSize: number;
                lineHeight: number;
                color: string;
              };
              textBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
                color: string;
              };
              headlineBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
              };
              headlineReg: {
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
              };
              subHeadlineBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
              };
              subHeadlineReg: {
                fontSize: number;
                color: string;
                lineHeight: number;
                fontWeight: string;
                letterSpacing: number;
              };
              bodyReg: {
                fontSize: number;
                lineHeight: number;
              };
              bodyBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
              };
              captionBold: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
              };
              captionReg: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
              };
              button_primary: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
                marginLeft: string;
              };
              button_transparent: {
                fontSize: number;
                fontWeight: string;
                color: string;
              };
              button_secondary: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
              };
              button_buy: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
              };
              button_sell: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
              };
              button_danger: {
                fontSize: number;
                color: string;
                fontWeight: string;
              };
              button_line: {
                color: string;
              };
              button_brandOpposite: {
                fontSize: number;
                fontWeight: string;
                color: string;
              };
              button_leverage: {
                fontSize: number;
                fontWeight: string;
                color: string;
              };
              error: {
                color: string;
              };
              chartAxisText: {
                fontSize: number;
              };
              chartMarklineText: {
                fontSize: number;
                fontWeight: string;
              };
              riskIndicator: {
                fontSize: number;
                fontWeight: string;
                lineHeight: number;
              };
            };
            breakpoints: {
              small: number;
              medium: number;
              large: number;
            };
            viewVariants: {
              defaults: {};
              totalBalance: {
                backgroundColor: string;
                padding: string;
                borderTopWidth: number;
                borderBottomWidth: number;
                borderColor: string;
              };
              orderInputCurrency: {
                backgroundColor: string;
                padding: string;
                paddingHorizontal: string;
                borderRadius: number;
              };
            };
            cardVariants: {
              defaults: {
                borderRadius: number;
                backgroundColor: string;
              };
              elevated: {
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowColor: string;
                shadowOpacity: number;
                elevation: number;
              };
              floating: {
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowColor: string;
                shadowOpacity: number;
                elevation: number;
              };
            };
          },
          'viewVariants'
        > &
          SpacingProps<{
            colors: {
              brandSolid: string;
              brandBackground: string;
              brandDisabled: string;
              brandGradientFrom: string;
              brandGradientTo: string;
              brandWGradientFrom: string;
              brandWGradientTo: string;
              buy: string;
              buyDisabled: string;
              sell: string;
              sellDisabled: string;
              positive: string;
              reject: string;
              error: string;
              textPrimary: string;
              textSecondary: string;
              textDisabled: string;
              textInverse: string;
              formBorder: string;
              formBackground: string;
              onDark: string;
              button2ndBackground: string;
              button2ndBorder: string;
              background1: string;
              background2: string;
              background3: string;
              background4: string;
              toolbarBlur: string;
              border1: string;
              border2: string;
              border3: string;
              border4: string;
              black: string;
              white: string;
              transparent: string;
              cryptoDefault: string;
              positiveChange: string;
              negativeChange: string;
              success: string;
              buttonSell: string;
              shadowRed: string;
              buttonBuy: string;
              shadowGreen: string;
              shadowGrey: string;
              riskVeryLow: string;
              riskLow: string;
              riskMedium: string;
              riskHigh: string;
              riskVeryHigh: string;
            };
            spacing: {
              none: number;
              xxs: number;
              xs: number;
              s: number;
              sm: number;
              m: number;
              l: number;
              xl: number;
              lg: number;
            };
            buttonVariants: {
              brandOpposite: {
                backgroundColor: string;
                borderColor: string;
                borderWidth: number;
                borderRadius: number;
                shadowRadius: number;
                shadowOpacity: number;
              };
              primary: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              secondary: {
                backgroundColor: string;
                borderColor: string;
                borderWidth: number;
              };
              buy: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              sell: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              danger: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              line: {
                backgroundColor: string;
                alignItems: string;
                justifyContent: string;
                borderWidth: number;
                borderColor: string;
                borderRadius: number;
              };
              transparent: {
                backgroundColor: string;
                borderColor: string;
                marginVertical: string;
              };
              leverage: {
                backgroundColor: string;
              };
            };
            textVariants: {
              defaults: {
                fontFamily: string;
                fontSize: number;
                lineHeight: number;
                color: string;
              };
              textBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
                color: string;
              };
              headlineBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
              };
              headlineReg: {
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
              };
              subHeadlineBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
              };
              subHeadlineReg: {
                fontSize: number;
                color: string;
                lineHeight: number;
                fontWeight: string;
                letterSpacing: number;
              };
              bodyReg: {
                fontSize: number;
                lineHeight: number;
              };
              bodyBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
              };
              captionBold: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
              };
              captionReg: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
              };
              button_primary: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
                marginLeft: string;
              };
              button_transparent: {
                fontSize: number;
                fontWeight: string;
                color: string;
              };
              button_secondary: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
              };
              button_buy: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
              };
              button_sell: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
              };
              button_danger: {
                fontSize: number;
                color: string;
                fontWeight: string;
              };
              button_line: {
                color: string;
              };
              button_brandOpposite: {
                fontSize: number;
                fontWeight: string;
                color: string;
              };
              button_leverage: {
                fontSize: number;
                fontWeight: string;
                color: string;
              };
              error: {
                color: string;
              };
              chartAxisText: {
                fontSize: number;
              };
              chartMarklineText: {
                fontSize: number;
                fontWeight: string;
              };
              riskIndicator: {
                fontSize: number;
                fontWeight: string;
                lineHeight: number;
              };
            };
            breakpoints: {
              small: number;
              medium: number;
              large: number;
            };
            viewVariants: {
              defaults: {};
              totalBalance: {
                backgroundColor: string;
                padding: string;
                borderTopWidth: number;
                borderBottomWidth: number;
                borderColor: string;
              };
              orderInputCurrency: {
                backgroundColor: string;
                padding: string;
                paddingHorizontal: string;
                borderRadius: number;
              };
            };
            cardVariants: {
              defaults: {
                borderRadius: number;
                backgroundColor: string;
              };
              elevated: {
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowColor: string;
                shadowOpacity: number;
                elevation: number;
              };
              floating: {
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowColor: string;
                shadowOpacity: number;
                elevation: number;
              };
            };
          }> &
          SpacingShorthandProps<{
            colors: {
              brandSolid: string;
              brandBackground: string;
              brandDisabled: string;
              brandGradientFrom: string;
              brandGradientTo: string;
              brandWGradientFrom: string;
              brandWGradientTo: string;
              buy: string;
              buyDisabled: string;
              sell: string;
              sellDisabled: string;
              positive: string;
              reject: string;
              error: string;
              textPrimary: string;
              textSecondary: string;
              textDisabled: string;
              textInverse: string;
              formBorder: string;
              formBackground: string;
              onDark: string;
              button2ndBackground: string;
              button2ndBorder: string;
              background1: string;
              background2: string;
              background3: string;
              background4: string;
              toolbarBlur: string;
              border1: string;
              border2: string;
              border3: string;
              border4: string;
              black: string;
              white: string;
              transparent: string;
              cryptoDefault: string;
              positiveChange: string;
              negativeChange: string;
              success: string;
              buttonSell: string;
              shadowRed: string;
              buttonBuy: string;
              shadowGreen: string;
              shadowGrey: string;
              riskVeryLow: string;
              riskLow: string;
              riskMedium: string;
              riskHigh: string;
              riskVeryHigh: string;
            };
            spacing: {
              none: number;
              xxs: number;
              xs: number;
              s: number;
              sm: number;
              m: number;
              l: number;
              xl: number;
              lg: number;
            };
            buttonVariants: {
              brandOpposite: {
                backgroundColor: string;
                borderColor: string;
                borderWidth: number;
                borderRadius: number;
                shadowRadius: number;
                shadowOpacity: number;
              };
              primary: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              secondary: {
                backgroundColor: string;
                borderColor: string;
                borderWidth: number;
              };
              buy: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              sell: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              danger: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              line: {
                backgroundColor: string;
                alignItems: string;
                justifyContent: string;
                borderWidth: number;
                borderColor: string;
                borderRadius: number;
              };
              transparent: {
                backgroundColor: string;
                borderColor: string;
                marginVertical: string;
              };
              leverage: {
                backgroundColor: string;
              };
            };
            textVariants: {
              defaults: {
                fontFamily: string;
                fontSize: number;
                lineHeight: number;
                color: string;
              };
              textBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
                color: string;
              };
              headlineBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
              };
              headlineReg: {
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
              };
              subHeadlineBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
              };
              subHeadlineReg: {
                fontSize: number;
                color: string;
                lineHeight: number;
                fontWeight: string;
                letterSpacing: number;
              };
              bodyReg: {
                fontSize: number;
                lineHeight: number;
              };
              bodyBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
              };
              captionBold: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
              };
              captionReg: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
              };
              button_primary: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
                marginLeft: string;
              };
              button_transparent: {
                fontSize: number;
                fontWeight: string;
                color: string;
              };
              button_secondary: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
              };
              button_buy: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
              };
              button_sell: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
              };
              button_danger: {
                fontSize: number;
                color: string;
                fontWeight: string;
              };
              button_line: {
                color: string;
              };
              button_brandOpposite: {
                fontSize: number;
                fontWeight: string;
                color: string;
              };
              button_leverage: {
                fontSize: number;
                fontWeight: string;
                color: string;
              };
              error: {
                color: string;
              };
              chartAxisText: {
                fontSize: number;
              };
              chartMarklineText: {
                fontSize: number;
                fontWeight: string;
              };
              riskIndicator: {
                fontSize: number;
                fontWeight: string;
                lineHeight: number;
              };
            };
            breakpoints: {
              small: number;
              medium: number;
              large: number;
            };
            viewVariants: {
              defaults: {};
              totalBalance: {
                backgroundColor: string;
                padding: string;
                borderTopWidth: number;
                borderBottomWidth: number;
                borderColor: string;
              };
              orderInputCurrency: {
                backgroundColor: string;
                padding: string;
                paddingHorizontal: string;
                borderRadius: number;
              };
            };
            cardVariants: {
              defaults: {
                borderRadius: number;
                backgroundColor: string;
              };
              elevated: {
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowColor: string;
                shadowOpacity: number;
                elevation: number;
              };
              floating: {
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowColor: string;
                shadowOpacity: number;
                elevation: number;
              };
            };
          }> &
          BackgroundColorProps<{
            colors: {
              brandSolid: string;
              brandBackground: string;
              brandDisabled: string;
              brandGradientFrom: string;
              brandGradientTo: string;
              brandWGradientFrom: string;
              brandWGradientTo: string;
              buy: string;
              buyDisabled: string;
              sell: string;
              sellDisabled: string;
              positive: string;
              reject: string;
              error: string;
              textPrimary: string;
              textSecondary: string;
              textDisabled: string;
              textInverse: string;
              formBorder: string;
              formBackground: string;
              onDark: string;
              button2ndBackground: string;
              button2ndBorder: string;
              background1: string;
              background2: string;
              background3: string;
              background4: string;
              toolbarBlur: string;
              border1: string;
              border2: string;
              border3: string;
              border4: string;
              black: string;
              white: string;
              transparent: string;
              cryptoDefault: string;
              positiveChange: string;
              negativeChange: string;
              success: string;
              buttonSell: string;
              shadowRed: string;
              buttonBuy: string;
              shadowGreen: string;
              shadowGrey: string;
              riskVeryLow: string;
              riskLow: string;
              riskMedium: string;
              riskHigh: string;
              riskVeryHigh: string;
            };
            spacing: {
              none: number;
              xxs: number;
              xs: number;
              s: number;
              sm: number;
              m: number;
              l: number;
              xl: number;
              lg: number;
            };
            buttonVariants: {
              brandOpposite: {
                backgroundColor: string;
                borderColor: string;
                borderWidth: number;
                borderRadius: number;
                shadowRadius: number;
                shadowOpacity: number;
              };
              primary: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              secondary: {
                backgroundColor: string;
                borderColor: string;
                borderWidth: number;
              };
              buy: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              sell: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              danger: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              line: {
                backgroundColor: string;
                alignItems: string;
                justifyContent: string;
                borderWidth: number;
                borderColor: string;
                borderRadius: number;
              };
              transparent: {
                backgroundColor: string;
                borderColor: string;
                marginVertical: string;
              };
              leverage: {
                backgroundColor: string;
              };
            };
            textVariants: {
              defaults: {
                fontFamily: string;
                fontSize: number;
                lineHeight: number;
                color: string;
              };
              textBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
                color: string;
              };
              headlineBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
              };
              headlineReg: {
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
              };
              subHeadlineBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
              };
              subHeadlineReg: {
                fontSize: number;
                color: string;
                lineHeight: number;
                fontWeight: string;
                letterSpacing: number;
              };
              bodyReg: {
                fontSize: number;
                lineHeight: number;
              };
              bodyBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
              };
              captionBold: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
              };
              captionReg: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
              };
              button_primary: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
                marginLeft: string;
              };
              button_transparent: {
                fontSize: number;
                fontWeight: string;
                color: string;
              };
              button_secondary: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
              };
              button_buy: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
              };
              button_sell: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
              };
              button_danger: {
                fontSize: number;
                color: string;
                fontWeight: string;
              };
              button_line: {
                color: string;
              };
              button_brandOpposite: {
                fontSize: number;
                fontWeight: string;
                color: string;
              };
              button_leverage: {
                fontSize: number;
                fontWeight: string;
                color: string;
              };
              error: {
                color: string;
              };
              chartAxisText: {
                fontSize: number;
              };
              chartMarklineText: {
                fontSize: number;
                fontWeight: string;
              };
              riskIndicator: {
                fontSize: number;
                fontWeight: string;
                lineHeight: number;
              };
            };
            breakpoints: {
              small: number;
              medium: number;
              large: number;
            };
            viewVariants: {
              defaults: {};
              totalBalance: {
                backgroundColor: string;
                padding: string;
                borderTopWidth: number;
                borderBottomWidth: number;
                borderColor: string;
              };
              orderInputCurrency: {
                backgroundColor: string;
                padding: string;
                paddingHorizontal: string;
                borderRadius: number;
              };
            };
            cardVariants: {
              defaults: {
                borderRadius: number;
                backgroundColor: string;
              };
              elevated: {
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowColor: string;
                shadowOpacity: number;
                elevation: number;
              };
              floating: {
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowColor: string;
                shadowOpacity: number;
                elevation: number;
              };
            };
          }> & {
            borderBottomWidth?: import('@shopify/restyle').ResponsiveValue<
              number | undefined,
              {
                small: number;
                medium: number;
                large: number;
              }
            >;
            borderLeftWidth?: import('@shopify/restyle').ResponsiveValue<
              number | undefined,
              {
                small: number;
                medium: number;
                large: number;
              }
            >;
            borderRightWidth?: import('@shopify/restyle').ResponsiveValue<
              number | undefined,
              {
                small: number;
                medium: number;
                large: number;
              }
            >;
            borderStyle?: import('@shopify/restyle').ResponsiveValue<
              'solid' | 'dashed' | 'dotted' | undefined,
              {
                small: number;
                medium: number;
                large: number;
              }
            >;
            borderTopWidth?: import('@shopify/restyle').ResponsiveValue<
              number | undefined,
              {
                small: number;
                medium: number;
                large: number;
              }
            >;
            borderStartWidth?: import('@shopify/restyle').ResponsiveValue<
              number | undefined,
              {
                small: number;
                medium: number;
                large: number;
              }
            >;
            borderEndWidth?: import('@shopify/restyle').ResponsiveValue<
              number | undefined,
              {
                small: number;
                medium: number;
                large: number;
              }
            >;
            borderWidth?: import('@shopify/restyle').ResponsiveValue<
              number | undefined,
              {
                small: number;
                medium: number;
                large: number;
              }
            >;
          } & {
            borderColor?:
              | import('@shopify/restyle').ResponsiveValue<
                  | 'brandSolid'
                  | 'brandBackground'
                  | 'brandDisabled'
                  | 'brandGradientFrom'
                  | 'brandGradientTo'
                  | 'brandWGradientFrom'
                  | 'brandWGradientTo'
                  | 'buy'
                  | 'buyDisabled'
                  | 'sell'
                  | 'sellDisabled'
                  | 'positive'
                  | 'reject'
                  | 'error'
                  | 'textPrimary'
                  | 'textSecondary'
                  | 'textDisabled'
                  | 'textInverse'
                  | 'formBorder'
                  | 'formBackground'
                  | 'onDark'
                  | 'button2ndBackground'
                  | 'button2ndBorder'
                  | 'background1'
                  | 'background2'
                  | 'background3'
                  | 'background4'
                  | 'toolbarBlur'
                  | 'border1'
                  | 'border2'
                  | 'border3'
                  | 'border4'
                  | 'black'
                  | 'white'
                  | 'transparent'
                  | 'cryptoDefault'
                  | 'positiveChange'
                  | 'negativeChange'
                  | 'success'
                  | 'buttonSell'
                  | 'shadowRed'
                  | 'buttonBuy'
                  | 'shadowGreen'
                  | 'shadowGrey'
                  | 'riskVeryLow'
                  | 'riskLow'
                  | 'riskMedium'
                  | 'riskHigh'
                  | 'riskVeryHigh',
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
            borderTopColor?:
              | import('@shopify/restyle').ResponsiveValue<
                  | 'brandSolid'
                  | 'brandBackground'
                  | 'brandDisabled'
                  | 'brandGradientFrom'
                  | 'brandGradientTo'
                  | 'brandWGradientFrom'
                  | 'brandWGradientTo'
                  | 'buy'
                  | 'buyDisabled'
                  | 'sell'
                  | 'sellDisabled'
                  | 'positive'
                  | 'reject'
                  | 'error'
                  | 'textPrimary'
                  | 'textSecondary'
                  | 'textDisabled'
                  | 'textInverse'
                  | 'formBorder'
                  | 'formBackground'
                  | 'onDark'
                  | 'button2ndBackground'
                  | 'button2ndBorder'
                  | 'background1'
                  | 'background2'
                  | 'background3'
                  | 'background4'
                  | 'toolbarBlur'
                  | 'border1'
                  | 'border2'
                  | 'border3'
                  | 'border4'
                  | 'black'
                  | 'white'
                  | 'transparent'
                  | 'cryptoDefault'
                  | 'positiveChange'
                  | 'negativeChange'
                  | 'success'
                  | 'buttonSell'
                  | 'shadowRed'
                  | 'buttonBuy'
                  | 'shadowGreen'
                  | 'shadowGrey'
                  | 'riskVeryLow'
                  | 'riskLow'
                  | 'riskMedium'
                  | 'riskHigh'
                  | 'riskVeryHigh',
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
            borderRightColor?:
              | import('@shopify/restyle').ResponsiveValue<
                  | 'brandSolid'
                  | 'brandBackground'
                  | 'brandDisabled'
                  | 'brandGradientFrom'
                  | 'brandGradientTo'
                  | 'brandWGradientFrom'
                  | 'brandWGradientTo'
                  | 'buy'
                  | 'buyDisabled'
                  | 'sell'
                  | 'sellDisabled'
                  | 'positive'
                  | 'reject'
                  | 'error'
                  | 'textPrimary'
                  | 'textSecondary'
                  | 'textDisabled'
                  | 'textInverse'
                  | 'formBorder'
                  | 'formBackground'
                  | 'onDark'
                  | 'button2ndBackground'
                  | 'button2ndBorder'
                  | 'background1'
                  | 'background2'
                  | 'background3'
                  | 'background4'
                  | 'toolbarBlur'
                  | 'border1'
                  | 'border2'
                  | 'border3'
                  | 'border4'
                  | 'black'
                  | 'white'
                  | 'transparent'
                  | 'cryptoDefault'
                  | 'positiveChange'
                  | 'negativeChange'
                  | 'success'
                  | 'buttonSell'
                  | 'shadowRed'
                  | 'buttonBuy'
                  | 'shadowGreen'
                  | 'shadowGrey'
                  | 'riskVeryLow'
                  | 'riskLow'
                  | 'riskMedium'
                  | 'riskHigh'
                  | 'riskVeryHigh',
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
            borderLeftColor?:
              | import('@shopify/restyle').ResponsiveValue<
                  | 'brandSolid'
                  | 'brandBackground'
                  | 'brandDisabled'
                  | 'brandGradientFrom'
                  | 'brandGradientTo'
                  | 'brandWGradientFrom'
                  | 'brandWGradientTo'
                  | 'buy'
                  | 'buyDisabled'
                  | 'sell'
                  | 'sellDisabled'
                  | 'positive'
                  | 'reject'
                  | 'error'
                  | 'textPrimary'
                  | 'textSecondary'
                  | 'textDisabled'
                  | 'textInverse'
                  | 'formBorder'
                  | 'formBackground'
                  | 'onDark'
                  | 'button2ndBackground'
                  | 'button2ndBorder'
                  | 'background1'
                  | 'background2'
                  | 'background3'
                  | 'background4'
                  | 'toolbarBlur'
                  | 'border1'
                  | 'border2'
                  | 'border3'
                  | 'border4'
                  | 'black'
                  | 'white'
                  | 'transparent'
                  | 'cryptoDefault'
                  | 'positiveChange'
                  | 'negativeChange'
                  | 'success'
                  | 'buttonSell'
                  | 'shadowRed'
                  | 'buttonBuy'
                  | 'shadowGreen'
                  | 'shadowGrey'
                  | 'riskVeryLow'
                  | 'riskLow'
                  | 'riskMedium'
                  | 'riskHigh'
                  | 'riskVeryHigh',
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
            borderBottomColor?:
              | import('@shopify/restyle').ResponsiveValue<
                  | 'brandSolid'
                  | 'brandBackground'
                  | 'brandDisabled'
                  | 'brandGradientFrom'
                  | 'brandGradientTo'
                  | 'brandWGradientFrom'
                  | 'brandWGradientTo'
                  | 'buy'
                  | 'buyDisabled'
                  | 'sell'
                  | 'sellDisabled'
                  | 'positive'
                  | 'reject'
                  | 'error'
                  | 'textPrimary'
                  | 'textSecondary'
                  | 'textDisabled'
                  | 'textInverse'
                  | 'formBorder'
                  | 'formBackground'
                  | 'onDark'
                  | 'button2ndBackground'
                  | 'button2ndBorder'
                  | 'background1'
                  | 'background2'
                  | 'background3'
                  | 'background4'
                  | 'toolbarBlur'
                  | 'border1'
                  | 'border2'
                  | 'border3'
                  | 'border4'
                  | 'black'
                  | 'white'
                  | 'transparent'
                  | 'cryptoDefault'
                  | 'positiveChange'
                  | 'negativeChange'
                  | 'success'
                  | 'buttonSell'
                  | 'shadowRed'
                  | 'buttonBuy'
                  | 'shadowGreen'
                  | 'shadowGrey'
                  | 'riskVeryLow'
                  | 'riskLow'
                  | 'riskMedium'
                  | 'riskHigh'
                  | 'riskVeryHigh',
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
            borderStartColor?:
              | import('@shopify/restyle').ResponsiveValue<
                  | 'brandSolid'
                  | 'brandBackground'
                  | 'brandDisabled'
                  | 'brandGradientFrom'
                  | 'brandGradientTo'
                  | 'brandWGradientFrom'
                  | 'brandWGradientTo'
                  | 'buy'
                  | 'buyDisabled'
                  | 'sell'
                  | 'sellDisabled'
                  | 'positive'
                  | 'reject'
                  | 'error'
                  | 'textPrimary'
                  | 'textSecondary'
                  | 'textDisabled'
                  | 'textInverse'
                  | 'formBorder'
                  | 'formBackground'
                  | 'onDark'
                  | 'button2ndBackground'
                  | 'button2ndBorder'
                  | 'background1'
                  | 'background2'
                  | 'background3'
                  | 'background4'
                  | 'toolbarBlur'
                  | 'border1'
                  | 'border2'
                  | 'border3'
                  | 'border4'
                  | 'black'
                  | 'white'
                  | 'transparent'
                  | 'cryptoDefault'
                  | 'positiveChange'
                  | 'negativeChange'
                  | 'success'
                  | 'buttonSell'
                  | 'shadowRed'
                  | 'buttonBuy'
                  | 'shadowGreen'
                  | 'shadowGrey'
                  | 'riskVeryLow'
                  | 'riskLow'
                  | 'riskMedium'
                  | 'riskHigh'
                  | 'riskVeryHigh',
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
            borderEndColor?:
              | import('@shopify/restyle').ResponsiveValue<
                  | 'brandSolid'
                  | 'brandBackground'
                  | 'brandDisabled'
                  | 'brandGradientFrom'
                  | 'brandGradientTo'
                  | 'brandWGradientFrom'
                  | 'brandWGradientTo'
                  | 'buy'
                  | 'buyDisabled'
                  | 'sell'
                  | 'sellDisabled'
                  | 'positive'
                  | 'reject'
                  | 'error'
                  | 'textPrimary'
                  | 'textSecondary'
                  | 'textDisabled'
                  | 'textInverse'
                  | 'formBorder'
                  | 'formBackground'
                  | 'onDark'
                  | 'button2ndBackground'
                  | 'button2ndBorder'
                  | 'background1'
                  | 'background2'
                  | 'background3'
                  | 'background4'
                  | 'toolbarBlur'
                  | 'border1'
                  | 'border2'
                  | 'border3'
                  | 'border4'
                  | 'black'
                  | 'white'
                  | 'transparent'
                  | 'cryptoDefault'
                  | 'positiveChange'
                  | 'negativeChange'
                  | 'success'
                  | 'buttonSell'
                  | 'shadowRed'
                  | 'buttonBuy'
                  | 'shadowGreen'
                  | 'shadowGrey'
                  | 'riskVeryLow'
                  | 'riskLow'
                  | 'riskMedium'
                  | 'riskHigh'
                  | 'riskVeryHigh',
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
          } & {
            borderRadius?:
              | import('@shopify/restyle').ResponsiveValue<
                  number,
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
            borderBottomLeftRadius?:
              | import('@shopify/restyle').ResponsiveValue<
                  number,
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
            borderBottomRightRadius?:
              | import('@shopify/restyle').ResponsiveValue<
                  number,
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
            borderTopLeftRadius?:
              | import('@shopify/restyle').ResponsiveValue<
                  number,
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
            borderTopRightRadius?:
              | import('@shopify/restyle').ResponsiveValue<
                  number,
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
            borderBottomStartRadius?:
              | import('@shopify/restyle').ResponsiveValue<
                  number,
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
            borderBottomEndRadius?:
              | import('@shopify/restyle').ResponsiveValue<
                  number,
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
            borderTopStartRadius?:
              | import('@shopify/restyle').ResponsiveValue<
                  number,
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
            borderTopEndRadius?:
              | import('@shopify/restyle').ResponsiveValue<
                  number,
                  {
                    small: number;
                    medium: number;
                    large: number;
                  }
                >
              | undefined;
          } & LayoutProps<{
            colors: {
              brandSolid: string;
              brandBackground: string;
              brandDisabled: string;
              brandGradientFrom: string;
              brandGradientTo: string;
              brandWGradientFrom: string;
              brandWGradientTo: string;
              buy: string;
              buyDisabled: string;
              sell: string;
              sellDisabled: string;
              positive: string;
              reject: string;
              error: string;
              textPrimary: string;
              textSecondary: string;
              textDisabled: string;
              textInverse: string;
              formBorder: string;
              formBackground: string;
              onDark: string;
              button2ndBackground: string;
              button2ndBorder: string;
              background1: string;
              background2: string;
              background3: string;
              background4: string;
              toolbarBlur: string;
              border1: string;
              border2: string;
              border3: string;
              border4: string;
              black: string;
              white: string;
              transparent: string;
              cryptoDefault: string;
              positiveChange: string;
              negativeChange: string;
              success: string;
              buttonSell: string;
              shadowRed: string;
              buttonBuy: string;
              shadowGreen: string;
              shadowGrey: string;
              riskVeryLow: string;
              riskLow: string;
              riskMedium: string;
              riskHigh: string;
              riskVeryHigh: string;
            };
            spacing: {
              none: number;
              xxs: number;
              xs: number;
              s: number;
              sm: number;
              m: number;
              l: number;
              xl: number;
              lg: number;
            };
            buttonVariants: {
              brandOpposite: {
                backgroundColor: string;
                borderColor: string;
                borderWidth: number;
                borderRadius: number;
                shadowRadius: number;
                shadowOpacity: number;
              };
              primary: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              secondary: {
                backgroundColor: string;
                borderColor: string;
                borderWidth: number;
              };
              buy: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              sell: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              danger: {
                backgroundColor: string;
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowOpacity: number;
                shadowColor: string;
              };
              line: {
                backgroundColor: string;
                alignItems: string;
                justifyContent: string;
                borderWidth: number;
                borderColor: string;
                borderRadius: number;
              };
              transparent: {
                backgroundColor: string;
                borderColor: string;
                marginVertical: string;
              };
              leverage: {
                backgroundColor: string;
              };
            };
            textVariants: {
              defaults: {
                fontFamily: string;
                fontSize: number;
                lineHeight: number;
                color: string;
              };
              textBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
                color: string;
              };
              headlineBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
              };
              headlineReg: {
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
              };
              subHeadlineBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
              };
              subHeadlineReg: {
                fontSize: number;
                color: string;
                lineHeight: number;
                fontWeight: string;
                letterSpacing: number;
              };
              bodyReg: {
                fontSize: number;
                lineHeight: number;
              };
              bodyBold: {
                fontWeight: string;
                fontSize: number;
                lineHeight: number;
              };
              captionBold: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
              };
              captionReg: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
              };
              button_primary: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
                marginLeft: string;
              };
              button_transparent: {
                fontSize: number;
                fontWeight: string;
                color: string;
              };
              button_secondary: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
              };
              button_buy: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
              };
              button_sell: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
                color: string;
              };
              button_danger: {
                fontSize: number;
                color: string;
                fontWeight: string;
              };
              button_line: {
                color: string;
              };
              button_brandOpposite: {
                fontSize: number;
                fontWeight: string;
                color: string;
              };
              button_leverage: {
                fontSize: number;
                fontWeight: string;
                color: string;
              };
              error: {
                color: string;
              };
              chartAxisText: {
                fontSize: number;
              };
              chartMarklineText: {
                fontSize: number;
                fontWeight: string;
              };
              riskIndicator: {
                fontSize: number;
                fontWeight: string;
                lineHeight: number;
              };
            };
            breakpoints: {
              small: number;
              medium: number;
              large: number;
            };
            viewVariants: {
              defaults: {};
              totalBalance: {
                backgroundColor: string;
                padding: string;
                borderTopWidth: number;
                borderBottomWidth: number;
                borderColor: string;
              };
              orderInputCurrency: {
                backgroundColor: string;
                padding: string;
                paddingHorizontal: string;
                borderRadius: number;
              };
            };
            cardVariants: {
              defaults: {
                borderRadius: number;
                backgroundColor: string;
              };
              elevated: {
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowColor: string;
                shadowOpacity: number;
                elevation: number;
              };
              floating: {
                shadowOffset: {
                  width: number;
                  height: number;
                };
                shadowRadius: number;
                shadowColor: string;
                shadowOpacity: number;
                elevation: number;
              };
            };
          }> &
          RNViewProps &
          import('react').RefAttributes<unknown>
      >
    | undefined;
};
