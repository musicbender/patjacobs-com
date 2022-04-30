import React, { FC, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { clearRequestTimeout, requestTimeout } from '@util/shims';
import { changeTransport, setIsMobile } from '@actions/global';
import GlobalStyles from '@styles/global-styles';
import Head from '@components/global/head';
import GridLines from '@components/global/grid-lines';
import Toolbar from '@components/global/toolbar';
import Footer from '@components/global/footer';
import SplashScreen from '../sections/splash-screen';
import settings from '@configs/settings.json';
import { AppWrapper, OutterWrapper, InnerWrapper } from './styles';
import { Store, HeadProps } from '@types';
import { useThrottleCallback } from '@hooks';
import { useCurtain } from 'src/hooks/use-curtain';

type Props = {
  children?: any;
  headProps?: HeadProps;
};

const Layout: FC = ({ headProps = {}, children }: Props) => {
  const router = useRouter();
  const splashActive = useSelector((state: Store) => state.global.splashActive);
  const transportOpen = useSelector((state: Store) => state.global.transportOpen);
  const isMobile = useSelector((state: Store) => state.global.isMobile);
  const skillsTop = useSelector((state: Store) => state.home.skillsTop);
  const mode = useSelector((state: Store) => state.global.mode);
  const splashTimeoutRef = useRef(null);
  const { curtainCovering, curtainState } = useCurtain();
  const dispatch = useDispatch();

  const handleResize = useThrottleCallback((): void => {
    if (isMobile && window.innerWidth > settings.mobileBreakpoint) {
      setIsMobile();
    }

    if (!isMobile && window.innerWidth < settings.mobileBreakpoint) {
      setIsMobile();
    }
  });

  useEffect(() => {
    dispatch(setIsMobile());
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearRequestTimeout(splashTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (curtainState === 'covered') {
      try {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'auto',
        });
      } catch (error) {
        window.scrollTo(0, 0);
      }
    }
  }, [curtainState]);

  const handleToTop = (): void => {
    dispatch(changeTransport(true, settings.transportDuration));
  };

  return (
    <AppWrapper mode={mode} splashActive={splashActive}>
      <GlobalStyles />
      <Head pathname={router.pathname || null} {...headProps} />
      <OutterWrapper>
        <GridLines />
        <Toolbar handleToTop={handleToTop} />
        <InnerWrapper>{children}</InnerWrapper>
      </OutterWrapper>
      <Footer handleToTop={handleToTop} />
      {splashActive && <SplashScreen />}
    </AppWrapper>
  );
};

export default Layout;
