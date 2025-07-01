import * as React from 'react';
type Props = {
  name: 'fromAccountId' | 'toAccountId';
  label: string;
  accounts: Array<{
    AccountId: number;
    AccountName: string;
  }>;
  defaultValue?: number;
};
export declare const AccountField: ({
  name,
  label,
  accounts,
  defaultValue,
}: Props) => React.JSX.Element;
export {};
