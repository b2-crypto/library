export type DataThingRequestType = {
  userid: string;
  whatever: number;
};
export type ValidateUserRegistrationRequest = {
  requestIdentifier: number;
  clientInfo: {
    validationStage: number;
    validator: string;
  };
  userInfo: Record<string, never>;
  additionalValidationData: never[];
};
export type SendOrderRequest = {
  InstrumentId: number;
  OMSId: number;
  AccountId?: number;
  TimeInForce: number | string;
  ClientOrderId?: number;
  OrderIdOCO?: number;
  UseDisplayQuantity?: boolean;
  Side: number;
  Quantity?: number;
  Value?: number;
  OrderType: number | string;
  PegPriceType?: number;
  LimitPrice?: number;
  StopPrice?: number;
  Leverage?: number;
};
