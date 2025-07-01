import { validate } from 'trezor-address-validator';
export function validateCryptoAddress(address, productSymbol) {
    try {
        // TODO: do we need a skip list? erc20? uno/iina?
        return validate(address, productSymbol.toLowerCase(), 'both');
    }
    catch (e) {
        return true;
    }
}
;
