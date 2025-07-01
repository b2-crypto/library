import React, { useState } from 'react';
import { PointDown } from '../../assets/icons/PointDown';
import { PointUp } from '../../assets/icons/PointUp';
import { Box } from '../atoms';
import { Button } from './Button';
export const ExpandingCard = ({ children, expandableContent }) => {
    const [expanded, setExpanded] = useState(false);
    return (<Box elevation={2} shadowOffset={{ width: 0, height: 4 }} shadowRadius={10} shadowOpacity={0.1} shadowColor="black" backgroundColor="background2">
      {children}
      <>
        {!!expanded && expandableContent}
        <Button onPress={() => setExpanded(!expanded)} variant="transparent" padding="s" size="small" icon={expanded ? <PointUp /> : <PointDown />}/>
      </>
    </Box>);
};
