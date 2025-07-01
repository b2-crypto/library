import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Lrc = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#2AB6F6" cx={24} cy={24} r={24} />
      <Path
        d="m24 9 13.5 18.8L24 39 10.5 27.8 24 9Zm-1.76 10-5.87 8 5.87 4.8V19Zm3.52 0v12.8l5.87-4.8-5.87-8Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Lrc;
Lrc.color = '#2AB6F6';
