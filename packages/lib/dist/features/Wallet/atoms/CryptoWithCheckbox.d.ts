import React from 'react';
import { UserWallet } from '../../../hooks';
type ItemProps = {
  item: UserWallet;
  cryptoShown: Record<string, boolean>;
};
export declare const CryptoWithCheckbox: ({
  item,
  cryptoShown,
}: ItemProps) => React.JSX.Element;
export declare const WalletsEditCheckbox: ({
  item,
  cryptoShown,
  handleOnChange,
}: ItemProps & {
  handleOnChange: (val: boolean) => void;
}) => React.JSX.Element;
export {};
