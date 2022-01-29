import React, { useState, useEffect } from 'react';
import Plx from 'react-plx';
import { hasWindow, countLongestArray } from '../../../util/util';
import { startSequence } from '../../../util/animation';
import { dotGridA } from './dots';
import { StyledHeading, StyledDotGrid, ContentBox, AboutMeSection } from './styles';

interface Props {
  atAbout: boolean;
  setAboutTop: () => void;
  isMobile: boolean;
}

const AboutMe = ({ atAbout = false, isMobile }: Props) => {
  // TODO: getAboutMeSection.graphql

  const [dotGridIndex, updateSequence] = useState(0);
  const interval = 180;
  const delay = 0;

  // on mount
  useEffect(() => {
    // const section = document.getElementById('about-section');
    // const rect = section.getBoundingClientRect();
    // TODO: set top here
  }, []);

  // on update
  useEffect(() => {
    if (atAbout) {
      const dotGridLength = countLongestArray([dotGridA]);

      startSequence(
        {
          length: (dotGridLength as number) || 0,
          interval,
          delay,
          index: dotGridIndex,
        },
        updateSequence,
      );
    } else {
      updateSequence(0);
    }
  }, [atAbout]);

  return (
    <AboutMeSection id="about-section">
      <StyledHeading text={gcms.section.heading} />
      <StyledDotGrid sequence={dotGridA} index={dotGridIndex} />
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
        <ContentBox dangerouslySetInnerHTML={{ __html: gcms.section.body.html }} />
      </Plx>
    </AboutMeSection>
  );
};

export default AboutMe;
