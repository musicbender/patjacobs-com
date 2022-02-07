import styled, { css } from 'styled-components';
import { media } from '../../../styles/breakpoints';
import { CoreColors } from '../../../types';
import { mobileDot, yellowDot, purpleDot, orangeDot, aquaDot } from './keyframes';

const diameter = '0.7em';

interface DotProps {
  color: CoreColors;
  forMobile?: boolean;
  entering?: boolean;
  finished?: boolean;
}

export const ColorDotsRow = styled.div`
  width: 100%;
  height: ${diameter};
  ${media.tablet`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `}
`;

export const DesktopWrapper = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${media.tablet`
        display: block;
    `}
`;

export const MobileWrapper = styled.div`
  display: block;
  width: 100%;
  margin-top: 2.75em;
  ${media.tablet`
        display: none;
    `}
`;

export const Dot = styled('div')<DotProps>`
  width: ${diameter};
  height: ${diameter};
  border-radius: ${diameter};
  background-color: ${(props) => props.theme.corePalette[props.color]};
  ${(props) =>
    !props.forMobile &&
    css`
      ${props.color === 'yellow' &&
      css`
        transform: translate3d(10vw, 5em, 0);
        /* animation-name: ${yellowDot}; */
      `}
      ${props.color === 'purple' &&
      css`
        transform: translate3d(34vw, 0em, 0);
        /* animation-name: ${purpleDot}; */
      `} 
      ${props.color === 'orange' &&
      css`
        transform: translate3d(86vw, 13em, 0);
        /* animation-name: ${orangeDot}; */
      `} 
      ${props.color === 'aqua' &&
      css`
        transform: translate3d(86vw, 13em, 0);
        /* animation-name: ${aquaDot}; */
      `}
    `}
  ${(props) =>
    props.entering &&
    !props.forMobile &&
    css`
      animation-duration: ${props.theme.animate.headerDuration};
      animation-delay: ${props.theme.animate.headerDelay};
      animation-timing-function: steps(1);
      animation-fill-mode: forwards;
      ${props.color === 'yellow' &&
      css`
        animation-name: ${css`
          ${yellowDot}
        `};
      `}
      ${props.color === 'purple' &&
      css`
        animation-name: ${css`
          ${purpleDot}
        `};
      `} 
          ${props.color === 'orange' &&
      css`
        animation-name: ${css`
          ${orangeDot}
        `};
      `} 
          ${props.color === 'aqua' &&
      css`
        animation-name: ${css`
          ${aquaDot}
        `};
      `}
    `}
  ${(props) =>
    props.finished &&
    !props.forMobile &&
    css`
      animation: none;
      opacity: 1;
      ${props.color === 'yellow' &&
      `
      transform: translate3d(8vw, 24em, 0);
    `}
      ${props.color === 'purple' &&
      `
      transform: translate3d(8vw, 28em, 0) scale(1);
    `}
    ${props.color === 'orange' &&
      `
      transform: translate3d(8vw, 32em, 0) scale(1);
    `}
    ${props.color === 'aqua' &&
      `
      transform: translate3d(8vw, 36em, 0) scale(1);
    `}
    `}
  ${(props) =>
    props.forMobile &&
    css`
      display: inline-block;
      float: left;
      margin-right: calc(${diameter} * 2);
      opacity: 0;
      transform: translate3d(0, 2em, 0);
    `}
  ${(props) =>
    props.forMobile &&
    props.entering &&
    css`
      animation: ${mobileDot} ${props.theme.animate.slow} ${props.theme.animate.easeInOut} forwards;
      &:nth-child(1) {
        animation-delay: 1000ms;
      }
      &:nth-child(2) {
        animation-delay: 1500ms;
      }
      &:nth-child(3) {
        animation-delay: 2000ms;
      }
      &:nth-child(4) {
        animation-delay: 2500ms;
      }
    `}
  ${(props) =>
    props.forMobile &&
    props.finished &&
    css`
      animation: none;
      opacity: 1;
      transform: translate3d(0, 0, 0);
    `}
`;
