import React from 'react';
export type AssetFieldProps = {
  /** List of assets (products) for the dropdown options */
  assets: Array<{
    /** ProductId */
    ProductId: number;
    /** Symbol for the product */
    Product: string;
    /** Full name for the product */
    ProductFullName: string;
  }>;
  /** Label for the dropdown (rendered as a prefix for the value) */
  label: string;
  /** Dropdown loading state */
  isLoading?: boolean;
};
export declare const AssetField: ({
  assets,
  label,
  isLoading,
}: AssetFieldProps) => React.JSX.Element;
