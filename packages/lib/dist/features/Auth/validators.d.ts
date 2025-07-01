import * as yup from 'yup';
export declare const schemaToken: yup.ObjectSchema<
  {
    code: string;
  },
  yup.AnyObject,
  {
    code: undefined;
  },
  ''
>;
export declare const shemaUpdatePassword: yup.ObjectSchema<
  {
    password: string;
    confirmPassword: string;
  },
  yup.AnyObject,
  {
    password: undefined;
    confirmPassword: undefined;
  },
  ''
>;
export declare const schemaEmail: yup.ObjectSchema<
  {
    email: string;
    issueType: string;
  },
  yup.AnyObject,
  {
    email: undefined;
    issueType: undefined;
  },
  ''
>;
export declare const schemaLogIn: yup.ObjectSchema<
  {
    userName: string;
    password: string;
  },
  yup.AnyObject,
  {
    userName: undefined;
    password: undefined;
  },
  ''
>;
export declare const sendSchema: yup.ObjectSchema<
  {
    emailAddress: string | undefined;
    amount: string;
  },
  yup.AnyObject,
  {
    emailAddress: undefined;
    amount: undefined;
  },
  ''
>;
export declare const schemaSignUp: yup.ObjectSchema<
  {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    isAccepted: boolean;
  },
  yup.AnyObject,
  {
    userName: undefined;
    email: undefined;
    password: undefined;
    confirmPassword: undefined;
    isAccepted: true;
  },
  ''
>;
