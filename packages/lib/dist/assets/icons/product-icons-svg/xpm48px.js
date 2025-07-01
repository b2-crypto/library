import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Xpm = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#FFD81B" cx={24} cy={24} r={24}/>
      <Path d="M36 23.343c0 6.635-5.139 8.89-9.464 8.89v1.73h3.337v2.343h-3.337V39h-5.219v-2.694h-3.19v-2.343h3.183v-1.751c-1.383 0-9.31-.33-9.31-9.351V12h5.182v11.277c0 4.708 4.15 4.664 4.15 4.664V12h5.204v15.941s4.282.24 4.282-4.73V12H36v11.343Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Xpm;
Xpm.color = '#FFD81B';
