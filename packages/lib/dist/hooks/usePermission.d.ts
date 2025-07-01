import { Permission } from 'react-native-permissions';
/**
 * Checks and requests given permission. Returns status for the permission.
 * @param permission Permission to check/request
 * @param lazy If false, permission will be requested in useEffect,
 *  otherwise — use provided handler to do it manually.
 * @returns Tuple with status and handler
 */
export declare function usePermission(
  permission: Permission,
  lazy?: boolean,
): readonly [boolean | undefined, () => Promise<void>];
