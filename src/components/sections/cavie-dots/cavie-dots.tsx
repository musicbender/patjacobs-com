import React from 'react';
import Plx from 'react-plx';
import { hasWindow } from '../../../util/util';
import { CavieDotsWrapper, InnerWrapper, Dots } from './styles';
import { useStaticQuery, graphql } from 'gatsby';
import theme from '../../../styles/theme';

type Props = {
  baseStart?: number,
  atBottom?: boolean,
  bottom?: number,
}

const CavieDots = ({
  atBottom, 
  bottom, 
  baseStart = 0,
}: Props) => {
  const { configs } = useStaticQuery(graphql`
    query {
      configs {
        settings {
          homeBottom
        }
      }
    }
  `);

  const dotAmount: number = 25;
  const accumulator: number = 100;
  const bottomLoc: number = bottom || configs.settings.homeBottom;

  const getPlxData = (i: number) => {
    const start = i === 0 ? 0 : baseStart + (i * accumulator);
    return [
      {
        start,
        end: i === 0 ? 200 : start + accumulator * 2,
        properties: [
          {
            startValue: i === 0 ? 0 : 56,
            endValue: 0,
            unit: 'vh',
            property: 'translateY'
          }
        ]
      },
      {
        start: bottomLoc - 1400,
        end: bottomLoc - 300,
        properties: [
          {
            startValue: theme.corePalette.purple,
            endValue: theme.corePalette.orange,
            property: 'fill'
          },
          {
            startValue: 1,
            endValue: 1,
            property: 'opacity'
          }
        ]
      }
    ];
  }

  const renderDot = ({ index, dotSize, x, y, xOffset, yOffset }: CavieDotConfig) => {
    return (
      <Plx
        className="dot"
        parallaxData={getPlxData(index)}
        tagName="svg"
        disabled={!hasWindow()}
        animateWhenNotInViewport={true}
        key={`cavie-dot-${index}-${index + x + y}`}
        width={dotSize}
        height={dotSize}
        style={{
          left: `calc(${x}% - ${xOffset}px)`,
          top: `calc(${y}% - ${yOffset}px)`
        }}
      >
        <rect width={dotSize} height={dotSize} />
      </Plx>
    );
  }

  const renderDots = () => {
    let dots: Plx[] = [];
    const dotSize: number = 12;
    const grid: number = Math.round(Math.sqrt(dotAmount));
    const size: number = 100;
    const spacing: number = size / (grid - 1);

    for (let i = 0; i < dotAmount; i++) {
      const row: number = Math.floor(i / grid);
      let dotConfig: CavieDotConfig = {
        index: i,
        dotSize,
        y: row * spacing,
        x: (i * spacing) - ((row * size) + (row * spacing))
      }

      dotConfig.xOffset = (dotConfig.x / spacing) * 3;
      dotConfig.yOffset = (dotConfig.y / spacing) * 3;

      dots = [
        ...dots,
        renderDot(dotConfig)
      ];
    }

    return <Dots hide={atBottom}>{dots}</Dots>;
  }

  return (
    <CavieDotsWrapper show={!atBottom} hide={atBottom}>
      <InnerWrapper>
        {renderDots()}
      </InnerWrapper>
    </CavieDotsWrapper>
  );
}

export default CavieDots;
