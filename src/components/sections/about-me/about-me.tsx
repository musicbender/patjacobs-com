import React, { useState, useEffect } from 'react';
import Plx from 'react-plx';
import { hasWindow, countLongestArray } from '@util/util';
import { startSequence } from '@util/animation';
import { dotGridA } from './dots';
import { StyledHeading, StyledDotGrid, ContentBox, AboutMeSection } from './styles';
import { useGetAboutMeSectionQuery } from '@types';

interface Props {
  atAbout: boolean;
  setAboutTop: () => void;
  isMobile: boolean;
}

const AboutMe = ({ atAbout = false, isMobile }: Props) => {
  const data = useGetAboutMeSectionQuery();

  // on mount
  useEffect(() => {
    // const section = document.getElementById('about-section');
    // const rect = section.getBoundingClientRect();
    // TODO: set top here
  }, []);

  return (
    <AboutMeSection id="about-section">
      <StyledHeading text={data.heading} />
      <Plx
        disabled={!hasWindow() || isMobile}
        parallaxData={[
          {
            start: 'self',
            end: 'self',
            endOffset: '100vh',
            properties: [
              {
                startValue: 20,
                endValue: -16,
                unit: '%',
                property: 'translateY',
              },
            ],
          },
        ]}
      >
        <ContentBox dangerouslySetInnerHTML={{ __html: data.body.html }} />
      </Plx>
    </AboutMeSection>
  );
};

export default AboutMe;
