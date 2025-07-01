import React from 'react';
type Props = {
  /** Array of items to display as a summary:
   * - `name` is a label for the row
   * - `value` can be either a string value, or object with `amount` and `symbol` values to render separately.
   */
  items: Array<
    | {
        type: 'separator';
      }
    | {
        type?: 'item';
        name: Exclude<string, 'separator'>;
        value?:
          | string
          | null
          | {
              amount: string;
              symbol: string;
            };
      }
  >;
};
export declare const OrderSummary: ({ items }: Props) => React.JSX.Element;
export {};
