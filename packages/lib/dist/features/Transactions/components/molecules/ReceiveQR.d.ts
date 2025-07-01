import React from 'react';
type Props = {
  /** Wallet Address */
  walletAddress: string;
  /** Wallet address loading error message (optional) */
  error?: string;
  /** Wallet address loading state (optional) */
  loading?: boolean;
};
export declare const ReceiveQR: ({
  walletAddress,
  error,
  loading,
}: Props) => React.JSX.Element;
export {};
