import { container, TYPES } from '../services/container';

export type LogLevel = 'error' | 'debug' | 'info';
export type Logger = (
  event: LogLevel,
  payload: unknown,
  moduleName?: string,
) => void;

export function getLogger() {
  return container.resolveService<Logger>(TYPES.LOGGER);
}
