import React from 'react';
import { Box } from './Box';
import { Radio } from './Radio';
export const RadioGroup = ({ items, value, onChange, size, inline = false, ...props }) => {
    return (<Box flexDirection="column" {...props}>
      {items.map((item, index) => (<Box key={item.label} mb={index + 1 !== items.length ? 'sm' : undefined}>
          <Radio size={size} label={item.label} inline={inline} checked={value === item.value} onChange={() => onChange(item.value)}/>
        </Box>))}
    </Box>);
};
