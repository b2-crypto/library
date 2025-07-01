export declare const RISK_THRESHOLDS: {
  VERY_LOW: number;
  LOW: number;
  MEDIUM: number;
  HIGH: number;
  VERY_HIGH: number;
};
export declare const RiskLevel: {
  readonly UNKNOWN: -1;
  readonly VERY_LOW: 0;
  readonly LOW: 1;
  readonly MEDIUM: 2;
  readonly HIGH: 3;
  readonly VERY_HIGH: 4;
  readonly MARGIN_CALL: 5;
  readonly LIQUIDATION: 6;
};
export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel];
export declare const RISK_LEVEL_MAPPINGS: (
  | {
      threshold: number;
      level: 0;
      label: string;
    }
  | {
      threshold: number;
      level: 1;
      label: string;
    }
  | {
      threshold: number;
      level: 2;
      label: string;
    }
  | {
      threshold: number;
      level: 3;
      label: string;
    }
  | {
      threshold: number;
      level: 4;
      label: string;
    }
)[];
export interface RiskLevelInfo {
  level: RiskLevel;
  riskNumber: number;
  label: string;
}
/**
 * Calculate the risk level based on the risk number and account status
 */
export declare const getRiskLevel: (
  riskNumber: number,
  isMarginCall: boolean,
  isLiquidation: boolean,
) => RiskLevelInfo;
/**
 * Get the active segment index for the risk indicator
 */
export declare const getActiveSegment: (risk: number) => 1 | 3 | 0 | 2 | 4;
/**
 * Get the color key for a risk level
 */
export declare const getRiskColorKey: (
  risk: number,
) => 'riskVeryLow' | 'riskLow' | 'riskMedium' | 'riskHigh' | 'riskVeryHigh';
