export var OrderSideType;
(function (OrderSideType) {
    OrderSideType[OrderSideType["bid"] = 0] = "bid";
    OrderSideType[OrderSideType["ask"] = 1] = "ask";
    OrderSideType[OrderSideType["short"] = 2] = "short";
    OrderSideType[OrderSideType["error"] = 3] = "error";
})(OrderSideType || (OrderSideType = {}));
export const DEFAULT_DEPTH = 20;
