import { TabItem } from '../components/molecules';
export declare const passwordValidation: RegExp;
export declare const requiredErrorMessage = 'formError.empty';
export declare const commonError = 'formError.common';
export declare const passwordValidError = 'formError.passwordValidation';
export declare const confirmPasswordError =
  'formError.confirmPasswordValidation';
export declare const checkboxError = 'formError.checkboxValidation';
export declare const radioError = 'formError.radioValidation';
export declare const emailError = 'formError.emailValidation';
export declare const numberTypeError = 'formError.numberTypeError';
export declare const numericOnlyError = 'formError.numericOnly';
export declare const positiveNumberError = 'formError.positiveNumberError';
export declare const DATA_ZOOM_CHART_START = 90;
export declare const MIN_CHART_ITEMS_COUNT = 100;
export declare const AMOUNT_INPUT_LIMIT = 18;
export interface ChartScalePillBtn<Type extends string | number>
  extends TabItem<Type> {
  interval: number;
  formatter: string;
}
export declare const PeriodFilterTabBtnsArr: ChartScalePillBtn<number>[];
export declare const EVENTS: {
  DASHBOARD_REFRESH: string;
  PAIR_DETAILS_REFRESH: string;
  WALLET_DETAILS_REFRESH: string;
};
export declare const MARGIN_REFRESH_INTERVAL = 5000;
