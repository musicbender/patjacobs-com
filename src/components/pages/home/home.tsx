import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '@components/sections/header';
import AboutMe from '@components/sections/about-me';
import RecentWork from '@components/sections/recent-work';
import SkillsSection from '@components/sections/skills';
import { HomePage, OutterWrapper, DotSequenceWrapper } from './styles';
import CavieDots from '@components/sections/cavie-dots';
import { useThrottle } from '@hooks';
import { ABOUT_TOP_SET } from '@constants/global';
import { Store } from '@types';

const Home: FC = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state: Store) => state.global.isMobile);
  const aboutTop = useSelector((state: Store) => state.home.aboutTop);
  const recentWorkTop = useSelector((state: Store) => state.home.recentWorkTop);
  const skillsTop = useSelector((state: Store) => state.home.skillsTop);
  const [atAbout, setAtAbout] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const throttledAtAbout = useThrottle(atAbout, 80);
  const throttledAtBottom = useThrottle(atBottom, 80);

  const handleScroll = (): void => {
    const scrollY = window.scrollY;

    if (scrollY >= aboutTop) {
      if (!throttledAtAbout) {
        setAtAbout(true);
      }

      if (scrollY >= skillsTop) {
        if (!throttledAtBottom) {
          setAtBottom(true);
        }
      }
    }

    if (scrollY < skillsTop) {
      if (throttledAtBottom) {
        setAtBottom(false);
      }

      if (scrollY < aboutTop) {
        if (throttledAtAbout) {
          setAtAbout(false);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HomePage>
      <OutterWrapper>
        <Header />
        <DotSequenceWrapper>
          <AboutMe
            atAbout={throttledAtAbout}
            setAboutTop={() => dispatch({ type: ABOUT_TOP_SET })}
            isMobile={isMobile}
          />
          <RecentWork />
          <CavieDots baseStart={recentWorkTop - 400} atBottom={throttledAtBottom} />
          <SkillsSection atBottom={throttledAtBottom} />
        </DotSequenceWrapper>
      </OutterWrapper>
    </HomePage>
  );
};

export default Home;
