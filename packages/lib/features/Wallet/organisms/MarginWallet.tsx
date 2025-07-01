import React from 'react';

import { MarginAssetsWidget } from './MarginAssetsWidget';
import { MarginChartWidget } from './MarginChartWidget';

export const MarginWallet: React.FC = () => {
  return (
    <>
      <MarginChartWidget />
      <MarginAssetsWidget />
    </>
  );
};
