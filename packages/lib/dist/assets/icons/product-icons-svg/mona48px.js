import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Mona = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#F0DBB0" cx={24} cy={24} r={24}/>
      <Path d="M35.294 20.12 33.16 10.5l-4.196 6.62a21.144 21.144 0 0 0-9.925 0l-4.186-6.62-2.143 9.62C10.404 21.963 9 24.371 9 27.013c0 5.79 6.713 10.484 14.995 10.484 8.283 0 14.996-4.694 14.996-10.484-.002-2.642-1.395-5.05-3.697-6.893Zm-19.629 4.407h-.999l2.44-2.815h1.777l-3.218 2.815Zm8.255 6.875-4.149-7.308 1.025-.585.925 1.628h4.532l.966-1.635 1.014.602-4.313 7.298Zm8.42-6.875-3.22-2.815h1.788l2.438 2.815H32.34Zm-8.4 4.522-1.55-2.73h3.162l-1.612 2.73Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Mona;
Mona.color = '#F0DBB0';
