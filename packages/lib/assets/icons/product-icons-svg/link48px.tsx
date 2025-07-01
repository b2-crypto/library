import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Link = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#01A6FB" cx={24} cy={24} r={24} />
      <Path
        d="M22.5 27.927V31.5a1.5 1.5 0 0 0 3 0v-3.573a2.25 2.25 0 1 0-3 0ZM15 21v-3a9 9 0 1 1 18 0v3a1.5 1.5 0 0 1 1.5 1.5v12A1.5 1.5 0 0 1 33 36H15a1.5 1.5 0 0 1-1.5-1.5v-12A1.5 1.5 0 0 1 15 21Zm18 0H18.75v-2.85c0-2.982 2.35-5.4 5.25-5.4s5.25 2.418 5.25 5.4V21H24h9Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Link;
Link.color = '#01A6FB';
