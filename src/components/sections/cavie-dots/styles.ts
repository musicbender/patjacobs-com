import styled, { css } from 'styled-components';
import { media } from '@styles/breakpoints';

type CavieDotsWrapperProps = {
  show: boolean;
  hide: boolean;
};

type DotsProps = {
  hide: boolean;
};

export const CavieDotsWrapper = styled('div')<CavieDotsWrapperProps>`
  display: none;
  position: fixed;
  top: 0;
  left: 50%;
  width: 50vw;
  height: 100vh;

  ${media.tablet`display: block;`}
  ${props => props.show && media.tablet`display: block;`}
  ${props => props.hide && media.tablet`display: none;`}
`;

export const InnerWrapper = styled.div`
  position: relative;
`;

export const Dots = styled('div')<DotsProps>`
  position: absolute;
  left: 83.95%;
  top: 18.5em;
  width: 49.2%;
  padding-bottom: 48%;
  transform: translateX(-100%);

  ${media.desktopXXL`
    width: 27.5em;
    left: 47.375em;
    padding-bottom: 27.3em;
  `}

  ${props =>
    props.hide &&
    css`
      display: none;
    `}
  > .dot {
    position: absolute;
    fill: ${props => props.theme.corePalette.purple};
    transform: translateY(100vh);
    transition: ${({ theme }) => `transform ${theme.animate.fast} ease-out`};
  }
`;

export const DotRect = styled.rect`
  fill: inherit;
`;
