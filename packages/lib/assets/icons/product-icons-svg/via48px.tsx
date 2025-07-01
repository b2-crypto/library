import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Via = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#565656" cx={24} cy={24} r={24} />
      <Path
        d="M16.7 21.444h-4.692v-2.578h3.705l-2.845-7.426 2.348-.94 5.325 13.9 6.902.045L32.784 10.5l2.348.94-2.845 7.426h3.705v2.578H31.3l-1.156 3.018 5.856.037-.016 2.577-6.825-.043L24 40.5l-5.184-13.532L12 26.925l.016-2.578 5.81.037-1.126-2.94Zm4.83 5.541L24 33.431l2.457-6.415-4.926-.03Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Via;
Via.color = '#565656';
