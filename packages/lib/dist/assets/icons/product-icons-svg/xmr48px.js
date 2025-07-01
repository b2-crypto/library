import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Xmr = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#F60" cx={24} cy={24} r={24}/>
      <Path d="M23.956 7.852c8.976 0 16.236 7.26 16.236 16.236 0 1.804-.308 3.52-.836 5.148h-4.84v-13.64l-10.56 10.56-10.56-10.56v13.64h-4.84a16.604 16.604 0 0 1-.836-5.148c0-8.976 7.26-16.236 16.236-16.236Zm-2.42 20.68L24 30.952l2.42-2.42 4.576-4.62v8.58h6.82a16.209 16.209 0 0 1-13.86 7.788c-5.852 0-11-3.124-13.86-7.788H16.916v-8.58l4.62 4.62Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Xmr;
Xmr.color = '#F60';
