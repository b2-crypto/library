import React, { useMemo, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { ProductPairIcon, SmallDropDown, Tabs, } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { testID } from '../../../../helpers/testId';
export const InstrumentField = ({ isLoading, instruments, }) => {
    const { watch, control } = useFormContext();
    const [filter, setFilter] = useState(null);
    const { field } = useController({
        name: 'instrumentId',
        control,
    });
    const type = watch('op');
    const filters = useMemo(() => {
        return Object.values(instruments.reduce((acc, i) => {
            if (!(i.Product1 in acc)) {
                acc[i.Product1] = { value: i.Product1, label: i.Product1Symbol };
            }
            if (!(i.Product2 in acc)) {
                acc[i.Product2] = { value: i.Product2, label: i.Product2Symbol };
            }
            return acc;
        }, {}));
    }, [instruments]);
    const options = useMemo(() => {
        const filteredOptions = instruments
            .filter(i => !filter || i.Product1 === filter || i.Product2 === filter)
            .map(el => ({
            title: el.VenueSymbol,
            value: el.InstrumentId,
            icon: () => (<ProductPairIcon size={24} symbol1={el.Product1Symbol} symbol2={el.Product2Symbol}/>),
        }));
        // If there's a selected value and it's not in the filtered options, add it as hidden
        if (field.value) {
            const selectedInstrument = instruments.find(i => i.InstrumentId === field.value);
            if (selectedInstrument &&
                !filteredOptions.some(opt => opt.value === field.value)) {
                filteredOptions.push({
                    title: selectedInstrument.VenueSymbol,
                    value: selectedInstrument.InstrumentId,
                    icon: () => (<ProductPairIcon size={24} symbol1={selectedInstrument.Product1Symbol} symbol2={selectedInstrument.Product2Symbol}/>),
                    hide: true, // This will make it available for selection but not show in the dropdown
                });
            }
        }
        return filteredOptions;
    }, [instruments, filter, field.value]);
    return (<SmallDropDown header={<Tabs type="pills_wide" data={filters} value={filter} onChange={value => setFilter(value)}/>} value={field.value} setValue={field.onChange} items={options} labelColor={type} placeholder={translate('selectAsset')} dropDownLabel={translate(type)} isLoading={isLoading} {...testID('instrumentDropdown')} flex={1}/>);
};
