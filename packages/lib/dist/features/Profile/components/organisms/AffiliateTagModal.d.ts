import React from 'react';
type AffiliateTagModalProps = {
  /** Flag indicates the visibility of the modal */
  modalVisible: boolean;
  /** Handler to evaluate on modal closing */
  onClose: () => void;
  /** Tag to edit (if exists already) */
  tag?: string;
  /** Handler to execute on form submission (to update the tag) */
  onSubmit: (value: string) => void;
  /** Error message if something went wrong */
  error?: string;
};
export declare const AffiliateTagModal: ({
  modalVisible,
  onClose: handleClose,
  tag,
  onSubmit,
  error,
}: AffiliateTagModalProps) => React.JSX.Element;
export {};
