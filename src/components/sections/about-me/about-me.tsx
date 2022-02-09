import Plx from 'react-plx';
import { hasWindow } from '@util/util';
import { StyledHeading, ContentBox, AboutMeSection } from './styles';
import { useGetAboutMeSectionQuery } from '@types';

type Props = {
  atAbout: boolean;
  setAboutTop: () => void;
  isMobile: boolean;
};

const AboutMe = ({ atAbout = false, isMobile }: Props) => {
  const { data } = useGetAboutMeSectionQuery();
  return (
    <AboutMeSection id="about-section">
      <StyledHeading text={data.aboutMeSection.heading} />
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
        <ContentBox dangerouslySetInnerHTML={{ __html: data.aboutMeSection.body.html }} />
      </Plx>
    </AboutMeSection>
  );
};

export default AboutMe;
