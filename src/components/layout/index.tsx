import React, { FC, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { clearRequestTimeout, requestTimeout } from '@util/shims';
import { changeScrollCurtain, setIsMobile } from '@actions/global';
import { useDispatch } from '@store';
import GlobalStyles from '@styles/global-styles';
import GridLines from '@components/global/grid-lines';
import Toolbar from '@components/global/toolbar';
import Footer from '@components/global/footer';
import SplashScreen from '../sections/splash-screen';
import settings from '@configs/settings.json';
import { AppWrapper, OutterWrapper, InnerWrapper } from './styles';
import { Store, CurtainMode, CurtainType } from '@types';
import { useThrottleCallback } from '@hooks';
import { useCurtain } from 'src/hooks/use-curtain';
import { scrollToTop } from '@util/animation';
import Curtain from '@components/global/curtain';
import meta from '@configs/meta.json';
import { AnimatePresence } from 'framer-motion';

type Props = {
  children?: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const splashActive = useSelector((state: Store) => state.global.splashActive);
  const scrollCurtainActive = useSelector((state: Store) => state.global.scrollCurtainActive);
  const isMobile = useSelector((state: Store) => state.global.isMobile);
  const mode = useSelector((state: Store) => state.global.mode);
  const splashTimeoutRef = useRef(null);
  const { curtainState } = useCurtain();
  const dispatch = useDispatch();

  const pageUrl = `${meta.siteUrl}${router.asPath}`;

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
    if (curtainState === 'covered') scrollToTop();
  }, [curtainState]);

  const handleToTop = (): void => {
    dispatch(changeScrollCurtain(true));
    requestTimeout((): void => {
      scrollToTop();
    }, settings.scrollCurtainDurations[0] * 1000);
  };

  return (
    <AppWrapper mode={mode} splashActive={splashActive}>
      <Head>
        <link rel="canonical" href={pageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:url" content={pageUrl} />
        {router.asPath.includes('/case-study') && <meta property="og:type" content="article" />}
      </Head>
      <GlobalStyles />
      <OutterWrapper>
        <GridLines />
        <Toolbar handleToTop={handleToTop} />
        <InnerWrapper>{children}</InnerWrapper>
      </OutterWrapper>
      <Footer handleToTop={handleToTop} />
      {splashActive && <SplashScreen />}
      <AnimatePresence initial={false}>
        {scrollCurtainActive && (
          <Curtain
            coverMode={CurtainMode.FULL}
            uncoverMode={CurtainMode.FULL}
            curtainType={CurtainType.SCROLL}
            durations={settings.scrollCurtainDurations}
          />
        )}
      </AnimatePresence>
    </AppWrapper>
  );
};

export default Layout;
