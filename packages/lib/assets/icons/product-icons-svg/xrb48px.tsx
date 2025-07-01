import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Xrb = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#1FB0E6" cx={24} cy={24} r={24} />
      <G fill="#FFF">
        <Path d="M24 19.059V9l12.75 7.5-8.55 5.029-4.2-2.47ZM19.799 24v2.471L11.25 31.5V24h8.549Z" />
        <Path
          d="M28.201 24v-2.471L36.75 16.5V24h-8.549ZM19.8 26.471 24 28.941V39l-12.75-7.5 8.55-5.029Zm0-4.942V24H11.25v-7.5l8.55 5.029Z"
          opacity={0.8}
        />
        <Path
          d="m24 28.941 4.201-2.47V24h8.549v7.5L24 39V28.941Zm0-9.882-4.2 2.47-8.55-5.029L24 9v10.059Z"
          opacity={0.6}
        />
      </G>
    </G>
  </Svg>
);
export default Xrb;
Xrb.color = '#1FB0E6';
