export const TYPES = {
    PUBLIC_STORAGE: 'PUBLIC_STORAGE',
    SECURE_STORAGE: 'SECURE_STORAGE',
    LOGGER: 'LOGGER',
    CONFIG: 'CONFIG',
};
const registry = {};
/**
 * Registers the service in the registry by the given name.
 * @param name Name of the service
 * @param service Service instance
 */
function registerService(name, service) {
    registry[name] = service;
}
/**
 * Resolves the service by name in the registry or throws the error if service is missing.
 * @param name Name of the service to resolve
 * @returns Resolved service instance of throws the error.
 */
function resolveService(name) {
    if (!(name in registry)) {
        throw new Error(`Container doesn't have '${name}' service registered.`);
    }
    return registry[name];
}
/**
 * Sets the configuration value
 * @param name Name of the configuration variable
 * @param value Value
 */
function setConfigValue(name, value) {
    if (registry[TYPES.CONFIG] === null || registry[TYPES.CONFIG] === undefined) {
        registry[TYPES.CONFIG] = {};
    }
    registry[TYPES.CONFIG][name] = value;
}
/**
 * Resolves config from the registry and returns the config value by the given key.
 * @param name Config key (path can be used)
 * @returns Returns the value by the given key or undefined.
 */
function getConfigValue(name) {
    const config = resolveService(TYPES.CONFIG);
    return config[name];
}
export const container = {
    registerService,
    resolveService,
    getConfigValue,
    setConfigValue,
};
