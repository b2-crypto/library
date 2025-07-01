import { ButtonOptions } from '@apex-rn/library/components';
import { ActivityDetails } from '@apex-rn/library/features/Activity/types';
import { LogInFormData } from '@apex-rn/library/features/Auth/types';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type AuthStackParamList = {
  AuthLanding: undefined;
  TwoFactAuth: undefined;
  TroubleLogging: undefined;
  UpdatePassword: undefined;
  BiometricLogin: undefined;
};

export type HomeTabsParamList = {
  Dashboard: undefined;
  Markets: undefined;
  Wallet: undefined;
  Activity: undefined;
  Profile: {
    initialTab?:
      | 'profile'
      | 'security'
      | 'verification'
      | 'affiliate'
      | 'margin';
  };
  PairDetails: { instrumentId: number };
};

type ProfileStackParamList = {
  TwoFactorActivation: undefined;
  TwoFactorDisable: undefined;
  ConfirmPassword: undefined;
};

type TransactionStackParamList = {
  CreateOrder: { id?: number; isBuy: boolean };
  SendScreen: { id?: number };
  ReceiveScreen: { id?: number };
  ConvertScreen: undefined;
  Transfer: { productId?: number; onSuccess: () => void };
  DepositScreen: { id?: number };
  WithdrawScreen: { id?: number };
};

type WalletStackParamList = {
  WalletDetail: { id: number; actionButtons?: Array<ButtonOptions> };
};

type ScannerStackParamList = {
  Scanner: { onGoBack: (value?: string) => void };
};

type MarketsStackParamList = {
  PairDetails: { instrumentId: number };
};

type ActivityStackParamList = {
  ActivityDetails: ActivityDetails;
};

type BiometricLoginParamList = {
  SetupBiometric: LogInFormData;
};

export type AuthorizedAppParams = {
  Home: NavigatorScreenParams<HomeTabsParamList>;
} & ProfileStackParamList &
  TransactionStackParamList &
  WalletStackParamList &
  ScannerStackParamList &
  MarketsStackParamList &
  ActivityStackParamList &
  BiometricLoginParamList;

export type RootStackParamList = AuthorizedAppParams & AuthStackParamList;

export type RootStackScreenProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;

export type HomeScreenProps<T extends keyof HomeTabsParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabsParamList, T>,
    NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      //
    }
  }
}
