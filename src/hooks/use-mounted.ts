import { hasWindow } from '@util/util';
import { useEffect, useState } from 'react';

export const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  const inClient = hasWindow();

  useEffect(() => {
    setIsMounted(inClient);
  }, []);

  return {
    isMounted,
    inClient,
  };
};
