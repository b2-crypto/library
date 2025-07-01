export const TYPES = {
  PUBLIC_STORAGE: 'PUBLIC_STORAGE',
  SECURE_STORAGE: 'SECURE_STORAGE',
  LOGGER: 'LOGGER',
  CONFIG: 'CONFIG',
} as const;

type RegistryKeys = (typeof TYPES)[keyof typeof TYPES];
type Registry = Record<RegistryKeys, unknown>;

const registry = {} as Registry;

/**
 * Registers the service in the registry by the given name.
 * @param name Name of the service
 * @param service Service instance
 */
function registerService(
  name: Exclude<RegistryKeys, 'CONFIG'>,
  service: unknown,
) {
  registry[name] = service;
}

/**
 * Resolves the service by name in the registry or throws the error if service is missing.
 * @param name Name of the service to resolve
 * @returns Resolved service instance of throws the error.
 */
function resolveService<T = unknown>(name: RegistryKeys): T {
  if (!(name in registry)) {
    throw new Error(`Container doesn't have '${name}' service registered.`);
  }
  return registry[name] as T;
}

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
function setConfigValue<N extends keyof Config>(name: N, value: Config[N]) {
  if (registry[TYPES.CONFIG] === null || registry[TYPES.CONFIG] === undefined) {
    registry[TYPES.CONFIG] = {};
  }

  (registry[TYPES.CONFIG] as Config)[name] = value;
}

/**
 * Resolves config from the registry and returns the config value by the given key.
 * @param name Config key (path can be used)
 * @returns Returns the value by the given key or undefined.
 */
function getConfigValue<N extends keyof Config>(
  name: N,
): Config[N] | undefined {
  const config = resolveService<Config>(TYPES.CONFIG);
  return config[name];
}

export const container = {
  registerService,
  resolveService,
  getConfigValue,
  setConfigValue,
};
