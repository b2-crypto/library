import React from 'react';
import { KYCLevelData } from '../organisms';
type VerificationTabProps = {
  /** Current verification level */
  verificationLevel: number;
  /** List of visible levels */
  visibleLevels: Array<KYCLevelData>;
};
export declare const VerificationTab: ({
  verificationLevel,
  visibleLevels,
}: VerificationTabProps) => React.JSX.Element;
export declare const VerificationTabWidget: () => React.JSX.Element;
export {};
