import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Game = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#98C01F" cx={24} cy={24} r={24}/>
      <Path d="M23.25 8.25c8.284 0 15 6.716 15 15v15h-15c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm8.555 22.476v3.891h2.87v-9.96h-9.96v2.87h5.905a8.54 8.54 0 1 1 .952-6.152h2.894c-.888-5.401-5.578-9.521-11.23-9.521-6.287 0-11.382 5.095-11.382 11.381 0 6.286 5.095 11.382 11.381 11.382 3.418 0 6.483-1.506 8.57-3.89Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Game;
Game.color = '#98C01F';
