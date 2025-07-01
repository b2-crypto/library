import { getLogger } from './logger';
const BLACKLISTED_PROPERTIES = [
    'authorization',
    'Token',
    'SessionToken',
    'aptoken',
    'PasswordHash',
];
const RESPONSE_TOO_LARGE = [
    'GetTickerHistory',
    'GetL2Snapshot',
    'EnableGoogle2FA',
];
export const fetchWithLogger = async (input, init) => {
    logRequest(input);
    try {
        const response = await fetch(input, init);
        await logResponse(response);
        return response;
    }
    catch (error) {
        await logError(error, input);
        throw error;
    }
};
function obfuscate(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[key] = BLACKLISTED_PROPERTIES.includes(key) ? `<${key}>` : value;
        return acc;
    }, {});
}
async function logRequest(input) {
    let loggedRequest;
    if (typeof input === 'string') {
        loggedRequest = input;
    }
    else if (input instanceof URL) {
        loggedRequest = input.toString();
    }
    else {
        const cloned = input.clone();
        loggedRequest = JSON.stringify({
            url: input.url,
            // Actually Request Headers has entries method but it is not
            // documented in react-native typings
            // @see https://developer.mozilla.org/en-US/docs/Web/API/Headers/entries
            // @ts-ignore
            headers: obfuscate(Object.fromEntries(input.headers.entries())),
            body: cloned.method === 'POST' ? obfuscate(await cloned.json()) : undefined,
        });
    }
    getLogger()('debug', '[ Request ]: ' + loggedRequest, 'fetchWithLogger');
}
async function logResponse(response) {
    const logDetails = {
        status: response.status,
        url: response.url,
    };
    try {
        const body = await response.clone().json();
        if (RESPONSE_TOO_LARGE.some(endpoint => response.url.includes(endpoint)) &&
            JSON.stringify(body).length > 500) {
            logDetails.body = '<large response>';
        }
        else {
            logDetails.body = obfuscate(body);
        }
    }
    catch {
        logDetails.body = await response.clone().text();
    }
    getLogger()('debug', '[ Response ]: ' + JSON.stringify(logDetails), 'fetchWithLogger');
}
async function logError(error, input) {
    const requestUrl = typeof input === 'string'
        ? input
        : input instanceof URL
            ? input.toString()
            : input.url;
    const errorMsg = error instanceof Error
        ? error.message
        : typeof error === 'string'
            ? error
            : JSON.stringify(error);
    getLogger()('error', `[ Fetch Error ] occured for URL [${requestUrl}]: ${errorMsg}`, 'fetchWithLogger');
}
