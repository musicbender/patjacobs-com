import React from 'react';
import { GridLinesWrapper, GridItem, GridLine } from './styles';

interface IProps {
  gridLines: number[];
}

const GridLines = ({ gridLines }: IProps) => (
  <GridLinesWrapper>
    {gridLines.map((column, i) => (
      <GridItem width={column} key={i + column + 'gridline'}>
        <GridLine />
      </GridItem>
    ))}
  </GridLinesWrapper>
);

GridLines.defaultProps = {
  gridLines: [],
};

export default GridLines;
