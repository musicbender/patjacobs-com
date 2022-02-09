import styled, { css } from 'styled-components';
import { media } from '@styles/breakpoints';
import { ParticleColors, TriangleSizes } from '@types';

type TriangleWrapperProps = {
  size: keyof typeof TriangleSizes;
  color: keyof typeof ParticleColors;
  opacity: number;
};

export const TriangleWrapper = styled('svg')<TriangleWrapperProps>`
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 1.41421;
  pointer-events: auto;
  opacity: ${props => props.opacity || 1};
  ${props => props.size === 'micro' && 'width: 0.25em;'}
  ${props => props.size === 'tiny' && 'width: 1em;'}
  ${props =>
    props.size === 'small' &&
    css`
      width: 2em;
      ${media.tablet`
      width: 2.75em;
    `}
    `}
  ${props =>
    props.size === 'medium' &&
    css`
      width: 5.5em;
      ${media.tablet`
      width: 7em;
    `}
    `}
  ${props => props.size === 'giant' && 'width: 70%;'}
  ${props => props.color === 'white' && `fill: ${props.theme.palette.white};`}
  ${props => props.color === 'purple' && `fill: ${props.theme.corePalette.purple};`}
  ${props => props.color === 'yellow' && `fill: ${props.theme.corePalette.yellow};`}
  ${props => props.color === 'orange' && `fill: ${props.theme.corePalette.orange};`}
  ${props => props.color === 'aqua' && `fill: ${props.theme.corePalette.aqua};`}
`;
