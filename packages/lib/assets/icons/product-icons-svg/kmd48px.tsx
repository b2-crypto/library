import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Kmd = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#326464" cx={24} cy={24} r={24} />
      <Path
        d="m24 7.5 11.223 4.81c.335.143.601.412.74.75L40.5 24l-4.534 11.069c-.141.344-.413.617-.756.76L24 40.5l-11.21-4.67a1.398 1.398 0 0 1-.756-.761L7.5 24l4.536-10.94c.14-.338.406-.607.741-.75L24 7.5Zm0 6.712-6.852 2.936L14.212 24l2.936 6.852L24 33.788l6.852-2.936L33.788 24l-2.936-6.852L24 14.212Zm0 2.936 4.894 1.958L30.852 24l-1.958 4.894L24 30.852l-4.894-1.958L17.148 24l1.958-4.894L24 17.148Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Kmd;
Kmd.color = '#326464';
