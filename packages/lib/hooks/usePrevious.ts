import { useEffect, useRef } from 'react';

export const usePrevious = <S>(value: S) => {
  const ref = useRef<S>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
