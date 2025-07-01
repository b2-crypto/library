import { useCallback, useEffect, useState } from 'react';
import { check, request, Permission, RESULTS } from 'react-native-permissions';

/**
 * Checks and requests given permission. Returns status for the permission.
 * @param permission Permission to check/request
 * @param lazy If false, permission will be requested in useEffect,
 *  otherwise — use provided handler to do it manually.
 * @returns Tuple with status and handler
 */
export function usePermission(permission: Permission, lazy = false) {
  const [status, setStatus] = useState<boolean>();

  const handler = useCallback(async () => {
    const checkStatus = await check(permission);
    if (checkStatus === RESULTS.GRANTED) {
      setStatus(true);
    } else if (checkStatus === RESULTS.BLOCKED) {
      setStatus(false);
    } else if (checkStatus === RESULTS.DENIED) {
      setStatus((await request(permission)) === RESULTS.GRANTED);
    }
  }, [setStatus, permission]);

  useEffect(() => {
    !lazy && handler();
  }, [lazy, handler]);

  return [status, handler] as const;
}
