import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSplashActive } from '@actions/global';
import { Store } from '@types';
import settings from '@configs/settings.json';
import { requestTimeout } from '@util/shims';

type UseCurtainReturn = {
  splashActive: boolean;
};

export const useSplashScreen = (): UseCurtainReturn => {
  const splashActive = useSelector((state: Store) => state.global.splashActive);
  const dispatch = useDispatch();
  const splashTimeoutRef = useRef(null);

  useEffect(() => {
    dispatch(changeSplashActive(true));
    splashTimeoutRef.current = requestTimeout(
      () => {
        dispatch(changeSplashActive(false));
      },
      settings.splashScreenDebug ? 6000000 : settings.splashScreenTimeout,
    );
  }, []);

  return {
    splashActive,
  };
};
