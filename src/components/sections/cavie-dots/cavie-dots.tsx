import { FC } from 'react';
import Plx from 'react-plx';
import settings from '@configs/settings.json';
import { CavieDotConfig } from '@types';
import theme from '@styles/theme';
import { CavieDotsWrapper, InnerWrapper, Dots } from './styles';
import { useMounted } from 'src/hooks/use-mounted';

type Props = {
  baseStart?: number;
  atBottom?: boolean;
  bottom?: number;
};

const CavieDots: FC<Props> = ({ atBottom, bottom, baseStart = 0 }) => {
  const { isMounted } = useMounted();
  const dotAmount = 25;
  const accumulator = 100;
  const bottomLoc: number = bottom || settings.homeBottom;

  const getPlxData = (i: number) => {
    const start: number = i === 0 ? 0 : baseStart + i * accumulator;
    return [
      {
        start,
        end: i === 0 ? 200 : start + accumulator * 2,
        properties: [
          {
            startValue: i === 0 ? 0 : 56,
            endValue: 0,
            unit: 'vh',
            property: 'translateY',
          },
        ],
      },
      {
        start: bottomLoc - 1400,
        end: bottomLoc - 300,
        properties: [
          {
            startValue: theme.corePalette.purple,
            endValue: theme.corePalette.orange,
            property: 'fill',
          },
          {
            startValue: 1,
            endValue: 1,
            property: 'opacity',
          },
        ],
      },
    ];
  };

  const renderDot = ({ index, dotSize, x, y, xOffset, yOffset }: CavieDotConfig) => {
    return (
      <Plx
        className="dot"
        parallaxData={getPlxData(index)}
        tagName="svg"
        disabled={!isMounted}
        animateWhenNotInViewport={true}
        key={`cavie-dot-${index}-${index + x + y}`}
        width={dotSize}
        height={dotSize}
        style={{
          left: `calc(${x}% - ${xOffset}px)`,
          top: `calc(${y}% - ${yOffset}px)`,
        }}
      >
        <rect width={dotSize} height={dotSize} />
      </Plx>
    );
  };

  const renderDots = () => {
    let dots: Plx[] = [];
    const dotSize = 12;
    const grid: number = Math.round(Math.sqrt(dotAmount));
    const size = 100;
    const spacing: number = size / (grid - 1);

    for (let i = 0; i < dotAmount; i++) {
      const row: number = Math.floor(i / grid);
      const dotConfig: CavieDotConfig = {
        index: i,
        dotSize,
        y: row * spacing,
        x: i * spacing - (row * size + row * spacing),
      };

      dotConfig.xOffset = (dotConfig.x / spacing) * 3;
      dotConfig.yOffset = (dotConfig.y / spacing) * 3;

      dots = [...dots, renderDot(dotConfig)];
    }

    return <Dots hide={atBottom}>{dots}</Dots>;
  };

  return (
    <CavieDotsWrapper show={!atBottom} hide={atBottom}>
      <InnerWrapper>{renderDots()}</InnerWrapper>
    </CavieDotsWrapper>
  );
};

export default CavieDots;
