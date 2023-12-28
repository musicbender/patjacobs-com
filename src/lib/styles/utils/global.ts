import { css } from 'styled-components';
import { GridPositionParams } from 'src/lib/types';
import theme from 'src/lib/styles/theme';

export const px2rem = (px: number): string => `${px / 16}rem`;

export const superCenter = (left = '50%', top = '50%', x = '-50%', y = '-50%') => {
  return css`
    position: absolute;
    top: ${top};
    left: ${left};
    transform: translate(${x}, ${y});
  `;
};
