import { useCallback, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectLeverage, setLeverage } from '../../../stores/leverage';
import { useGetAllMarginInstrumentConfigsQuery } from '../../../services';
import { useMarginEquity } from './useMarginEquity';
const isLeverageAllowedSelector = (result) => ({
    isAllowed: !!result.data?.IsLeverageAllowed,
});
export function useLeverage() {
    const { watch, setValue } = useFormContext();
    const instrumentId = watch('instrumentId');
    const userLeverage = useAppSelector(state => selectLeverage(state, instrumentId));
    const { maxLeverage } = useGetAllMarginInstrumentConfigsQuery(undefined, {
        selectFromResult: ({ data }) => {
            const initialRequirement = data?.find(config => config.InstrumentId === instrumentId)
                ?.InitialRequirement ?? 0;
            return {
                maxLeverage: initialRequirement
                    ? Math.round(1 / initialRequirement + 1)
                    : 0,
            };
        },
    });
    const leverage = typeof userLeverage !== 'undefined' && userLeverage <= maxLeverage
        ? userLeverage
        : maxLeverage;
    const { isAllowed } = useMarginEquity(isLeverageAllowedSelector);
    const noLeverage = isAllowed === false || !leverage;
    const disabled = maxLeverage <= 2 || leverage <= 1 || noLeverage;
    const dispatch = useAppDispatch();
    const set = useCallback((l) => dispatch(setLeverage({ leverage: l, instrumentId })), [dispatch, instrumentId]);
    useEffect(() => {
        if (leverage) {
            setValue('leverage', leverage);
        }
    }, [leverage, setValue]);
    return {
        leverage,
        noLeverage,
        disabled,
        maxLeverage,
        setLeverage: set,
    };
}
