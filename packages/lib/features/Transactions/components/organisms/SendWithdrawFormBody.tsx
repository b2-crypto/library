import React, { useEffect, useMemo } from 'react';
import { ControllerRenderProps, useFormContext } from 'react-hook-form';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@shopify/restyle';
import startCase from 'lodash/startCase';
import camelCase from 'lodash/camelCase';
import floor from 'lodash/floor';

import { SendFormValues } from '../../types';
import { translate } from '../../../../helpers/i18n';
import { TemplateType } from '../../../../types/apiResponses';
import { AMOUNT_INPUT_LIMIT } from '../../../../helpers/constants';
import { Theme } from '../../../../theme';
import { MaxButton, QrScannerButton } from '../atoms';
import { Box, FormItem, Text } from '../../../../components/atoms';
import {
  FormDropdown,
  FormAmountInput,
  FormInput,
} from '../../../../components/molecules';

type Props = {
  /** Selected asset (product) object */
  asset: { Product: string; DecimalPlaces: number };
  /** User's balance for the selected product */
  balance?: number;
  /** Callback to render on QR icon click in the wallet address field */
  onQrClick: (
    field: ControllerRenderProps<
      SendFormValues & { type: 'withdraw' },
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

export const SendWithdrawFormBody = ({
  asset,
  balance,
  onQrClick,
  templates,
  templateInfo,
  templatesLoading,
  templateInfoLoading,
  requireWhitelistedAddress,
  allowedAddressOptions,
}: Props) => {
  const { colors } = useTheme<Theme>();
  const { control, setValue, resetField, watch } = useFormContext<
    SendFormValues & { type: 'withdraw' }
  >();

  useEffect(() => {
    if (templates.length) {
      const providerId = templates[0]?.AccountProviderId;
      providerId
        ? setValue('providerId', providerId)
        : resetField('providerId');
    }
  }, [templates, resetField, setValue]);

  const providerId = watch('providerId');
  const templateType = templates.find(
    t => t.AccountProviderId === providerId,
  )?.TemplateName;

  useEffect(() => {
    templateType
      ? setValue('templateType', templateType)
      : resetField('templateType');
  }, [templateType, resetField, setValue]);

  const templateOptions = useMemo(
    () =>
      templates.map(t => ({
        value: t.AccountProviderId,
        title: t.TemplateName,
      })),
    [templates],
  );

  const loading = (
    <Box width="100%" height={50} alignItems="center" justifyContent="center">
      <ActivityIndicator size="large" color={colors.textPrimary} />
    </Box>
  );

  return (
    <>
      {templatesLoading
        ? loading
        : templateOptions.length > 1 && (
            <FormDropdown
              label={`${translate('transaction.fields.template')}:`}
              placeholder={translate('transaction.fields.template')}
              name="providerId"
              control={control}
              items={templateOptions}
            />
          )}
      {templateInfoLoading
        ? loading
        : !!templateInfo &&
          Object.entries(templateInfo).map(([fieldName, config]) => {
            const label = translate(
              `transaction.fields.${camelCase(fieldName)}`,
              { defaultValue: startCase(fieldName) },
            );

            if (config && config.indexOf('[') === 0) {
              try {
                const options =
                  fieldName === 'Country'
                    ? (
                        JSON.parse(config) as Array<{
                          Code: string;
                          Name: string;
                        }>
                      ).map(({ Code, Name }) => ({ value: Code, title: Name }))
                    : config.split(',').map(el => {
                        const value = el.trim().replace(/[[\]]/g, '');
                        return { value, title: value };
                      });
                return (
                  <Box key={fieldName} mb="m">
                    <FormDropdown
                      label={`${label}:`}
                      placeholder={translate(
                        `transaction.fields.${camelCase(fieldName)}Placeholder`,
                      )}
                      name={`templateForm.${fieldName}`}
                      control={control}
                      items={options}
                    />
                  </Box>
                );
              } catch {
                return null;
              }
            } else if (config && fieldName !== 'TemplateType') {
              return (
                <Box key={fieldName} mb="m">
                  <FormItem label={label}>
                    <Text>{config}</Text>
                  </FormItem>
                </Box>
              );
            }

            switch (fieldName) {
              case 'TemplateType':
                return null;
              case 'ExternalAddress':
                if (requireWhitelistedAddress && allowedAddressOptions) {
                  return (
                    <Box key={fieldName} mb="m">
                      <FormDropdown
                        label={`${label}:`}
                        placeholder={translate(
                          `transaction.fields.${camelCase(
                            fieldName,
                          )}Placeholder`,
                        )}
                        name={`templateForm.${fieldName}`}
                        control={control}
                        items={allowedAddressOptions}
                      />
                    </Box>
                  );
                }
                return (
                  <Box key={fieldName} marginVertical="m">
                    <FormInput
                      control={control}
                      name={`templateForm.${fieldName}`}
                      autoCapitalize="none"
                      label={label}
                      suffix={field => (
                        <QrScannerButton onPress={() => onQrClick(field)} />
                      )}
                    />
                  </Box>
                );
              // TODO: implement number field for 'Amount'
              default:
                return (
                  <Box key={fieldName} mb="m">
                    <FormInput
                      control={control}
                      name={`templateForm.${fieldName}`}
                      label={`${label}:`}
                    />
                  </Box>
                );
            }
          })}

      <FormAmountInput
        control={control}
        symbol={asset.Product}
        decimalPlaces={asset.DecimalPlaces}
        suffix={
          typeof balance !== 'undefined'
            ? field => (
                <MaxButton
                  onPress={() =>
                    field.onChange(
                      floor(balance, asset.DecimalPlaces).toString(),
                    )
                  }
                />
              )
            : undefined
        }
        name="amount"
        label={translate('transactions.amount')}
        maxLength={AMOUNT_INPUT_LIMIT}
      />
    </>
  );
};
