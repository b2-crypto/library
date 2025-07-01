import React, { useCallback, useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import camelCase from 'lodash/camelCase';

import { Tabs } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { OrderFormValues, ORDER_TYPES } from '../../types';
import { testID } from '../../../../helpers/testId';

type Props = {
  /** Array of order types (machine-readable strings) */
  types?: Readonly<string[]>;
};
export const OrderTypeField = ({ types = ORDER_TYPES }: Props) => {
  const { control, watch, setValue } = useFormContext<OrderFormValues>();

  const onOrderTypeChange = useCallback(() => {
    setValue('limit', '');
    setValue('stopPrice', '');
    setValue('value', '');
    setValue('quantity', '');
  }, [setValue]);

  const { field } = useController({
    control,
    name: 'type',
    rules: {
      required: true,
      onChange: onOrderTypeChange,
    },
  });
  const op = watch('op');

  const options = useMemo(
    () =>
      types.map(name => ({
        value: name,
        label: translate(`transaction.orderType.${camelCase(name)}`),
      })),
    [types],
  );

  return (
    <Tabs
      activeColor={op}
      data={options}
      value={field.value}
      onChange={field.onChange}
      wrapperProps={{
        accessibilityLabel: 'Order type tabs',
        ...testID('orderTypeTabs'),
      }}
    />
  );
};
