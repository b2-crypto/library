import React, { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@shopify/restyle';
import startCase from 'lodash/startCase';
import camelCase from 'lodash/camelCase';
import floor from 'lodash/floor';
import { translate } from '../../../../helpers/i18n';
import { AMOUNT_INPUT_LIMIT } from '../../../../helpers/constants';
import { MaxButton, QrScannerButton } from '../atoms';
import { Box, FormItem, Text } from '../../../../components/atoms';
import { FormDropdown, FormAmountInput, FormInput, } from '../../../../components/molecules';
export const SendWithdrawFormBody = ({ asset, balance, onQrClick, templates, templateInfo, templatesLoading, templateInfoLoading, requireWhitelistedAddress, allowedAddressOptions, }) => {
    const { colors } = useTheme();
    const { control, setValue, resetField, watch } = useFormContext();
    useEffect(() => {
        if (templates.length) {
            const providerId = templates[0]?.AccountProviderId;
            providerId
                ? setValue('providerId', providerId)
                : resetField('providerId');
        }
    }, [templates, resetField, setValue]);
    const providerId = watch('providerId');
    const templateType = templates.find(t => t.AccountProviderId === providerId)?.TemplateName;
    useEffect(() => {
        templateType
            ? setValue('templateType', templateType)
            : resetField('templateType');
    }, [templateType, resetField, setValue]);
    const templateOptions = useMemo(() => templates.map(t => ({
        value: t.AccountProviderId,
        title: t.TemplateName,
    })), [templates]);
    const loading = (<Box width="100%" height={50} alignItems="center" justifyContent="center">
      <ActivityIndicator size="large" color={colors.textPrimary}/>
    </Box>);
    return (<>
      {templatesLoading
            ? loading
            : templateOptions.length > 1 && (<FormDropdown label={`${translate('transaction.fields.template')}:`} placeholder={translate('transaction.fields.template')} name="providerId" control={control} items={templateOptions}/>)}
      {templateInfoLoading
            ? loading
            : !!templateInfo &&
                Object.entries(templateInfo).map(([fieldName, config]) => {
                    const label = translate(`transaction.fields.${camelCase(fieldName)}`, { defaultValue: startCase(fieldName) });
                    if (config && config.indexOf('[') === 0) {
                        try {
                            const options = fieldName === 'Country'
                                ? JSON.parse(config).map(({ Code, Name }) => ({ value: Code, title: Name }))
                                : config.split(',').map(el => {
                                    const value = el.trim().replace(/[[\]]/g, '');
                                    return { value, title: value };
                                });
                            return (<Box key={fieldName} mb="m">
                    <FormDropdown label={`${label}:`} placeholder={translate(`transaction.fields.${camelCase(fieldName)}Placeholder`)} name={`templateForm.${fieldName}`} control={control} items={options}/>
                  </Box>);
                        }
                        catch {
                            return null;
                        }
                    }
                    else if (config && fieldName !== 'TemplateType') {
                        return (<Box key={fieldName} mb="m">
                  <FormItem label={label}>
                    <Text>{config}</Text>
                  </FormItem>
                </Box>);
                    }
                    switch (fieldName) {
                        case 'TemplateType':
                            return null;
                        case 'ExternalAddress':
                            if (requireWhitelistedAddress && allowedAddressOptions) {
                                return (<Box key={fieldName} mb="m">
                      <FormDropdown label={`${label}:`} placeholder={translate(`transaction.fields.${camelCase(fieldName)}Placeholder`)} name={`templateForm.${fieldName}`} control={control} items={allowedAddressOptions}/>
                    </Box>);
                            }
                            return (<Box key={fieldName} marginVertical="m">
                    <FormInput control={control} name={`templateForm.${fieldName}`} autoCapitalize="none" label={label} suffix={field => (<QrScannerButton onPress={() => onQrClick(field)}/>)}/>
                  </Box>);
                        // TODO: implement number field for 'Amount'
                        default:
                            return (<Box key={fieldName} mb="m">
                    <FormInput control={control} name={`templateForm.${fieldName}`} label={`${label}:`}/>
                  </Box>);
                    }
                })}

      <FormAmountInput control={control} symbol={asset.Product} decimalPlaces={asset.DecimalPlaces} suffix={typeof balance !== 'undefined'
            ? field => (<MaxButton onPress={() => field.onChange(floor(balance, asset.DecimalPlaces).toString())}/>)
            : undefined} name="amount" label={translate('transactions.amount')} maxLength={AMOUNT_INPUT_LIMIT}/>
    </>);
};
