import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, G, Circle, Path, } from 'react-native-svg';
const Neo = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <Defs>
      <LinearGradient x1="53856%" y1="-3432%" x2="53856%" y2="77792%" id="neo-48px_svg__a">
        <Stop stopColor="#58BF00" offset="0%"/>
        <Stop stopColor="#58BF00" offset="23%"/>
        <Stop stopColor="#58BF00" offset="42%"/>
        <Stop stopColor="#29B800" offset="61%"/>
        <Stop stopColor="#00AE1D" offset="78%"/>
        <Stop stopColor="#00A62C" offset="99%"/>
      </LinearGradient>
    </Defs>
    <G fillRule="nonzero" fill="none">
      <Circle fill="url(#neo-48px_svg__a)" cx={24} cy={24} r={24}/>
      <Path d="m37.5 33.869-10.486-4.886v-10.83l10.486-3.72V33.87ZM22.235 39 12 34.231V14.937l10.235 4.771V39Zm15.014-25.264-.169.06-10.066 3.571-.251.09-4.265 1.512-10.093-4.704 14.358-5.094.125-.045.267-.094.093-.032 10.093 4.704-.092.032Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Neo;
Neo.color = '#58BF00';
