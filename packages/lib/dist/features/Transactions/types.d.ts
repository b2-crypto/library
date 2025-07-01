export declare const ORDER_TYPES: readonly [
  'Market',
  'Limit',
  'StopMarket',
  'StopLimit',
];
export declare const TIF_OPTIONS: readonly ['GTC', 'IOC', 'FOK'];
export type OrderOp = 'buy' | 'sell';
export type OrderType = (typeof ORDER_TYPES)[number];
export type TifType = (typeof TIF_OPTIONS)[number];
export type OrderFormValues = {
  accountId: number;
  op: OrderOp;
  instrumentId: number;
  type: OrderType;
  quantity: string;
  value: string;
  limit?: string;
  stopPrice?: string;
  tif?: TifType;
  anchored?: 'quantity' | 'value';
  leverage?: number;
};
export declare const RECEIVE_TYPE: readonly ['deposit', 'transfer'];
export type ReceiveType = (typeof RECEIVE_TYPE)[number];
export type ReceiveFormValues = {
  productId: number;
  type: ReceiveType;
} & (
  | {
      type: 'deposit';
    }
  | {
      type: 'transfer';
      emailAddress: string;
      amount: string;
      note: string;
    }
);
export declare const SEND_TYPE: readonly ['withdraw', 'transfer'];
export type SendType = (typeof SEND_TYPE)[number];
export type SendFormValues = {
  productId: number;
  amount: string;
  type: SendType;
} & (
  | {
      type: 'withdraw';
      providerId: number;
      templateType: string;
      templateForm: Record<string, string | number>;
    }
  | {
      productId: number;
      type: 'transfer';
      emailAddress: string;
      note: string;
    }
);
export declare const DEPOSIT_TYPE: readonly ['external', 'send'];
export type DepositType = (typeof DEPOSIT_TYPE)[number];
export type DepositFormValues = {
  productId: number;
  amount: string;
  type: DepositType;
} & (
  | {
      type: 'external';
      routingNumber: number;
      account: string;
    }
  | {
      type: 'send';
      emailAddress: string;
      note: string;
    }
);
export type ConvertFormValues = {
  accountId: number;
  from: {
    productId?: number;
    amount: string;
  };
  to: {
    productId?: number;
    amount: string;
  };
  anchored?: 'from' | 'to';
};
export type AmountFieldAsset = {
  id: number;
  symbol: string;
  fullName: string;
  decimalPlaces: number;
  type: 'fiat' | 'crypto';
  amount: number;
  notionalSymbol?: string;
  notionalRate?: number;
  disabled?: boolean;
};
export type TransferFormValues = {
  fromAccountId: number;
  toAccountId: number;
  productId: number;
  amount: string;
  defaultProductId?: number;
};
