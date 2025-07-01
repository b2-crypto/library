import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const QrCode = ({
  color = '#8393B7',
  ...props
}: SvgProps & { color?: string }) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path fill={color} d="M1 10h17V9H1v1Z" />
    <Path fill={color} d="M9 1v17h1V1H9Z" />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M8 1H1v7h7V1ZM3 6V3h3v3H3ZM18 1h-7v7h7V1Zm-2 5h-3V3h3v3ZM8 11H1v7h7v-7Zm-2 5H3v-3h3v3Z"
      clipRule="evenodd"
    />
    <Path
      fill={color}
      d="M11 15h3v3h-3zM11 11h1v3h-1zM13 12h3v1h-3zM15 14h1v4h-1zM17 11h1v7h-1z"
    />
    <Path fill={color} d="M13 11h1v3h-1z" />
  </Svg>
);
