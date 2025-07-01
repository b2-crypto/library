export type LogLevel = 'error' | 'debug' | 'info';
export type Logger = (
  event: LogLevel,
  payload: unknown,
  moduleName?: string,
) => void;
export declare function getLogger(): Logger;
