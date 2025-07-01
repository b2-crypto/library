import React from 'react';
type Props = {
  /** Optional title to use in the header. If not provided, the default one will be used */
  title?: string;
  /** Callback for the close button */
  onClose: () => void;
};
export declare const ConvertFormHeader: ({
  title,
  onClose,
}: Props) => React.JSX.Element;
export {};
