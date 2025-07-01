import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Snt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#5B6DEE" cx={24} cy={24} r={24} />
      <Path
        d="M19.95 22.531a13.716 13.716 0 0 0-2.496.215c.678-6.271 5.904-11.02 12.126-11.019 3.81 0 6.42 1.866 6.42 5.728 0 3.862-3.133 5.727-7.704 5.727-3.374 0-4.971-.651-8.346-.651m-.246 2.287c-4.57 0-7.704 1.865-7.704 5.728 0 3.862 2.61 5.727 6.42 5.727 6.222 0 11.448-4.748 12.126-11.019-.824.148-1.66.22-2.496.215-3.375 0-4.972-.65-8.346-.65"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Snt;
Snt.color = '#5B6DEE';
