import React, { FC, useEffect, useState } from 'react';
import Plx from 'react-plx';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { hasWindow } from '@util/util';
import ScrollLine from '@components/global/scroll-line';
import ProjectMeta from '@components/sections/project-meta';
import ProjectBody from '@components/sections/project-body';
import RevealBlock from '@components/global/reveal-block';
import BarList from '@components/global/bar-list';
import settings from '@configs/settings.json';
import { useThrottle } from '@hooks';
import {
  CaseStudyPage,
  InfoWrapper,
  Title,
  MetaOutterWrapper,
  Main,
  Top,
  Middle,
  Section,
  StyledHeading,
  Paragraph,
  StyledUpNext,
} from './styles';
import { ProcessedGcmsData, RevealBlockContentType, RevealedElementsState, Store } from '@types';

type Props = {
  projectId: string;
};

const CaseStudy: FC<Props> = ({ projectId }) => {
  const [atTop, setAtTop] = useState(true);
  const [revealedElements, setRevealedElements] = useState<RevealedElementsState>({});
  const throttledAtTop = useThrottle(atTop, 5);
  const { splashOpen, transportOpen } = useSelector((state: Store) => state.global);
  const { data: gcmsData } = useQuery<ProcessedGcmsData, Error>(
    `processed-case-study-${projectId}`,
  );

  const active: boolean = throttledAtTop && !splashOpen && !transportOpen;

  const baseRevealProps = {
    startGrid: 3,
    endGrid: 6,
  };

  const plxData = [
    {
      start: 'self',
      duration: 100,
      properties: [
        {
          startValue: 1,
          endValue: 1,
          property: 'opacity',
        },
      ],
    },
  ];

  const handleScroll = (): void => {
    if (window.scrollY === 0 && !throttledAtTop) {
      setAtTop(true);
    }

    if (throttledAtTop && window.scrollY > 0) {
      setAtTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getRevealProps = (elm: string, contentType: RevealBlockContentType = 'generic') => ({
    ...baseRevealProps,
    active: isRevealed(elm),
    contentType,
    plxProps: {
      parallaxData: plxData,
      onPlxEnd: hasWindow() ? addRevealed(elm) : null,
    },
  });

  const addRevealed = (elm: string): (() => void) => {
    return (): void => {
      if (isRevealed(elm)) return;
      setRevealedElements({ ...revealedElements, [elm]: true });
    };
  };

  const isRevealed = (elm: string): boolean => !!revealedElements[elm];

  const renderOverview = (): JSX.Element => {
    return (
      <Section>
        <RevealBlock {...getRevealProps('heading-overview', 'text')}>
          <StyledHeading text={gcmsData.sections['case-study-overview'].heading} />
        </RevealBlock>
        <RevealBlock {...getRevealProps('overview', 'text')}>
          <Paragraph>{gcmsData.project.overview}</Paragraph>
        </RevealBlock>
      </Section>
    );
  };

  const renderBarList = (key: string, items: string[] = []) => {
    const isActive: boolean = isRevealed(key);
    return (
      <Section>
        <RevealBlock {...getRevealProps(`heading${key}`, 'text')}>
          <StyledHeading text={gcmsData.sections[`case-study-${key}`].heading} />
        </RevealBlock>
        <Plx
          freeze={isActive}
          disabled={!hasWindow()}
          parallaxData={plxData}
          onPlxEnd={hasWindow() ? addRevealed(key) : null}
        >
          <BarList items={items} active={isActive} />
        </Plx>
      </Section>
    );
  };

  const renderBody = (): JSX.Element => {
    return (
      <Section>
        <RevealBlock {...getRevealProps('heading-body', 'text')}>
          <StyledHeading text={gcmsData.sections['case-study-more-details'].heading} />
        </RevealBlock>
        <ProjectBody body={gcmsData.project.body} getRevealProps={getRevealProps} />
      </Section>
    );
  };

  return (
    <CaseStudyPage>
      {gcmsData.project && (
        <InfoWrapper>
          <Title atTop={throttledAtTop}>
            {gcmsData.project.title || gcmsData.project.projectId || 'Case Study'}
          </Title>
          <MetaOutterWrapper atTop={throttledAtTop}>
            <ProjectMeta project={gcmsData.project} />
          </MetaOutterWrapper>
        </InfoWrapper>
      )}
      {gcmsData.project && (
        <Main>
          <Top>
            <ScrollLine atTop={throttledAtTop} active={active} />
          </Top>
          <Middle>
            {gcmsData.project.overview && renderOverview()}
            {gcmsData.project.techList &&
              gcmsData.project.techList.length > 0 &&
              renderBarList('tech-used', gcmsData.project.techList)}
            {gcmsData.project.body && renderBody()}
            {gcmsData.project.team &&
              gcmsData.project.team.length > 0 &&
              renderBarList('team', gcmsData.project.team)}
            {gcmsData.nextProject && (
              <StyledUpNext
                label={gcmsData.nextProject.title}
                path={`/case-studies/${gcmsData.nextProject.projectId}`}
                gridLines={settings.gridLines}
              />
            )}
          </Middle>
        </Main>
      )}
    </CaseStudyPage>
  );
};

export default CaseStudy;
