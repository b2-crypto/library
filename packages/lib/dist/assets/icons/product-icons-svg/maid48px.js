import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Maid = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#5592D7" cx={24} cy={24} r={24}/>
      <G fill="#FFF">
        <Path d="M30.369 19v19.462L13.937 29c-4.86-2.846-4.551-4.615-4.551-8.462l16.894 9.77v-8.923L30.369 19Z"/>
        <Path d="m26.28 30.308-16.894-9.77 16.431-9.461c4.86-2.77 6.249-1.615 9.643.308l-16.894 9.769 7.714 4.461v4.693Z" opacity={0.6}/>
        <Path d="m18.566 21.154 16.894-9.77v18.924c0 5.615-1.697 6.23-5.091 8.154V19l-7.792 4.462-4.011-2.308Z" opacity={0.2}/>
      </G>
    </G>
  </Svg>);
export default Maid;
Maid.color = '#5592D7';
