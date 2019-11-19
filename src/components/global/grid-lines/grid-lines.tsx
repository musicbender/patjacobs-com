import React from 'react';
import { 
  GridLinesWrapper
  GridItem
  GridLine
} from './styles';

interface IProps {
  gridLines: number[]
}

const GridLines = ({
  gridLines
}: IProps) => (
  <GridLinesWrapper>
    {
      config.gridLines.map((column, i) => (
        <GridItem width={column}>
          <GridLine />
        </GridItem>
      ))
    }
  </GridLinesWrapper>
);

export default GridLines;
