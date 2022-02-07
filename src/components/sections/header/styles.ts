import styled, { css } from 'styled-components';
import { media } from '../../../styles/breakpoints';
import { gridPosition } from '../../../styles/utils/global';
import { titleEnter, subtitleEnter, triangleEnter, moveLilSquare } from './keyframes';
import DotGrid from '../../particles/dot-grid';
import LilSquare from '../../particles/lil-square';
import { DotGridProps } from '../../../types/particles';

// constants
const trianglePos = { prop: 'left', unit: '%', attach: 'right' };

// types
interface HomeHeaderProps {
  splashOpen: boolean;
}

interface TitleProps {
  show: boolean;
}

interface TriangleParallaxProps {
  id: string;
  color: string;
  size: string;
  gridLines: number[];
  show: boolean;
}

// styled components
export const HomeHeader = styled('div')<HomeHeaderProps>`
  position: relative;
  height: 100vh;
  ${media.tablet`
    height: 61em;
  `}
  ${props =>
    props.splashOpen &&
    css`
      overflow: hidden;
    `}
`;

export const DotGridWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const TitleWrapper = styled.div`
  margin: ${props => `0 0 0 ${props.theme.gridSizes.s}%`};
  padding-top: 5em;
  ${media.tablet`
    padding-top: 8em;
  `}
`;

export const Title = styled('h1')<TitleProps>`
  margin: 0 0 0.45em -0.08em;
  font-family: ${props => props.theme.fonts.futura};
  font-size: 5.5rem;
  font-weight: normal;
  line-height: 1.1;
  opacity: 0;
  transform: translate3d(0, -1em, 0);
  ${props =>
    props.show &&
    css`
      animation: ${({ theme }) =>
        css`
          ${titleEnter} ${theme.animate.headerDuration} ease-out ${theme.animate.headerDelay} forwards
        `};
    `};
  ${media.tablet`
        margin-bottom: 0.15em;
        font-size: 7.5rem;
        line-height: normal;
    `}
`;

export const SubTitle = styled('h2')<TitleProps>`
  margin: 0;
  font-size: 1.25rem;
  font-weight: normal;
  letter-spacing: 0.67em;
  opacity: 0;
  transform: translate3d(0, 2em, 0);
  ${props =>
    props.show &&
    css`
      animation: ${({ theme }) =>
        css`
          ${subtitleEnter} ${theme.animate.headerDuration} ease-out ${theme.animate.headerDelay} forwards
        `};
    `};
  ${media.tablet`
    font-size: 1.5rem;
  `}
`;

export const TriangleParallax = styled('div')<TriangleParallaxProps>`
  position: absolute;
  ${({ size, theme }) =>
    (size === 'small' || size === 'medium') &&
    css`
      animation: ${triangleEnter} ${theme.animate.headerDuration} ease-out forwards;
      opacity: 0;
      transform: translate3d(0, 2em, 0);
    `}
  ${({ id, gridLines }) =>
    id === 'giant-1' &&
    css`
      ${gridPosition({ ...trianglePos, gridLines, index: 4 })};
      top: 2em;
      width: 70%;
      svg {
        width: 100%;
      }
    `}
  ${({ id, gridLines, theme }) =>
    id === 'orange-1' &&
    css`
      ${gridPosition({ ...trianglePos, gridLines, index: 2 })};
      top: -1em;
      animation-delay: calc(${theme.animate.headerDelay} + 1800ms);
      ${media.tablet`
         top: 1em;
      `}
    `}
  ${({ id, gridLines, theme }) =>
    id === 'purple-1' &&
    css`
      ${gridPosition({ ...trianglePos, gridLines, index: 1 })};
      top: 45em;
      animation-delay: calc(${theme.animate.headerDelay} + 1200ms);
    `}
  ${({ id, gridLines, theme }) =>
    id === 'yellow-1' &&
    css`
      ${gridPosition({ ...trianglePos, gridLines, index: 5 })};
      top: 4em;
      animation-delay: calc(${theme.animate.headerDelay} + 1200ms);
      ${media.tablet`
        top: 10em;
      `}
    `}
  ${({ id, gridLines, theme }) =>
    id === 'aqua-1' &&
    css`
      ${gridPosition({ ...trianglePos, gridLines, index: 3 })};
      top: 29em;
      animation-delay: calc(${theme.animate.headerDelay} + 600ms);
    `}
  ${({ id, gridLines, theme }) =>
    id === 'yellow-2' &&
    css`
      ${gridPosition({ ...trianglePos, gridLines, index: 2 })};
      top: 75em;
      animation-delay: calc(${theme.animate.headerDelay} + 2400ms);
    `}
  ${props =>
    !props.show &&
    css`
      animation: none;
    `};
`;

export const StyledLilSquare = styled(LilSquare)`
  position: absolute;
  top: 33em;
  left: 85%;
  border-color: ${({ theme }) => theme.palette.grey};
  animation: ${({ theme }) =>
    css`
      ${moveLilSquare} ${theme.animate.headerDuration} steps(1) ${theme.animate.headerDelay} forwards
    `};
  transform: translate3d(-30vw, -24em, 0) rotate(0deg);
`;

export const StyledDotGrid = styled(DotGrid)<DotGridProps>`
  display: none;
  position: absolute;
  ${media.tablet`
        display: block;
    `}
`;

export const DotGridA = styled(StyledDotGrid)`
  top: 8em;
  left: 51%;
`;

export const DotGridB = styled(StyledDotGrid)`
  top: 32em;
  left: 2%;
  ${media.tablet`
        top: 5em;
    `}
`;

export const DotGridC = styled(StyledDotGrid)`
  top: -4em;
  left: 170%;
  transform: translateX(-100%);
  ${media.tablet`
        left: 100%;
    `}
`;

export const DotGridD = styled(StyledDotGrid)`
  top: 38em;
  left: 100%;
  transform: translateX(-100%);
`;
