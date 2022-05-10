import React, { FC } from 'react';
import settings from '@configs/settings.json';
import { GridLinesWrapper, GridItem, GridLine } from './styles';

const GridLines: FC = () => (
  <GridLinesWrapper>
    {settings.gridLines.map((column, i) => (
      <GridItem width={column} key={i + column + 'gridline'}>
        <GridLine />
      </GridItem>
    ))}
  </GridLinesWrapper>
);

export default GridLines;
