import React, { FC, useEffect, useState } from 'react';
import Plx from 'react-plx';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import ScrollLine from '@components/global/scroll-line';
import ProjectMeta from '@components/sections/project-meta';
import ProjectBody from '@components/sections/project-body';
import RevealBlock from '@components/global/reveal-block';
import BarList from '@components/global/bar-list';
import settings from '@configs/settings.json';
import { useThrottleCallback } from '@hooks';
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
import { processGcmsData } from '@pages/case-study/[projectId]';
import { useMounted } from 'src/hooks/use-mounted';

type Props = {
  projectId: string;
};

const CaseStudy: FC<Props> = ({ projectId }) => {
  const [atTop, setAtTop] = useState(true);
  const [revealedElements, setRevealedElements] = useState<RevealedElementsState>({});
  const { splashActive, scrollCurtainActive } = useSelector((state: Store) => state.global);
  const { isMounted, inClient } = useMounted();
  const { data: gcmsData } = useQuery<ProcessedGcmsData, Error>(
    ['processed-case-study', projectId],
    () => processGcmsData(projectId),
  );

  const active: boolean = atTop && !splashActive && !scrollCurtainActive;

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

  const handleScroll = useThrottleCallback((): void => {
    if (window.scrollY === 0 && !atTop) {
      setAtTop(true);
    }

    if (atTop && window.scrollY > 0) {
      setAtTop(false);
    }
  }, 5);

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
      onPlxEnd: inClient ? addRevealed(elm) : null,
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
          disabled={!isMounted}
          parallaxData={plxData}
          onPlxEnd={inClient ? addRevealed(key) : null}
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
          <Title atTop={atTop}>
            {gcmsData.project.title || gcmsData.project.projectId || 'Case Study'}
          </Title>
          <MetaOutterWrapper atTop={atTop}>
            <ProjectMeta project={gcmsData.project} />
          </MetaOutterWrapper>
        </InfoWrapper>
      )}
      {gcmsData.project && (
        <Main>
          <Top>
            <ScrollLine atTop={atTop} active={active} />
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
                path={`/case-study/${gcmsData.nextProject.projectId}`}
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
