import React from 'react';
type KYCCardType = {
  verificationLevel: number;
  onButtonPress: () => void;
};
export declare const KYCCard: ({
  verificationLevel,
  onButtonPress,
}: KYCCardType) => React.JSX.Element;
export {};
