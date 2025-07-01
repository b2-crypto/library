import * as React from 'react';
import { useController } from 'react-hook-form';

import { DropDown } from '../../../../components/atoms';
import {
  BoxFormItem,
  DropDownTrigger,
  ItemOption,
} from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';

type Props = {
  name: 'fromAccountId' | 'toAccountId';
  label: string;
  accounts: Array<{ AccountId: number; AccountName: string }>;
  defaultValue?: number;
};

const DropDownTriggerWrapper = (props: any) => (
  <DropDownTrigger
    {...props}
    size="big"
    placeholder={translate('transactions.accountFieldPlaceholder')}
    textVariant="bold"
    hasError={!!props.fieldState?.error}
  />
);

export const AccountField = ({
  name,
  label,
  accounts,
  defaultValue,
}: Props) => {
  const { field, fieldState } = useController<{
    fromAccountId: number;
    toAccountId: number;
  }>({
    name,
    defaultValue,
  });

  const items = React.useMemo(
    () => accounts.map(a => ({ value: a.AccountId, title: a.AccountName })),
    [accounts],
  );

  return (
    <BoxFormItem label={label} error={fieldState.error?.message}>
      <DropDown
        value={field.value}
        setValue={field.onChange}
        items={items}
        listItem={ItemOption}
        dropDownTrigger={DropDownTriggerWrapper}
      />
    </BoxFormItem>
  );
};
