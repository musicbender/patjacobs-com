import { css } from 'styled-components';
import { GridPositionParams } from '@types';
import theme from '@styles/theme';

export const px2rem = (px: number): string => `${px / 16}rem`;

export const superCenter = (left = '50%', top = '50%', x = '-50%', y = '-50%') => {
  return css`
    position: absolute;
    top: ${top};
    left: ${left};
    transform: translate(${x}, ${y});
  `;
};

export const gridSizes: { [key: string]: number } = theme.gridSizes;

export const gridValue = (size = 's', unit = '%'): string => {
  return gridSizes[size] + unit;
};

export const gridPosition = (config: GridPositionParams) => {
  const { gridLines = [], index = 0, prop = 'left', attach = 'left' } = config;
  const validUnits: string[] = ['%', 'vw'];
  let unit: string = config.unit || '%';
  let percent = 0;

  if (!gridLines[index]) {
    return css`
      ${prop} 0%;
    `;
  }

  if (!validUnits.includes(unit)) {
    unit = validUnits[0];
  }

  percent = gridLines.reduce((total, cur, i) => {
    return i <= index ? total + cur : total;
  });

  return css`
    ${`${prop}: ${`${percent}${unit}`}`};
    ${attach === 'right' && 'transform: translateX(-100%)'};
  `;
};

export const getGridWidth = (gridColumns: number[], gridLines: number[] = []) => {
  return gridColumns.reduce((output, columnIndex) => output + gridLines[columnIndex], 0);
};
