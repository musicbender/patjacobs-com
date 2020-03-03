import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Plx from 'react-plx';
import { hasWindow, countLongestArray } from '../../../util/util';
import { startSequence } from '../../../util/animation';
import { dotGridA } from './dots';
import { StyledHeading, StyledDotGrid, ContentBox, ContentText, AboutMeSection } from './styles';

type Props = {
  atAbout: boolean,
  setAboutTop: () => void,
  isMobile: boolean,
}

const AboutMe = ({
  atAbout = false,
  setAboutTop,
  isMobile
}: Props) => {
  const { staticData } = useStaticQuery(graphql`
    query {
      staticData {
        aboutMe {
          heading
          body
        }
      }
    }
  `);

  const [ dotGridIndex, updateSequence ] = useState(0);
  const interval: number = 180;
  const delay: number = 0;

  // on mount
  useEffect(() => {
    const section = document.getElementById('about-section');
    const rect = section.getBoundingClientRect();
    // TODO: set top here
  }, []);

  // on update
  useEffect(() => {
    if (atAbout) {
      const dotGridLength = countLongestArray([
        dotGridA
      ]);

      startSequence({
        length: dotGridLength as number || 0,
        interval: interval,
        delay: delay,
        index: dotGridIndex
      }, updateSequence);
    } else {
      updateSequence(0);
    }
  }, [ atAbout ]);

  return (
    <AboutMeSection id="about-section">
      <StyledHeading text={staticData.aboutMe.heading} />
      <StyledDotGrid
        sequence={dotGridA}
        index={dotGridIndex}
      />
      <Plx
        disabled={!hasWindow() || isMobile}
        parallaxData={[{
          start: 'self',
          end: 'self',
          endOffset: '100vh',
          properties: [
            {
              startValue: 20,
              endValue: -16,
              unit: '%',
              property: 'translateY'
            }
          ]
        }]}
      >
        <ContentBox>
          { 
            staticData.aboutMe.body.map((t, i) => (
              <ContentText key={'about-p-' + i}>{t}</ContentText>
            )) 
          }
        </ContentBox>
      </Plx>
    </AboutMeSection>
  );
}

export default AboutMe;
