import React from 'react';
export type KYCLevelData = {
  level: number;
  benefitsVisible: boolean;
  requirementsVisible: boolean;
  verificationMethod?: string;
  button: React.ReactNode;
  benefitsInfo: string;
  requirementsInfo: string;
};
type VerificationLevelSectionProps = {
  /** Level data */
  levelData: KYCLevelData;
  /** Current verification level */
  currentLevel: number;
};
export declare const VerificationLevelSection: ({
  levelData,
  currentLevel,
}: VerificationLevelSectionProps) => React.JSX.Element;
export {};
