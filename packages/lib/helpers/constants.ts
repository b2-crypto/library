import { TabItem } from '../components/molecules';

export const passwordValidation =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;

export const requiredErrorMessage = 'formError.empty';
export const commonError = 'formError.common';
export const passwordValidError = 'formError.passwordValidation';
export const confirmPasswordError = 'formError.confirmPasswordValidation';
export const checkboxError = 'formError.checkboxValidation';
export const radioError = 'formError.radioValidation';
export const emailError = 'formError.emailValidation';
export const numberTypeError = 'formError.numberTypeError';
export const numericOnlyError = 'formError.numericOnly';
export const positiveNumberError = 'formError.positiveNumberError';

export const DATA_ZOOM_CHART_START = 90;
export const MIN_CHART_ITEMS_COUNT = 100;

export const AMOUNT_INPUT_LIMIT = 18;

export interface ChartScalePillBtn<Type extends string | number>
  extends TabItem<Type> {
  interval: number;
  formatter: string;
}

// backend supports following intervals:
// 60, 300, 900, 1800, 3600, 7200, 14400, 21600, 43200, 86400, 604800, 2419200, 9676800, 125798400
export const PeriodFilterTabBtnsArr: ChartScalePillBtn<number>[] = [
  {
    value: 3600,
    label: '1H', // data for the last hour
    interval: 60, // 1 min chart data interval (in seconds)
    formatter: 'hh:mm',
  },
  {
    value: 86400,
    label: '1D', // data for the last day
    interval: 3600, // 1 hour chart data interval
    formatter: 'haaa',
  },
  {
    value: 604800,
    label: '1W',
    interval: 86400, // 1 day chart data interval
    formatter: 'eee',
  },
  {
    value: 2419200,
    label: '1M',
    interval: 86400, // 1 day chart data interval
    formatter: 'dd',
  },
  {
    value: 365 * 24 * 3600,
    label: '1Y',
    interval: 2419200, // 28 days chart data interval
    formatter: 'MMM d',
  },
  {
    value: 145152000,
    label: 'All', // data for the last 5 years
    interval: 9676800, // 16 weeks chart data interval
    formatter: 'MMM d',
  },
];

export const EVENTS = {
  DASHBOARD_REFRESH: 'DASHBOARD_REFRESH',
  PAIR_DETAILS_REFRESH: 'PAIR_DETAILS_REFRESH',
  WALLET_DETAILS_REFRESH: 'WALLET_DETAILS_REFRESH',
};

export const MARGIN_REFRESH_INTERVAL = 5000;
