import { FC } from 'react';
import Plx from 'react-plx';
import { reduceSegment } from '@util/util';
import settings from '@configs/settings.json';
import { RevealBlockWrapper, OutterWrapper, InnerWrapper, ContentWrapper, Content } from './styles';
import { RevealBlockContentType } from '@types';
import { useMounted } from 'src/hooks/use-mounted';

type Props = {
  startGrid?: number;
  endGrid?: number;
  active?: boolean;
  delay?: number;
  contentType?: RevealBlockContentType;
  plxProps?: any;
  mobileIgnoreGrid?: boolean;
  disableMobile?: boolean;
  className?: string;
  children?: any;
};

const RevealBlock: FC<Props> = ({
  startGrid = 1,
  endGrid = 4,
  contentType = 'generic',
  active = false,
  delay = 0,
  children,
  plxProps,
  mobileIgnoreGrid = true,
  disableMobile = true,
  className,
}) => {
  const { isMounted, inClient } = useMounted();
  const gLines: number[] = settings.gridLines;
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
    <Plx freeze={active} disabled={!isMounted} {...plxProps}>
      {regularRevealBlock}
    </Plx>
  );

  return plxProps && plxProps.parallaxData ? plxRevealBlock : regularRevealBlock;
};

export default RevealBlock;
