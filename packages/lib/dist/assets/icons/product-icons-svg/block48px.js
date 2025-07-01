import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Block = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#101341" cx={24} cy={24} r={24}/>
      <G fill="#FFF">
        <Path d="M16.532 10.5h15.343L39.75 24l-7.875 13.5H16.397L24.136 24l-7.604-13.5Zm8.147 4.749L29.703 24l-5.024 8.751h4.48L34.183 24l-5.024-8.751h-4.48Z"/>
        <Path opacity={0.5} d="M18.17 16.539 13.816 24l4.314 7.395-2.758 4.814L8.25 24l7.184-12.316z"/>
      </G>
    </G>
  </Svg>);
export default Block;
Block.color = '#101341';
