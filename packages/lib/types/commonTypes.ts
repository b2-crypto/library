export interface IconProps {
  fill: string;
}

export interface IWalletList {
  [key: string]: boolean;
}

export type RequestModel = {
  requestCode: string;
  symbol: string;
  amount: number;
  decimalPlaces: number;
  note: string;
  requestorUsername: string;
  date: string;
};
