import { useUserInfo } from '../../../hooks';
export function useMarginEnabled() {
    const { data: userInfo } = useUserInfo();
    return !!userInfo?.MarginBorrowerEnabled;
}
