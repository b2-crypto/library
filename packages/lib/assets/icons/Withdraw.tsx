import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fill={props.color || '#E81F5B'}
      fillRule="evenodd"
      d="M9 5.828 6.707 8.121a.999.999 0 1 1-1.414-1.414L10 2l4.707 4.707a.999.999 0 1 1-1.414 1.414L11 5.828v6.586a1 1 0 0 1-2 0V5.828ZM17 13a1 1 0 0 1 2 0v5H1v-5a1 1 0 0 1 2 0v3h14v-3Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Withdraw = memo(SvgComponent);
