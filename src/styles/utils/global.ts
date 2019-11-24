import { css } from 'styled-components'
import { IGridPositionParams, ITheme } from '../../../types/styles';
import theme from '../theme';

export const px2rem = (px: number) => `${px / 16}rem`;

export const superCenter = (left: string = '50%', top: string = '50%', x: string = '-50%', y: string = '-50%') => {
  return css`
    position: absolute;
    top: ${top};
    left: ${left};
    transform: translate(${x}, ${y});
  `;
}

export const gridSizes: {[key: string]: number} = theme.gridSizes;

export const gridValue = (size: string = 's', unit: string = '%'): string => {
  return gridSizes[size] + unit;
}

export const gridPosition = (config: IGridPositionParams) => {
  const { gridLines = [], index = 0, prop = 'left', attach = 'left'} = config;
  const validUnits: string[] = ['%', 'vw'];
  let unit: string = config.unit || '%';
  let percent: number = 0;

  if (!gridLines[index]) {
    return css`${prop}: 0%;`
  }

  if (!validUnits.includes(unit)) {
    unit = validUnits[0];
  }

  for (let i = 0; i <= index; i++) {
    percent += gridLines[i];
  }

  percent = gridLines.reduce((total, cur, i) => {
    return i <= index ? total + cur : total;
  });


  return css`
   ${prop}: ${percent}${unit}
   ${attach === 'right' && 'transform: translateX(-100%)'}
  `;
}
