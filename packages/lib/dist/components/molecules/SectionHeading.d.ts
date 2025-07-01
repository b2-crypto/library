import React from 'react';
import { DashedBox } from '../atoms';
type Props = {
  children: React.ReactNode;
  extra?: React.ReactNode;
} & React.ComponentProps<typeof DashedBox>;
export declare const SectionHeading: ({
  children,
  extra,
  ...rest
}: Props) => React.JSX.Element;
export {};
