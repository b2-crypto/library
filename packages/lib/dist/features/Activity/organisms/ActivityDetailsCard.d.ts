import React from 'react';
import { Theme } from '../../../theme';
import { Card } from '../../../components/molecules';
type HeaderProps = {
  /** Header icon */
  icon?: React.ReactElement;
  /** Header title */
  title?: string;
  /** Header extra icon */
  extraIcon: React.ReactElement;
};
type AdditionalInfo = {
  /** Additional info title */
  title: string;
  /** Additional info text */
  value: string;
};
type InfoProps = {
  /** Activity amount */
  amount: string | number;
  /** Activity currency */
  currency?: string;
  /** Activity product */
  product?: string;
  /** Activity type */
  activityType?: string;
  /** Activity type color */
  activityTypeColor?: keyof Theme['colors'];
  /** Activity order type */
  orderType?: string;
  /** Activity user info */
  userInfo?: AdditionalInfo[];
  /** Activity values info */
  valuesInfo?: AdditionalInfo[];
};
export declare const ActivityDetailsCardInfo: ({
  amount,
  currency,
  product,
  activityType,
  activityTypeColor,
  orderType,
  userInfo,
  valuesInfo,
}: InfoProps) => React.JSX.Element;
type StatusProps = {
  /** Activity status */
  activityStatus?: string;
  /** Activity status color */
  activityTextColor?: keyof Theme['colors'];
  /** Activity id */
  activityId: number | string;
  /** Activity time */
  time: number | string;
};
export declare const ActivityDetailsCardStatus: ({
  activityStatus,
  activityTextColor,
  activityId,
  time,
}: StatusProps) => React.JSX.Element;
export declare const ActivityDetailsCard: ({
  icon,
  title,
  extraIcon,
  amount,
  currency,
  product,
  activityType,
  activityTypeColor,
  orderType,
  userInfo,
  valuesInfo,
  activityStatus,
  activityTextColor,
  activityId,
  time,
  footer,
  error,
}: HeaderProps &
  InfoProps &
  StatusProps & {
    /** Activity card footer */
    footer?: React.ComponentProps<typeof Card>['footer'];
    /** Activity card error */
    error?: string | null | undefined;
  }) => React.JSX.Element;
export {};
