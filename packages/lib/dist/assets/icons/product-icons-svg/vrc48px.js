import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Vrc = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#418BCA" cx={24} cy={24} r={24}/>
      <Path d="M30.397 12H37.5L24 39 10.5 12h7.056l6.491 13.669L30.397 12ZM24 19.438c-1.182 0-2.14-.984-2.14-2.197 0-1.214.958-2.198 2.14-2.198 1.181 0 2.14.984 2.14 2.198 0 1.213-.959 2.197-2.14 2.197Zm9.697 6.062c1.182 0 2.14.984 2.14 2.197 0 1.214-.958 2.198-2.14 2.198-1.181 0-2.14-.984-2.14-2.198 0-1.213.958-2.197 2.14-2.197Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Vrc;
Vrc.color = '#418BCA';
