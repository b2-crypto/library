import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Bnt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#000D2B" cx={24} cy={24} r={24} />
      <Path
        d="m23.88 8.82-6.778 3.97 6.778 3.972 6.905-3.971-6.905-3.972Zm1.115 21.201v7.942l9.205-5.251v-7.944l-9.205 5.253Zm6.903-14.733v7.944l-6.904 3.971V19.26l6.904-3.971Zm-16.622 7.944 6.905 3.971V19.26l-6.905-3.971v7.944Zm0 10.76 6.905 3.972V30.02l-6.905-3.971v7.942Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Bnt;
Bnt.color = '#000D2B';
