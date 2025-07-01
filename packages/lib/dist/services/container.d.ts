export declare const TYPES: {
  readonly PUBLIC_STORAGE: 'PUBLIC_STORAGE';
  readonly SECURE_STORAGE: 'SECURE_STORAGE';
  readonly LOGGER: 'LOGGER';
  readonly CONFIG: 'CONFIG';
};
type RegistryKeys = (typeof TYPES)[keyof typeof TYPES];
/**
 * Registers the service in the registry by the given name.
 * @param name Name of the service
 * @param service Service instance
 */
declare function registerService(
  name: Exclude<RegistryKeys, 'CONFIG'>,
  service: unknown,
): void;
/**
 * Resolves the service by name in the registry or throws the error if service is missing.
 * @param name Name of the service to resolve
 * @returns Resolved service instance of throws the error.
 */
declare function resolveService<T = unknown>(name: RegistryKeys): T;
type Config = {
  baseUrl: string;
  webBaseUrl: string;
  verificationLevels: Array<{
    level: number;
    benefitsVisible: boolean;
    requirementsVisible: boolean;
    verificationMethod: string;
  }>;
  features: Record<never, boolean>;
};
/**
 * Sets the configuration value
 * @param name Name of the configuration variable
 * @param value Value
 */
declare function setConfigValue<N extends keyof Config>(
  name: N,
  value: Config[N],
): void;
/**
 * Resolves config from the registry and returns the config value by the given key.
 * @param name Config key (path can be used)
 * @returns Returns the value by the given key or undefined.
 */
declare function getConfigValue<N extends keyof Config>(
  name: N,
): Config[N] | undefined;
export declare const container: {
  registerService: typeof registerService;
  resolveService: typeof resolveService;
  getConfigValue: typeof getConfigValue;
  setConfigValue: typeof setConfigValue;
};
export {};
