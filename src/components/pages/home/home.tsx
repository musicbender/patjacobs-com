import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '@components/sections/header';
import AboutMe from '@components/sections/about-me';
import RecentWork from '@components/sections/recent-work';
import SkillsSection from '@components/sections/skills';
import { HomePage, OutterWrapper, DotSequenceWrapper } from './styles';
import CavieDots from '@components/sections/cavie-dots';
import { useThrottleCallback } from '@hooks';
import { ABOUT_TOP_SET } from '@constants/global';
import { Store } from '@types';
import { useDispatch } from '@store';

const Home: FC = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state: Store) => state.global.isMobile);
  const aboutTop = useSelector((state: Store) => state.home.aboutTop);
  const recentWorkTop = useSelector((state: Store) => state.home.recentWorkTop);
  const skillsTop = useSelector((state: Store) => state.home.skillsTop);
  const [atAbout, setAtAbout] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  const handleScroll = useThrottleCallback((): void => {
    const scrollY = window.scrollY;
    if (scrollY >= aboutTop) {
      if (!atAbout) {
        setAtAbout(true);
      }

      if (scrollY >= skillsTop) {
        if (!atBottom) {
          setAtBottom(true);
        }
      }
    }

    if (scrollY < skillsTop) {
      if (atBottom) {
        setAtBottom(false);
      }

      if (scrollY < aboutTop) {
        if (atAbout) {
          setAtAbout(false);
        }
      }
    }
  }, 50);

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
            atAbout={atAbout}
            setAboutTop={() => dispatch({ type: ABOUT_TOP_SET })}
            isMobile={isMobile}
          />
          <RecentWork />
          <CavieDots baseStart={recentWorkTop - 400} atBottom={atBottom} />
          <SkillsSection atBottom={atBottom} />
        </DotSequenceWrapper>
      </OutterWrapper>
    </HomePage>
  );
};

export default Home;
