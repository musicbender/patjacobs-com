import React, { FC, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import { useDispatch, useSelector } from 'react-redux';
import { clearRequestTimeout, requestTimeout } from '@util/shims';
import { changeSplashOpen, changeTransport, setIsMobile } from '@actions/global';
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

type Props = {
  children?: any;
  headProps?: HeadProps;
};

const Layout: FC = ({ headProps = {}, children }: Props) => {
  const router = useRouter();
  const splashOpen = useSelector((state: Store) => state.global.splashOpen);
  const transportOpen = useSelector((state: Store) => state.global.transportOpen);
  const isMobile = useSelector((state: Store) => state.global.isMobile);
  const skillsTop = useSelector((state: Store) => state.home.skillsTop);
  const mode = useSelector((state: Store) => state.global.mode);
  const splashTimeoutRef = useRef(null);
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

    splashTimeoutRef.current = requestTimeout(
      () => {
        dispatch(changeSplashOpen(false));
      },
      settings.splashScreenDebug ? 6000000 : settings.splashScreenTimeout,
    );

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearRequestTimeout(splashTimeoutRef.current);
    };
  }, []);

  const handleToTop = (): void => {
    dispatch(changeTransport(true, settings.transportDuration));
    requestTimeout((): void => {
      window.scrollTo(0, 0);
    }, settings.transportDuration / 2 - 500);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper mode={mode} splashOpen={splashOpen}>
        <GlobalStyles />
        <Head pathname={router.pathname || null} {...headProps} />
        <OutterWrapper>
          <GridLines gridLines={settings.gridLines} />
          <Toolbar handleToTop={handleToTop} />
          {splashOpen && <SplashScreen />}
          <InnerWrapper>{children}</InnerWrapper>
        </OutterWrapper>
        <Footer handleToTop={handleToTop} />
        {/* {transportOpen && (
          <Modal>
            <Curtain
              entrance="full"
              exit="full"
              duration={settings.curtainDuration}
            />
          </Modal>
        )} */}
      </AppWrapper>
    </ThemeProvider>
  );
};

export default Layout;
