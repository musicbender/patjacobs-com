import { throttle } from 'src/lib/util/util';
import { useCallback, useEffect, useRef } from 'react';

export const useThrottleCallback = (cb: () => void, delay = 500): (() => any) => {
  const cbRef = useRef(cb);

  // use mutable ref to make useCallback/throttle not depend on `cb` dep
  useEffect(() => {
    cbRef.current = cb;
  });

  return useCallback(
    throttle(() => cbRef.current(), delay),
    [delay],
  );
};
