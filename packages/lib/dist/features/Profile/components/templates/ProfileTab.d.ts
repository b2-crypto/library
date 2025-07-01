import React, { Dispatch, SetStateAction } from 'react';
type ProfileTabProps<Tab extends string> = {
  setActiveTab: Dispatch<SetStateAction<Tab>>;
};
export declare const ProfileTab: <Tab extends string>({
  setActiveTab,
}: ProfileTabProps<Tab>) => React.JSX.Element;
export {};
