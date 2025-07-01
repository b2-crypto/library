import React from 'react';
import { Languages } from '../../../../helpers/i18n';
type Props = {
  initialValues: string;
  modalVisible: boolean;
  isLoading?: boolean;
  languages: Languages;
  handleClose?: () => void;
  handleSubmit: (languageCode: string) => void;
};
export declare const SelectLanguageModal: ({
  initialValues,
  modalVisible,
  isLoading,
  languages,
  handleClose,
  handleSubmit,
}: Props) => React.JSX.Element;
export {};
