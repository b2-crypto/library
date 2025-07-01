import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Atm = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#346FCE" cx={24} cy={24} r={24} />
      <Path
        d="m30.241 28.058 1.433 2.696a6.553 6.553 0 0 1-2.71 8.863l-.185.098a6.553 6.553 0 0 1-8.863-2.71l-4.835-9.092a6.553 6.553 0 0 1 2.388-8.68l-1.433-2.695a6.553 6.553 0 0 1 2.71-8.863l.185-.098a6.553 6.553 0 0 1 8.863 2.71l4.835 9.092a6.553 6.553 0 0 1-2.388 8.68Zm0 0-3.401-6.397a6.553 6.553 0 0 0-8.863-2.71l-.186.1c-.11.058-.217.119-.322.183l3.401 6.397a6.553 6.553 0 0 0 8.863 2.71l.186-.1c.11-.058.217-.12.322-.183Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Atm;
Atm.color = '#346FCE';
