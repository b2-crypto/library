import { container, TYPES } from '../services/container';
export function getLogger() {
    return container.resolveService(TYPES.LOGGER);
}
