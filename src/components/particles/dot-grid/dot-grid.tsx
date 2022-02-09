import React from 'react';
import { startSequence } from '@util/animation';
import { DotGridSvg, Dot, DotProps } from './styles';
import { DotGridProps } from '@types';

const DotGrid = ({
  sequence,
  handleSequence,
  index = 0,
  started = true,
  spacing = 65,
  delay = 0,
  interval = 500,
  className,
}: DotGridProps) => {
  const offset: number = spacing / 2;
  const radius = 3;
  const colorMap: DotProps['color'][] = [
    'disabled',
    'white',
    'dull',
    'orange',
    'purple',
    'aqua',
    'yellow',
  ];

  const getIndexOrLast = (s: any[], i: number): number => {
    return s[i] || s[s.length - 1];
  };

  const renderDot = (colorIndex: number, locy: number, locx: number, id: string) => {
    if (colorIndex > 0) {
      return (
        <Dot
          id={id}
          color={colorMap[colorIndex]}
          key={id + locx + locy}
          r={radius}
          cx={locx}
          cy={locy}
        />
      );
    }
  };

  const renderRow = (row: number[], i: number) => {
    return row.map((dot: number, j: number) =>
      renderDot(dot, i * spacing + offset, j * spacing + offset, i + 'x' + j),
    );
  };

  const renderAllRows = rows => {
    return rows.map(renderRow);
  };

  return (
    <DotGridSvg
      width={`${sequence[0][0].length * spacing}px`}
      height={`${sequence[0].length * spacing}px`}
      className={className}
    >
      {!!handleSequence &&
        sequence &&
        sequence.length > 1 &&
        !started &&
        startSequence(
          {
            length: sequence.length,
            interval,
            delay,
            index,
          },
          handleSequence,
        )}
      {sequence && sequence.length > 0 && renderAllRows(getIndexOrLast(sequence, index))}
    </DotGridSvg>
  );
};

export default DotGrid;
