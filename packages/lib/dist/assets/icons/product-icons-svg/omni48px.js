import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Omni = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#1C347A" cx={24} cy={24} r={24}/>
      <Path d="M15.097 10.331a16.395 16.395 0 0 0-4.785 4.796V10.33h4.785Zm22.507 4.667a16.394 16.394 0 0 0-4.7-4.667h4.7v4.667Zm-4.632 22.625a16.4 16.4 0 0 0 4.632-4.621v4.621h-4.632Zm-22.66-4.75a16.395 16.395 0 0 0 4.716 4.75h-4.716v-4.75ZM39 24c0 8.271-6.73 15-15 15S9 32.271 9 24 15.729 9 24 9s15 6.729 15 15ZM24 34.938c6.031 0 10.938-4.907 10.938-10.938 0-6.031-4.907-10.938-10.938-10.938-6.031 0-10.938 4.907-10.938 10.938 0 6.031 4.907 10.938 10.938 10.938Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Omni;
Omni.color = '#1C347A';
