import styled, { css } from 'styled-components';
import { media } from '@styles/breakpoints';
import { gridPosition } from '@styles/utils/global';

type RecentWorkParticleProps = {
  gridLines: number[];
  particleID: string;
};

export const RecentWorkWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0;
  padding-bottom: 10em;
  overflow: hidden;
  ${media.tablet`
    height: 193em;
    margin: 0;
    padding-bottom: 30em;
    overflow: visible;
  `}
`;

export const ParentWrapper = styled.div`
  display: block;
  ${media.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `}
`;

export const WorkItemsWrapper = styled.div`
  padding: 0;
  ${media.tablet`
    padding-left: ${({ theme }) => `calc(${theme.gridSizes.s}% * 2)`};
  `}
`;

export const RecentWorkParticle = styled('div')<RecentWorkParticleProps>`
  position: absolute;
  ${({ particleID }) =>
    particleID.includes('dot-grid-') &&
    css`
      display: none;
      ${media.tablet`
      display: block;
    `}
    `}
  ${({ particleID }) =>
    particleID === 'dot-grid-a' &&
    css`
      top: -1%;
      left: 71%;
    `}
  ${({ particleID }) =>
    particleID === 'dot-grid-b' &&
    css`
      top: 78%;
      left: 75.3%;
    `}
  ${({ particleID }) =>
    particleID === 'dot-grid-c' &&
    css`
      top: 50%;
      left: 4%;
    `}
  ${({ particleID, gridLines }) =>
    particleID === 'triangle-a' &&
    css`
      ${gridPosition({ gridLines, attach: 'right' })}
      top: 6%;
    `}
  ${({ particleID, gridLines }) =>
    particleID === 'triangle-b' &&
    css`
      ${gridPosition({ gridLines, index: 4, attach: 'right' })}
      top: 62%;
      ${media.tablet`
      ${gridPosition({ gridLines, index: 1, attach: 'right' })}
      top: 37%;
    `}
    `}
  ${({ particleID, gridLines }) =>
    particleID === 'triangle-c' &&
    css`
      ${gridPosition({ gridLines, index: 3, attach: 'right' })}
      display: none;
      top: 55%;
      ${media.tablet`
      display: block;
    `}
    `}
  ${({ particleID, gridLines }) =>
    particleID === 'triangle-d' &&
    css`
      ${gridPosition({ gridLines, index: 6, attach: 'right' })}
      top: 87%;
      ${media.tablet`
      top: 64%;
    `}
    `}
  ${({ particleID, gridLines }) =>
    particleID === 'triangle-e' &&
    css`
      ${gridPosition({ gridLines, index: 0, attach: 'right' })}
      display: none;
      top: 80%;
      ${media.tablet`
      display: block;
    `}
    `}
  ${({ particleID, gridLines }) =>
    particleID === 'triangle-f' &&
    css`
      ${gridPosition({ gridLines, index: 6, attach: 'right' })}
      top: -12%;
    `}
  ${({ particleID, gridLines }) =>
    particleID === 'triangle-g' &&
    css`
      ${gridPosition({ gridLines, index: 1, attach: 'right' })}
      display: none;
      top: 92%;
      ${media.tablet`
      display: block;
    `}
    `}
  ${({ particleID, gridLines }) =>
    particleID === 'triangle-h' &&
    css`
      ${gridPosition({ gridLines, index: 3, attach: 'right' })}
      display: none;
      top: 99%;
      ${media.tablet`
      display: block;
    `}
    `}
`;
