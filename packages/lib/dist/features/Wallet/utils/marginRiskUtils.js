import { translate } from '../../../helpers/i18n';
// Define thresholds as constants for easy adjustments later
export const RISK_THRESHOLDS = {
    VERY_LOW: 19,
    LOW: 39,
    MEDIUM: 59,
    HIGH: 79,
    VERY_HIGH: 100,
};
// Risk level constants for better maintainability
export const RiskLevel = {
    UNKNOWN: -1,
    VERY_LOW: 0,
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3,
    VERY_HIGH: 4,
    MARGIN_CALL: 5,
    LIQUIDATION: 6,
};
// Define risk level mappings for better maintainability
export const RISK_LEVEL_MAPPINGS = [
    {
        threshold: RISK_THRESHOLDS.VERY_LOW,
        level: RiskLevel.VERY_LOW,
        label: 'Very Low',
    },
    { threshold: RISK_THRESHOLDS.LOW, level: RiskLevel.LOW, label: 'Low' },
    {
        threshold: RISK_THRESHOLDS.MEDIUM,
        level: RiskLevel.MEDIUM,
        label: 'Medium',
    },
    { threshold: RISK_THRESHOLDS.HIGH, level: RiskLevel.HIGH, label: 'High' },
    {
        threshold: RISK_THRESHOLDS.VERY_HIGH,
        level: RiskLevel.VERY_HIGH,
        label: 'Very High',
    },
    // No threshold for values > VERY_HIGH, this becomes the default
];
/**
 * Calculate the risk level based on the risk number and account status
 */
export const getRiskLevel = (riskNumber, isMarginCall, isLiquidation) => {
    // Handle special cases first
    if (isLiquidation) {
        return {
            level: RiskLevel.LIQUIDATION,
            riskNumber,
            label: translate('wallet.marginRisk.liquidation'),
        };
    }
    if (isMarginCall) {
        return {
            level: RiskLevel.MARGIN_CALL,
            riskNumber,
            label: translate('wallet.marginRisk.marginCall'),
        };
    }
    // Then handle numeric risk levels
    if (isNaN(riskNumber)) {
        return { level: RiskLevel.UNKNOWN, riskNumber, label: '--' };
    }
    // Find the appropriate level based on thresholds
    const riskMapping = RISK_LEVEL_MAPPINGS.find(mapping => riskNumber <= mapping.threshold);
    if (riskMapping) {
        return {
            level: riskMapping.level,
            riskNumber,
            label: translate(`wallet.marginRisk.${riskMapping.label
                .toLowerCase()
                .replace(' ', '')}`) || riskMapping.label,
        };
    }
    // If the risk is beyond our highest threshold, treat it as VERY_HIGH
    return {
        level: RiskLevel.VERY_HIGH,
        riskNumber,
        label: translate('wallet.marginRisk.veryHigh'),
    };
};
/**
 * Get the active segment index for the risk indicator
 */
export const getActiveSegment = (risk) => {
    if (risk <= RISK_THRESHOLDS.VERY_LOW) {
        return 0;
    }
    if (risk <= RISK_THRESHOLDS.LOW) {
        return 1;
    }
    if (risk <= RISK_THRESHOLDS.MEDIUM) {
        return 2;
    }
    if (risk <= RISK_THRESHOLDS.HIGH) {
        return 3;
    }
    return 4;
};
/**
 * Get the color key for a risk level
 */
export const getRiskColorKey = (risk) => {
    if (risk <= RISK_THRESHOLDS.VERY_LOW) {
        return 'riskVeryLow';
    }
    if (risk <= RISK_THRESHOLDS.LOW) {
        return 'riskLow';
    }
    if (risk <= RISK_THRESHOLDS.MEDIUM) {
        return 'riskMedium';
    }
    if (risk <= RISK_THRESHOLDS.HIGH) {
        return 'riskHigh';
    }
    return 'riskVeryHigh';
};
