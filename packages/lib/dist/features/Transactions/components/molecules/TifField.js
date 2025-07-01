import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormDropdown } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { TIF_OPTIONS } from '../../types';
export const TifField = (props) => {
    const { control } = useFormContext();
    const items = useMemo(() => TIF_OPTIONS.map(value => ({
        value,
        title: translate(`transaction.tif.${value.toLowerCase()}`),
    })), []);
    return (<FormDropdown size="big" label={`${translate('tif')}:`} placeholder={translate('tif')} name="tif" {...props} control={control} items={items}/>);
};
