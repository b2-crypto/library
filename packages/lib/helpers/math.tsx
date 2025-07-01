import floor from 'lodash/floor';
import ceil from 'lodash/ceil';

export function roundWithPrecision(value: number, precision: number) {
  const rounded = ceil(value, precision);
  return rounded > value ? floor(value, precision) : rounded;
}
