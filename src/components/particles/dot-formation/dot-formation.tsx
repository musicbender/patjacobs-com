import React from 'react';
import TextEmbeds from './text-embeds';
import Triangle from '../triangle';
import { mapDotsWithText } from '../../../util/dot-grid';
import { Skill, Axis, DotFormationConfig } from '../../../../types';
import { Dots, DotFormationWrapper, Dot } from './styles';

interface Props {
  columns?: number;
  rows?: number;
  dotSize?: number;
  active?: boolean;
  hideArray?: number[];
  color?: string;
  shape?: 'square' | 'triangle';
  textConfig: Skill[];
  className?: string;
}

const DotFormation = ({
  columns = 32,
  rows = 8,
  dotSize = 12,
  active = false,
  color = '#F98D51',
  shape = 'square',
  hideArray,
  textConfig,
  className,
}: Props) => {
  const hideEnabled: boolean = !active && hideArray && hideArray.length > 0;
  const ySpacing: number = 100 / (rows - 1);
  const xSpacing: number = 100 / (columns - 1);
  const dotAmount: number = columns * rows;
  const textAffectedDots: number[] = textConfig ? mapDotsWithText(textConfig, columns) : [];

  const getDotOffset = (index: number, axis: Axis): number => {
    const vector = axis === 'x' ? columns : rows;
    return ((index + 1) / vector) * dotSize;
  };

  const renderDot = (config) => {
    const { i, x, y, hide, xOffset, yOffset } = config;
    return (
      <Dot
        hide={hide}
        hasText={textAffectedDots.indexOf(i) > -1}
        active={active}
        key={`dot-formation-$${i}-${i + x + y}`}
        width={dotSize}
        height={dotSize}
        style={{
          fill: color,
          left: `calc(${x}% - ${xOffset}px)`,
          top: `calc(${y}% - ${yOffset}px)`,
        }}
      >
        {shape === 'square' && <rect width={dotSize} height={dotSize} />}
        {shape === 'triangle' && <Triangle size="micro" color="orange" opacity={1} />}
      </Dot>
    );
  };

  const renderDots = () => {
    let dots = [];

    for (let i = 0; i < dotAmount; i++) {
      const row: number = Math.floor(i / columns);
      const column: number = i - columns * row;

      const dotConfig: DotFormationConfig = {
        i,
        y: row * ySpacing,
        x: column * xSpacing,
        row,
        column,
        hide: hideEnabled && hideArray.indexOf(i) > -1,
      };

      dotConfig.xOffset = getDotOffset(column, 'x');
      dotConfig.yOffset = getDotOffset(row, 'y');

      dots = [...dots, renderDot(dotConfig)];
    }

    return <Dots>{dots}</Dots>;
  };

  return (
    <DotFormationWrapper className={className}>
      {renderDots()}
      {textConfig && (
        <TextEmbeds
          textConfig={textConfig}
          spacing={[xSpacing, ySpacing]}
          getDotOffset={getDotOffset}
          dotSize={dotSize}
          active={active}
          rowMajority={rows > columns}
        />
      )}
    </DotFormationWrapper>
  );
};

export default DotFormation;
