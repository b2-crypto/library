import React from 'react';
type AffiliateCountCardProps = {
  /** Data loading indicator */
  isLoading: boolean;
  /** Number of user's affiliates */
  affiliateCount?: number;
};
export declare const AffiliateCountCard: ({
  isLoading,
  affiliateCount,
}: AffiliateCountCardProps) => React.JSX.Element;
export {};
