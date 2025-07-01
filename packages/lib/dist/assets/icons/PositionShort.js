import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
export const PositionShort = (props) => (<Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path d="M18.5 15.5H13L3 4" stroke="#E81F5B" strokeWidth="2" strokeLinecap="round"/>
    <Rect width="2" height="2" transform="matrix(-1 0 0 1 20 9)" fill="#E81F5B"/>
    <Rect width="2" height="2" transform="matrix(-1 0 0 1 16.8 9)" fill="#E81F5B"/>
    <Rect width="2" height="2" transform="matrix(-1 0 0 1 5 9)" fill="#E81F5B"/>
    <Rect width="2" height="2" transform="matrix(-1 0 0 1 13.5 9)" fill="#E81F5B"/>
    <Rect width="2" height="2" transform="matrix(-1 0 0 1 2 9)" fill="#E81F5B"/>
  </Svg>);
