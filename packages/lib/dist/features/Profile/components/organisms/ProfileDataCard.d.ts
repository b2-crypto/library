import React from 'react';
type ProfileDataCardProps = {
  /** Card header text */
  headerText: string;
  /** Card fields */
  fields: {
    key: string;
    /** Field value */
    value: string | undefined;
    /** Action name */
    action?: string;
    /** Callback when press on field */
    onPress?: () => void;
  }[];
};
export declare const ProfileDataCard: ({
  headerText,
  fields,
}: ProfileDataCardProps) => React.JSX.Element;
export {};
