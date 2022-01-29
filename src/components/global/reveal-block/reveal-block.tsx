import React from 'react';
import Plx from 'react-plx';
import { reduceSegment, hasWindow } from '../../../util/util';
import { RevealBlockWrapper, OutterWrapper, InnerWrapper, ContentWrapper, Content } from './styles';
import { RevealBlockContentType } from '../../../../types';

interface Props {
  startGrid?: number;
  endGrid?: number;
  active?: boolean;
  delay?: number;
  contentType?: RevealBlockContentType;
  gridLines?: number[];
  plxProps?: any;
  mobileIgnoreGrid?: boolean;
  disableMobile?: boolean;
  className?: string;
  children?: any;
}

const revealBlock = ({
  startGrid = 1,
  endGrid = 4,
  contentType = 'generic',
  active = false,
  delay = 0,
  children,
  gridLines,
  plxProps,
  mobileIgnoreGrid = true,
  disableMobile = true,
  className,
}: Props) => {
  const gLines = gridLines || configs.settings.gridLines;
  const width = reduceSegment(startGrid, endGrid, gLines);
  const position = reduceSegment(0, startGrid, gLines);

  const regularRevealBlock = (
    <RevealBlockWrapper
      gridWidth={width}
      position={position}
      className={className}
      mobileIgnoreGrid={mobileIgnoreGrid}
    >
      <OutterWrapper active={active} delay={delay} disableMobile={disableMobile}>
        <InnerWrapper active={active} delay={delay} disableMobile={disableMobile}>
          <ContentWrapper contentType={contentType}>
            <Content contentType={contentType}>{children}</Content>
          </ContentWrapper>
        </InnerWrapper>
      </OutterWrapper>
    </RevealBlockWrapper>
  );

  const plxRevealBlock = (
    <Plx freeze={active} disabled={!hasWindow()} {...plxProps}>
      {regularRevealBlock}
    </Plx>
  );

  return plxProps && plxProps.parallaxData ? plxRevealBlock : regularRevealBlock;
};

export default revealBlock;
