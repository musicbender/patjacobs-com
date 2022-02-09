import { throttle } from '@util/util';
import { useCallback, useEffect, useRef } from 'react';

export const useThrottleCallback = (cb: Function, delay = 500): ((...args: any[]) => any) => {
  const cbRef = useRef(cb);

  // use mutable ref to make useCallback/throttle not depend on `cb` dep
  useEffect(() => {
    cbRef.current = cb;
  });

  return useCallback(
    throttle((...args) => cbRef.current(...args), delay),
    [delay],
  );
};
