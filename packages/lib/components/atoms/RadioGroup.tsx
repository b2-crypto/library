import React from 'react';
import { Box } from './Box';
import { Radio } from './Radio';
import { BoxProps } from '@shopify/restyle';
import { Theme } from '../../theme';

type Props<T> = {
  /** Radio Group items (item:{ label: string; value: T; }) */
  items: Array<{ label: string; value: T }>;
  /** Radio Group value */
  value: T;
  /** OnChange function */
  onChange: (newValue: T) => void;
  /** Radio size */
  size?: number;
  /** Inline radio group */
  inline?: boolean;
} & BoxProps<Theme>;

export const RadioGroup = <T,>({
  items,
  value,
  onChange,
  size,
  inline = false,
  ...props
}: Props<T>) => {
  return (
    <Box flexDirection="column" {...props}>
      {items.map((item, index) => (
        <Box
          key={item.label}
          mb={index + 1 !== items.length ? 'sm' : undefined}>
          <Radio
            size={size}
            label={item.label}
            inline={inline}
            checked={value === item.value}
            onChange={() => onChange(item.value)}
          />
        </Box>
      ))}
    </Box>
  );
};
