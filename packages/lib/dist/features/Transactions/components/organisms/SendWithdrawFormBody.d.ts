import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { SendFormValues } from '../../types';
import { TemplateType } from '../../../../types/apiResponses';
import { FormDropdown } from '../../../../components/molecules';
type Props = {
  /** Selected asset (product) object */
  asset: {
    Product: string;
    DecimalPlaces: number;
  };
  /** User's balance for the selected product */
  balance?: number;
  /** Callback to render on QR icon click in the wallet address field */
  onQrClick: (
    field: ControllerRenderProps<
      SendFormValues & {
        type: 'withdraw';
      },
      'templateForm.ExternalAddress'
    >,
  ) => void;
  /** List of avaiable templates for the selected product */
  templates: TemplateType[];
  /** Indicator for templates data loading */
  templatesLoading: boolean;
  /** Template fields config object */
  templateInfo?: Record<string, string>;
  /** Indicator for template fields loading */
  templateInfoLoading: boolean;
  /** Flag indicating whether wallet address field should be a free-form text input or dropdown with only allowed values */
  requireWhitelistedAddress?: boolean;
  /** Optional list of whitelisted address to be used in wallet address field */
  allowedAddressOptions?: React.ComponentProps<typeof FormDropdown>['items'];
};
export declare const SendWithdrawFormBody: ({
  asset,
  balance,
  onQrClick,
  templates,
  templateInfo,
  templatesLoading,
  templateInfoLoading,
  requireWhitelistedAddress,
  allowedAddressOptions,
}: Props) => React.JSX.Element;
export {};
