import styled, { css } from 'styled-components';
import { CoreColors } from '../../../../types';

type DotGridSvgProps = {
  width: string,
  height: string,
}

export const DotGridSvg = styled('svg')<DotGridSvgProps>`
  position: absolute;
  ${props => css`
    width: ${props.width};
    height: ${props.height};
  `}
`;

export type DotProps = {
  color: CoreColors | 'white' | 'dull' | 'disabled' | string,
}

export const Dot = styled('circle')<DotProps>`
  ${props => props.color === 'dull' && 'fill: rgba(80, 80, 80, 0.5);'}
  ${props => props.color === 'white' && `fill: ${props.theme.palette.white};`}
  ${(props): string => {
    switch(props.color) {
      case 'dull':
        return 'fill: rgba(80, 80, 80, 0.5);';
      case 'white': 
        return `fill: ${props.theme.palette.white};`;
      case 'disabled':
        return 'opacity: 0;';
      default:
        return `fill: ${props.theme.corePalette[props.color]};`;
    }
  }}
`;
