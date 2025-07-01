import React from 'react';
type Props = {
  children: React.ReactNode;
  /** Close form (modal) callback */
  onClose: () => void;
};
export declare const SendFormHeader: ({
  children,
  onClose,
}: Props) => React.JSX.Element;
export {};
