import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Req = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#6CFCCD" cx={24} cy={24} r={24}/>
      <Path d="M15 9h9.91c1.354.011 2.362.086 3.024.225 2.215.398 4.22 1.765 5.384 3.653 1.376 2.187 1.557 5.039.51 7.389-.949 2.163-2.932 3.856-5.25 4.47-1.472.416-3.016.261-4.527.29 1.726 2.803 4.308 7.012 7.748 12.626L29.654 39a21470.89 21470.89 0 0 1-10.103-16.47c2.39-.012 4.779.018 7.167-.015 2.756-.073 5.166-2.463 5.224-5.167.18-2.335-1.365-4.663-3.624-5.431-.624-.24-1.605-.35-2.945-.332L15 11.583V9Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Req;
Req.color = '#6CFCCD';
