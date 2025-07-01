export type ApexSuccessResponse = {
  errorcode: 0;
  errormsg: null;
  detail: null;
  result?: boolean;
  data?: unknown;
};
export type ApexErrorResponse = {
  errorcode: number;
  errormsg: string;
  detail?: string | null;
  result?: false;
};
export type ApexResponse = ApexSuccessResponse | ApexErrorResponse;
export declare function isErrorResponse(err: unknown): err is ApexErrorResponse;
export declare function isApexError(err: unknown): err is {
  status: number;
  data: unknown;
  message: string;
};
export declare function isApexErrorWithApiData(err: unknown): err is {
  status: number;
  data: Record<string, unknown>;
  message: string;
};
export type Auth2FAType = {
  pending2FaToken?: string;
  code: string;
};
export interface Auth2FAResponseType {
  Authenticated: boolean;
  SessionToken: string;
  UserId: number;
}
export interface AuthResponseType {
  AccountId: string;
  Authenticated: boolean;
  OMSId: string;
  SessionToken: string;
  Token: string;
  UserId: number;
  errormsg?: string;
  Requires2FA?: boolean;
  Pending2FaToken?: string;
}
export interface UserInfo {
  userName: string;
  email: string;
  passwordHash: string;
}
export interface RegisterUserResponseType {
  userInfo: UserInfo;
  userConfig: any[];
  operatorId: number;
}
export type ResetPasswordType =
  | {
      password: string;
    }
  | {
      UserName: string;
    };
export interface ResetPasswordResponseType {
  errormsg?: string;
  errorcode?: number;
  result: boolean;
}
type ProductLevelConfig = {
  VerificationLevel: number;
  ProductId: number;
  ProductName: string;
  AutoWithdrawThreshold: number;
  DailyDepositLimit: number;
  DailyDepositNotionalLimit: number;
  MonthlyDepositLimit: number;
  MonthlyDepositNotionalLimit: number;
  YearlyDepositLimit: number;
  YearlyDepositNotionalLimit: number;
  DailyWithdrawLimit: number;
  DailyWithdrawNotionalLimit: number;
  MonthlyWithdrawLimit: number;
  MonthlyWithdrawNotionalLimit: number;
  YearlyWithdrawLimit: number;
  YearlyWithdrawNotionalLimit: number;
  NotionalProductId: number;
  OverLimitRejected: boolean;
  WithdrawProcessingDelaySec: number;
  DepositTicketWorkflow: string;
  WithdrawTicketWorkflow: string;
  RequireWhitelistedAddress: boolean;
  AutoAcceptWhitelistedAddress: boolean;
};
export type VerificationLevelConfigResponse = {
  OMSId: number;
  Level: number;
  Products: Array<ProductLevelConfig>;
};
export type TemplateType = {
  AccountProviderId: number;
  AccountProviderName: string;
  TemplateName: string;
};
export type TemplateTypesResponse = {
  TemplateTypes: TemplateType[];
};
export interface IProduct {
  OMSId: number;
  ProductId: number;
  Product: string;
  ProductType: 'NationalCurrency' | 'CryptoCurrency' | 'Contract';
  ProductFullName: string;
  DecimalPlaces: number;
  IsDisabled: boolean;
  MarginEnabled: boolean;
  MasterDataUniqueProductSymbol: string | null;
  NoFees: boolean;
  TickSize: number;
}
export interface IAccountPosition {
  AccountId: number;
  Amount: number;
  AvailableBalance: number;
  AvailableBalanceNotional: number;
  DecimalPlaces: number;
  Hold: number;
  DepositEnabled: boolean;
  MarginLend: number;
  MarginLiability: number;
  MarginEnabled: boolean;
  NotionalHoldAmount: number;
  NotionalProductId: number;
  NotionalProductSymbol: string;
  NotionalRate: number;
  NotionalValue: number;
  OMSId: number;
  PendingDeposits: number;
  PendingDepositsNotional: number;
  PendingWithdraws: number;
  ProductFullName: string;
  ProductId: number;
  ProductSymbol: string;
  StartOfDayBalanceNotional: number;
  TotalDayDepositNotional: number;
  TotalDayDeposits: number;
  TotalDayInflowsAndOutflowsNotional: number;
  TotalDayTransferNotional: number;
  TotalDayWithdrawNotional: number;
  TotalDayWithdraws: number;
  TotalMonthDepositNotional: number;
  TotalMonthDeposits: number;
  TotalMonthWithdrawNotional: number;
  TotalMonthWithdraws: number;
  TotalYearDepositNotional: number;
  TotalYearDeposits: number;
  TotalYearWithdrawNotional: number;
  TotalYearWithdraws: number;
  WithdrawEnabled: boolean;
}
export interface IInstrument {
  OMSId: number;
  InstrumentId: number;
  Symbol: string;
  Product1: number;
  Product1Symbol: string;
  Product2: number;
  Product2Symbol: string;
  InstrumentType: string;
  VenueInstrumentId: number;
  VenueId: number;
  SortIndex: number;
  SessionStatus: string;
  PreviousSessionStatus: string;
  SessionStatusDateTime: string;
  SelfTradePrevention: boolean;
  QuantityIncrement: number;
  PriceIncrement: number;
  MinimumQuantity: number;
  MinimumPrice: number;
  VenueSymbol: string;
  IsDisable: boolean;
  MasterDataId: number;
  PriceCollarThreshold: number;
  PriceCollarPercent: number;
  PriceCollarEnabled: boolean;
  PriceFloorLimit: number;
  PriceFloorLimitEnabled: boolean;
  PriceCeilingLimit: number;
  PriceCeilingLimitEnabled: boolean;
  CreateWithMarketRunning: boolean;
  AllowOnlyMarketMakerCounterParty: boolean;
  PriceCollarIndexDifference: number;
  PriceCollarConvertToOtcEnabled: boolean;
  PriceCollarConvertToOtcClientUserId: number;
  PriceCollarConvertToOtcAccountId: number;
  PriceCollarConvertToOtcThreshold: number;
  OtcConvertSizeThreshold: number;
  OtcConvertSizeEnabled: boolean;
  OtcTradesPublic: boolean;
  PriceTier: number;
}
export interface ILevel1 {
  OMSId: number;
  InstrumentId: number;
  BestBid: number;
  BestOffer: number;
  LastTradedPx: number;
  LastTradedQty: number;
  LastTradeTime: number;
  SessionOpen: number;
  SessionHigh: number;
  SessionLow: number;
  SessionClose: number;
  Volume: number;
  CurrentDayVolume: number;
  CurrentDayNotional: number;
  CurrentDayNumTrades: number;
  CurrentDayPxChange: number;
  Rolling24HrVolume: number;
  Rolling24HrNotional: number;
  Rolling24NumTrades: number;
  Rolling24HrPxChange: number;
  TimeStamp: string;
  BidQty: number;
  AskQty: number;
  BidOrderCt: number;
  AskOrderCt: number;
  Rolling24HrPxChangePercent: number;
}
export interface IInstrumentWithLevel1 extends IInstrument, ILevel1 {}
export type OrderSide = 'Buy' | 'Sell' | 'Short' | 'Unknown';
export type OrderType =
  | 'Unknown'
  | 'Market order'
  | 'Limit'
  | 'StopMarket'
  | 'StopLimit'
  | 'TrailingStopMarket'
  | 'TrailingStopLimit'
  | 'BlockTrade';
export type OrderChangeReason =
  | 'Unknown'
  | 'NewInputAccepted'
  | 'NewInputRejected'
  | 'OtherRejected'
  | 'Expired'
  | 'Trade'
  | 'SystemCanceled_NoMoreMarket'
  | 'SystemCanceled_BelowMinimum'
  | 'SystemCanceled_PriceCollar'
  | 'SystemCanceled_MarginFailed'
  | 'UserModified';
export type OrderState =
  | 'Unknown'
  | 'Working'
  | 'Rejected'
  | 'Canceled'
  | 'Expired'
  | 'FullyExecuted';
export type OrderHistoryItem = {
  Side: OrderSide;
  OrderId: number;
  Price: number;
  Quantity: number;
  DisplayQuantity: number;
  Instrument: number;
  Account: number;
  OrderType: OrderType;
  ClientOrderId: number;
  OrderState: OrderState;
  ReceiveTime: number;
  ReceiveTimeTicks: number;
  OrigQuantity: number;
  QuantityExecuted: number;
  AvgPrice: number;
  CounterPartyId: number;
  ChangeReason: OrderChangeReason;
  OrigOrderId: number;
  OrigClOrdId: number;
  EnteredBy: number;
  IsQuote: boolean;
  InsideAsk: number;
  InsideAskSize: number;
  InsideBid: number;
  InsideBidSize: number;
  LastTradePrice: number;
  RejectReason: string;
  IsLockedIn: boolean;
  CancelReason: string;
  OMSId: number;
};
export type OpenOrderItem = {
  Side: OrderSide;
  OrderId: number;
  Price: number;
  Quantity: number;
  DisplayQuantity: number;
  Instrument: number;
  Account: number;
  AccountName: string;
  OrderType: OrderType;
  ClientOrderId: number;
  OrderState: OrderState;
  ReceiveTime: number;
  ReceiveTimeTicks: number;
  LastUpdatedTime: number;
  LastUpdatedTimeTicks: number;
  OrigQuantity: number;
  QuantityExecuted: number;
  GrossValueExecuted: number;
  ExecutableValue: number;
  AvgPrice: number;
  CounterPartyId: number;
  ChangeReason: OrderChangeReason;
  OrigOrderId: number;
  OrigClOrdId: number;
  EnteredBy: number;
  UserName: string;
  IsQuote: boolean;
  InsideAsk: number;
  InsideAskSize: number;
  InsideBid: number;
  InsideBidSize: number;
  LastTradePrice: number;
  RejectReason: string;
  IsLockedIn: boolean;
  CancelReason: string;
  OrderFlag: string;
  UseMargin: boolean;
  StopPrice: number;
  PegPriceType: string;
  PegOffset: number;
  PegLimitOffset: number;
  IpAddress: any;
  ClientOrderIdUuid: any;
  OMSId: number;
};
export type OrderHistoryResponse = Array<OrderHistoryItem>;
export type TradeHistoryItem = {
  OMSId: number;
  ExecutionId: number;
  TradeId: number;
  OrderId: number;
  AccountId: number;
  AccountName: string;
  SubAccountId: number;
  ClientOrderId: number;
  InstrumentId: number;
  Side: OrderSide;
  OrderType: OrderType;
  Quantity: number;
  RemainingQuantity: number;
  Price: number;
  Value: number;
  CounterParty: string;
  OrderTradeRevision: number;
  Direction: string;
  IsBlockTrade: boolean;
  Fee: number;
  FeeProductId: number;
  OrderOriginator: number;
  UserName: string;
  TradeTime: number;
  TradeTimeMS: number;
  MakerTaker: string;
  AdapterTradeId: number;
  InsideBid: number;
  InsideBidSize: number;
  InsideAsk: number;
  InsideAskSize: number;
  IsQuote: boolean;
  CounterPartyClientUserId: number;
  NotionalProductId: number;
  NotionalRate: number;
  NotionalValue: number;
  NotionalHoldAmount: number;
};
export interface IValidateToken {
  data?: {
    UserId: number;
    SessionToken: string;
    Authenticated: boolean;
  };
  error?: string;
}
export interface IUserInfo {
  data?: {
    UserName: string;
    AccountId: number;
  };
}
export type UserInfoResponse = {
  UserId: number;
  UserName: string;
  Email: string;
  EmailVerified: boolean;
  PasswordHash?: string;
  Salt?: string;
  PendingEmailCode?: string;
  PendingCodeTime?: string;
  AccountId: number;
  DateTimeCreated: string;
  AffiliateId?: number;
  RefererId?: number;
  OMSId: number;
  Use2FA: boolean;
  Locked: boolean;
  LockedTime: string;
  NumberOfFailedAttempt: number;
  MarginBorrowerEnabled: boolean;
  MarginAcquisitionHalt: boolean;
  OperatorId: number;
};
export declare enum DataActionType {
  new = 0,
  update = 1,
  delete = 2,
}
export type GetUserConfigResponse = {
  levelIncreaseStatus: 'pass' | 'fail';
  '2FAType': 'Google';
  GooglePassPhrase: string;
  Language: string;
};
export type GetUserConfigRawResponse = Array<{
  Key: string;
  Value: string;
}>;
export type GetAccountInfoResponse = {
  AccountHandle: null;
  AccountId: number;
  AccountName: string;
  AccountType: string;
  CreditTier: number;
  FeeGroupId: number;
  FeeProduct: number;
  FeeProductType: string;
  FirmId: null;
  FirmName: null;
  Frozen: boolean;
  LoyaltyEnabled: boolean;
  LoyaltyProductId: number;
  OMSID: number;
  ParentID: number;
  PriceTier: number;
  RefererId: number;
  RiskType: string;
  VerificationLevel: number;
};
export type ValidateUserRegistrationResponseRaw = {
  result: string | false;
};
export type ValidateUserRegistrationResponse = {
  ErrorMessage: any;
  ValidationAnswerData: {
    AcceptedStage: number;
    ApiError: any;
    ApiErrorDescription: any;
    DoNotEscalateLevel: boolean;
    DoNotSendNeedsManualReviewEmail: boolean;
    IsAccepted: boolean;
    NeedsManualReview: boolean;
    ProcessorData: {
      accessToken: string;
      userId: string;
    };
    ProcessorTransactionID: string;
    RawDataFormat: string;
    RedirectUrl: string;
    ValidatorTransactionID: any;
  };
};
export type SendOrderSuccessResponse = {
  status: 'Accepted' | 'Rejected';
  OrderId: number;
};
export type TransferRequest = {
  CreatedTimestamp: string;
  LastUpdateTimestamp: string;
  OMSId: number;
  OperatorId: number;
  RequestId: number;
  RequestCode: string;
  PayerUsername: string;
  PayerAccountId: number;
  RequestorUsername: string;
  RequestorAccountId: number;
  ProductId: number;
  ProductName: string;
  Amount: number;
  Notes: string;
  Status: string;
};
export type DepositStatus =
  | 'New'
  | 'AdminProcessing'
  | 'Accepted'
  | 'Rejected'
  | 'SystemProcessing'
  | 'FullyProcessed'
  | 'Failed'
  | 'Pending'
  | 'Confirmed'
  | 'AmlProcessing'
  | 'AmlAccepted'
  | 'AmlRejected'
  | 'AmlFailed'
  | 'LimitsAccepted'
  | 'LimitsRejected'
  | 'AmlRegistered';
export type WithdrawStatus =
  | 'New'
  | 'AdminProcessing'
  | 'Accepted'
  | 'Rejected'
  | 'SystemProcessing'
  | 'FullyProcessed'
  | 'Failed'
  | 'Pending'
  | 'Pending2Fa'
  | 'AutoAccepted'
  | 'Delayed'
  | 'UserCancelled'
  | 'AdminCancelled'
  | 'AmlAddressVerificationProcessing'
  | 'AmlAccepted'
  | 'AmlRejected'
  | 'AmlFailed'
  | 'LimitsAccepted'
  | 'LimitsRejected'
  | 'Submitted'
  | 'Confirmed'
  | 'ManuallyConfirmed'
  | 'Confirmed2Fa'
  | 'AvsPending'
  | 'AmlAcceptedOverride'
  | 'PendingSubmission'
  | 'ReSubmitted'
  | 'ManualReview';
export type DepositTicket = {
  AssetManagerId: number;
  AccountProviderId: number;
  AccountId: number;
  AssetId: number;
  AccountName: string;
  AssetName: string;
  Amount: number;
  NotionalValue: number;
  NotionalProductId: number;
  OMSId: number;
  RequestCode: string;
  ReferenceId: string;
  RequestIP: string;
  RequestUser: number;
  RequestUserName: string;
  OperatorId: number;
  Status: DepositStatus;
  FeeAmt: number;
  UpdatedByUser: number;
  UpdatedByUserName: string;
  TicketNumber: number;
  DepositInfo: string;
  RejectReason?: string;
  CreatedTimestamp: string;
  LastUpdateTimeStamp: string;
  CreatedTimestampTick: number;
  LastUpdateTimeStampTick: number;
  Comments: any[];
  Attachments: any[];
};
export type WithdrawTicket = {
  AssetManagerId: number;
  AccountId: number;
  AccountName: string;
  AssetId: number;
  AssetName: string;
  Amount: number;
  NotionalValue: number;
  NotionalProductId: number;
  TemplateForm?: string;
  TemplateFormType?: string;
  OMSId: number;
  RequestCode: string;
  RequestIP: string;
  RequestUserId: number;
  RequestUserName: string;
  OperatorId: number;
  Status: WithdrawStatus;
  FeeAmt: number;
  UpdatedByUser: number;
  UpdatedByUserName: string;
  TicketNumber: number;
  WithdrawTransactionDetails: string;
  RejectReason: any;
  CreatedTimestamp: string;
  LastUpdateTimestamp: string;
  CreatedTimestampTick: number;
  LastUpdateTimestampTick: number;
  Comments: any[];
  Attachments: any[];
  AuditLog: any[];
};
export type TransferItem = {
  TransferId: number;
  SenderAccountId: number;
  SenderUserName: string;
  ReceiverAccountId: number;
  ReceiverUserName: string;
  ProductId: number;
  Amount: number;
  Notes: string;
  OMSId: number;
  Reason: string;
  TransferState: string;
  CreatedTimeInTicks: number;
  LastUpdatedTimeInTicks: number;
};
export type AccountTradeItem = {
  OMSId: number;
  ExecutionId: number;
  TradeId: number;
  OrderId: number;
  AccountId: number;
  AccountName: string;
  SubAccountId: number;
  ClientOrderId: number;
  InstrumentId: number;
  Side: OrderSide;
  OrderType: OrderType;
  Quantity: number;
  RemainingQuantity: number;
  Price: number;
  Value: number;
  CounterParty: string;
  OrderTradeRevision: number;
  Direction: string;
  IsBlockTrade: boolean;
  Fee: number;
  FeeProductId: number;
  OrderOriginator: number;
  UserName: string;
  TradeTimeMS: number;
  MakerTaker: string;
  AdapterTradeId: number;
  InsideBid: number;
  InsideBidSize: number;
  InsideAsk: number;
  InsideAskSize: number;
  IsQuote: boolean;
  CounterPartyClientUserId: number;
  NotionalProductId: number;
  NotionalRate: number;
  NotionalValue: number;
  NotionalHoldAmount: number;
  TradeTime: number;
};
export type WithdrawInfoResponse = Array<{
  AccountWithdrawInfoId: string;
  AccountId: number;
  ProductId: number;
  ProductName: string;
  Name: string;
  AccountIdentifier: string;
  Verified: boolean;
}>;
export type ActivityItem = {
  id: number;
  amount: number;
  type: string;
  status: string;
  timestamp: number;
  instrumentId?: number;
  productId?: number;
  decimalPlaces?: number;
  currency?: string;
  fullName?: string;
  symbol?: string;
};
export interface OrderActivity extends ActivityItem {
  type: OrderType;
  status: OrderState;
  iconSymbols?: readonly [string, string];
  side: OrderSide;
  avgPrice: number;
  limitPrice?: number;
}
export interface WalletActivity extends ActivityItem {
  type: 'withdraw' | 'deposit';
  status: DepositStatus | WithdrawStatus;
  iconSymbol?: string;
  notionalSymbol?: string;
  notionalRate?: number;
  notionalPlaces?: number;
  fullname?: string;
  comments?: string;
}
export type AccountTransactionType =
  | 'deposit'
  | 'withdraw'
  | 'buy'
  | 'sell'
  | 'send'
  | 'receive'
  | 'deposit-fee'
  | 'withdraw-fee'
  | 'buy-fee'
  | 'sell-fee'
  | 'unknown';
export interface AccountTransactionActivity extends ActivityItem {
  type: AccountTransactionType;
  status: 'complete';
  iconSymbol?: string;
  notionalSymbol?: string;
  notionalRate?: number;
  notionalPlaces?: number;
  referenceType: ReferenceType;
  transactionType: TransactionType;
  isCR: boolean;
}
export type TransactionType =
  | 'Fee'
  | 'Trade'
  | 'Other'
  | 'Reverse'
  | 'Hold'
  | 'Rebate'
  | 'MarginAcquisition'
  | 'MarginRelinquish';
export type ReferenceType =
  | 'Trade'
  | 'Deposit'
  | 'Withdraw'
  | 'Transfer'
  | 'OrderHold'
  | 'WithdrawHold'
  | 'DepositHold'
  | 'MarginHold'
  | 'ManualHold'
  | 'ManualEntry'
  | 'MarginAcquisition'
  | 'MarginRelinquish'
  | 'MarginQuoteHold';
export type AccountTransaction = {
  TransactionId: number;
  ReferenceId: number;
  OMSId: number;
  AccountId: number;
  CR: number;
  DR: number;
  Counterparty: number;
  TransactionType: TransactionType;
  ReferenceType: ReferenceType;
  ProductId: number;
  Balance: number;
  TimeStamp: number;
};
export type MarginAccountInfoResponse = {
  OMSId: number;
  AccountId: number;
  NotionalProductId: number;
  AccountValue: number;
  MaintenanceRequirement: number;
  RiskLevel: number;
  AccountRiskLevelDescription: string;
  Balance: number;
  BuyingPowerUsed: number;
  CollateralRatio: number;
  InLiquidation: boolean;
  InMarginCall: boolean;
  Liability: number;
  LiquidationThreshold: number;
  MarginAccountStatus: string;
  MarginBalance: number;
  MarginEquity: number;
  PnLPercentage: number;
  PnLValue: number;
  PositionsValue: number;
  TimeStamp: string;
  UsableMarginValue: number;
  UsedMarginValue: number;
  AccountType: string;
};
export type AccountCurrentInfo = {
  AccountId: number;
  Balance: number;
  AccountType: string;
};
export type InstrumentsMarginConfigResponse = Array<{
  InitialLimit: number;
  InitialRequirement: number;
  InstrumentId: number;
  InstrumentSymbol: string;
  IsActive: boolean;
  MaintenanceRequirement: number;
  OMSId: number;
}>;
export interface IMarginProductConfig {
  APY: number;
  CollateralEnabled: boolean;
  HaircutAmount: number;
  HourlyInterestRate: number;
  OMSId: number;
  ProductId: number;
}
export type MarginBalanceResponse = {
  AccountId: number;
  AvailableAmount: number;
  AvailableNotional: number;
  HaircutAmount: number;
  HaircutAmountNotional: number;
  LiabilityAmount: number;
  LiabilityAmountNotional: number;
  OnHoldAmount: number;
  OnHoldNotional: number;
  ProductId: number;
  TotalAmount: number;
  TotalAmountNotional: number;
  UsableMargin: number;
  UsableMarginNotional: number;
  UsedMargin: number;
  UsedMarginNotional: number;
};
export type AccountPositionSummaryResponse = {
  OMSId: number;
  AccountId: number;
  NotionalProductId: number;
  AccountValue: number;
  MaintenanceRequirement: number;
  Balance: number;
  AccountType: string;
  OnHoldAmountNotional: number;
  PnLPercentage: number;
  PnLValue: number;
  TotalBalanceNotional: number;
};
export type ProductsMarginConfigResponse = Array<IMarginProductConfig>;
export {};
