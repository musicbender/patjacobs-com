import { useEffect, useRef } from 'react';
import { useDispatch } from '@store';
import { changeSplashActive } from '@actions/global';
import settings from '@configs/settings.json';
import { requestTimeout } from '@util/shims';

export const useSplashScreen = () => {
  const dispatch = useDispatch();
  const splashTimeoutRef = useRef(null);

  useEffect(() => {
    splashTimeoutRef.current = requestTimeout(
      () => {
        dispatch(changeSplashActive(false));
      },
      settings.splashScreenDebug ? 6000000 : settings.splashScreenTimeout,
    );
  }, []);
};
