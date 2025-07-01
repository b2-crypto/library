import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Btcd = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#F60" cx={24} cy={24} r={24}/>
      <Path d="M25.618 29.034c7.62-2.35 4.9-10.25 0-10.55 1.245 0 2.261-3.567 2.261-7.984 11.964.85 17.585 20.567-.36 26.734.115-1.6-.54-6.067-1.9-8.2h-.001ZM9 26.7v-8.2h.016c4.327-.017 7.818-3.6 7.801-7.984h8.342C25.159 19.466 17.932 26.7 9 26.7Zm10.931-1.484c4.95 4.067 5.228 10.917 5.228 12.284h-8.342c0-4.534-2.95-8.2-6.604-8.2 6.194-1 7.457-2.05 9.718-4.084Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Btcd;
Btcd.color = '#F60';
