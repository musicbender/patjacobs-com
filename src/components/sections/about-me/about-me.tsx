import Plx from 'react-plx';
import { StyledHeading, ContentBox, AboutMeSection } from './styles';
import { useGetAboutMeSectionQuery } from '@types';
import { useMounted } from 'src/hooks/use-mounted';

type Props = {
  isMobile: boolean;
};

const AboutMe = ({ isMobile }: Props) => {
  const { data } = useGetAboutMeSectionQuery();
  const { isMounted } = useMounted();
  return (
    <AboutMeSection id="about-section">
      <StyledHeading text={data.aboutMeSection.heading} />
      <Plx
        disabled={!isMounted || isMobile}
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
