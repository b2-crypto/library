export function isErrorResponse(err) {
    return typeof err === 'object' && err !== null && 'errormsg' in err;
}
export function isApexError(err) {
    return (typeof err === 'object' &&
        err !== null &&
        'status' in err &&
        'message' in err &&
        typeof err.message === 'string');
}
export function isApexErrorWithApiData(err) {
    return isApexError(err) && typeof err.data === 'object' && err.data !== null;
}
export var DataActionType;
(function (DataActionType) {
    DataActionType[DataActionType["new"] = 0] = "new";
    DataActionType[DataActionType["update"] = 1] = "update";
    DataActionType[DataActionType["delete"] = 2] = "delete";
})(DataActionType || (DataActionType = {}));
