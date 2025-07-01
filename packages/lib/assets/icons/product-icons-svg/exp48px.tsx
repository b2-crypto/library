import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Exp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#FFAA5C" cx={24} cy={24} r={24} />
      <Path
        d="m11.25 17.505 6.447 3.722a6.966 6.966 0 0 0-.595 2.826c0 .973.2 1.9.558 2.741l-6.41 3.701v-12.99Zm.856-1.238L23.25 9.458v7.688a6.881 6.881 0 0 0-4.802 2.783l-6.342-3.662ZM36.75 30.495l-6.41-3.7a6.968 6.968 0 0 0 .558-2.742 6.966 6.966 0 0 0-.595-2.826l6.447-3.722v12.99Zm-.688 1.335L24.75 38.554V30.96a6.883 6.883 0 0 0 4.855-2.857l6.457 3.728Zm-24.124 0 6.457-3.728a6.883 6.883 0 0 0 4.855 2.857v7.595L11.938 31.83Zm23.956-15.563-6.342 3.662a6.881 6.881 0 0 0-4.802-2.783V9.458l11.144 6.809Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Exp;
Exp.color = '#FFAA5C';
