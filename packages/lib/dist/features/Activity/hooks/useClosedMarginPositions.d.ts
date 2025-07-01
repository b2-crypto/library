export declare const useClosedMarginPositions: (props: {
  depth?: number;
  instrumentId?: number;
}) => {
  positions: {
    QuantityFraction: number;
    PriceFraction: number;
    Product1Symbol: string;
    Product2Symbol: string;
    InstrumentSymbol: string;
    PositionProductDecimalPlaces: number;
    PositionProductSymbol: string;
    BorrowedProductDecimalPlaces: number;
    BorrowedProductSymbol: string;
    NotionalProductSymbol: string;
    NotionalProductDecimalPlaces: number;
    Status: 'Open';
    PositionId: number;
    OmsId: number;
    AccountId: number;
    PositionInstrumentId: number;
    BorrowedProductId: number;
    BorrowedAmount: number;
    PositionProductId: number;
    PositionAmount: number;
    DateOpened: string;
    DateClosed: string;
    PositionType: 'Short' | 'Unknown' | 'Long';
    InterestAccrued: number;
    PositionState: 'Open' | 'Closed';
    UnrealizedPnL: number;
    RealizedPnL: number;
    NotionalValue: number;
    NotionalCostBasis: number;
    AverageRate: number;
  }[];
  isLoading: boolean;
  isRefetching: boolean;
  isUninitialized: boolean;
  hasMore: boolean;
  loadMore: () => void;
  refetch: () => import('@reduxjs/toolkit/query').QueryActionCreatorResult<
    import('@reduxjs/toolkit/query').QueryDefinition<
      {
        accountId: number;
        instrumentId?: number | undefined;
        depth?: number | undefined;
        offset?: number | undefined;
        resetCache?: boolean | undefined;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../../../helpers/activity').ActivityResponse<
        import('../../../services/marginApi').MarginPosition
      >,
      'apexApi'
    >
  >;
};
