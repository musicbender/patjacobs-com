import React, { FC } from 'react';
import { GridLinesWrapper, GridItem, GridLine } from './styles';

type Props = {
  gridLines: number[];
};

const GridLines: FC<Props> = ({ gridLines = [] }) => (
  <GridLinesWrapper>
    {gridLines.map((column, i) => (
      <GridItem width={column} key={i + column + 'gridline'}>
        <GridLine />
      </GridItem>
    ))}
  </GridLinesWrapper>
);

export default GridLines;
