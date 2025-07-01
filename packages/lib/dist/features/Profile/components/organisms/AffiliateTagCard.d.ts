import React from 'react';
type AffiliateTagCardProps = {
  /** Data loading indicator */
  isLoading: boolean;
  /** Handler to execute when the button in the card's footer is pressed (create/edit) */
  onPress: () => void;
  /** Copy button handler */
  onCopy: () => void;
  /** Tag (if already exists) */
  tag?: string;
  /** URL for the affiliate link (if tag exists) */
  affiliateUrl?: string;
};
export declare const AffiliateTagCard: ({
  isLoading,
  onPress,
  tag,
  onCopy,
  affiliateUrl,
}: AffiliateTagCardProps) => React.JSX.Element;
export {};
