import * as React from 'react';

import { useMarginEnabled } from '../../hooks';
import { MarginStatus } from '../molecules';

export function MarginStatusWidget() {
  const isMarginEnabled = useMarginEnabled();
  return <MarginStatus isEnabled={isMarginEnabled} />;
}
