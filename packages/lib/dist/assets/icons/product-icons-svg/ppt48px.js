import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Ppt = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#152743" cx={24} cy={24} r={24}/>
      <Path d="M24.073 12.474c-1.973 0-3.573-1.1-3.573-2.457 0-1.357 1.6-2.457 3.573-2.457 1.974 0 3.574 1.1 3.574 2.457 0 1.357-1.6 2.457-3.574 2.457ZM22.224 39.9V13.656h7.968c.296 0 .504.22.504.515v14.563c0 .294-.21.546-.504.546H25.8v10.621c0 .295-.226.563-.52.563h-2.502a.577.577 0 0 1-.554-.563ZM20.88 29.28h-3.016a.568.568 0 0 1-.56-.546V14.17c0-.294.265-.515.56-.515h3.016V29.28Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Ppt;
Ppt.color = '#152743';
