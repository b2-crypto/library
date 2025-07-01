import { useCurrentOms } from '../../../hooks/useCurrentOms';
export function useMarginAvailable() {
    const { data } = useCurrentOms();
    return !!data?.SystemMarginEnabled;
}
