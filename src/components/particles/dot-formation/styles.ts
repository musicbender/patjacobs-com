import styled, { css } from 'styled-components';
import { media } from '../../../styles/breakpoints';
import { DotFormationTextEmbedDirection } from '../../../../types/sections';

type DotProps = {
  hide?: boolean,
  hasText?: boolean,
  active?: boolean,
}

type TextEmbedProps = {
  direction: DotFormationTextEmbedDirection,
  text: string,
}

type RevealBarProps = {
  active?: boolean,
}

type InnerTextWrapperProps = {
  active?: boolean,
}

export const DotFormationWrapper = styled.div`
  position: relative;
`;

export const Dots = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

export const Dot = styled('svg')<DotProps>`
  position: absolute;
  opacity: 1;
  visibility: visible;
  transition: fill 150ms linear;
  ${props => props.hasText && props.active && css`
    opacity: 0;
    transition: opacity 0ms linear 1s;
  `}
  ${props => props.hide && css`
    visibility: hidden;
  `}
`;

export const TextEmbedsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const TextEmbedWrapper = styled('div')<TextEmbedProps>`
  position: absolute;
  height: 1.5em;
  overflow: hidden;
  ${props => props.direction === 'right' && css`
    transform-origin: center left;
    transform: rotate(0deg);
  `}
  ${props => props.direction === 'up' && css`
    transform-origin: calc(-1.5% + 6px) calc(37% + 1px);
    transform: rotate(-90deg);
  `}
  ${props => props.direction === 'down' && css`
    transform-origin: 0.175em 0.9em;
    transform: rotate(90deg);
  `}
  ${props => props.text === 'aws' && css`
    transform-origin: 4.5% 51%;
  `}
`;

export const TextEmbedTextWrapper = styled.div`
  display: grid;
  position: absolute;
  grid-template-columns: repeat( auto-fit, minmax(5px, 1fr) );
  grid-template-rows: 1fr;
  width: 100%;
  white-space: nowrap;
`;

export const InnerTextWrapper = styled('span')<InnerTextWrapperProps>`
  display: inline-block;
  color: ${({ theme }) => theme.palette.white};
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.futura};
  font-weight: 500;
  line-height: 20px;
  opacity: 0;
  transform: translateX(-1em);
  transition: ${({ theme }) => `
    opacity ${theme.animate.moderate} ${theme.animate.easeInOut}, 
    transform ${theme.animate.moderate} ${theme.animate.easeInOut}
  `};
  ${props => props.active && css`
    opacity: 1;
    transform: translateX(0);
    transition: ${({ theme }) => `
      opacity ${theme.animate.moderate} ${theme.animate.easeInOut}, 
      transform ${theme.animate.moderate} ${theme.animate.easeInOut}
    `};
  `}
`;

export const RevealBar = styled('div')<RevealBarProps>`
  position: absolute;
  top: 24%;
  left: 0;
  width: 100%;
  height: 0.7em;
  background-color: ${({ theme }) => theme.corePalette.orange};;
  transform: translateX(-110%);
  transform-origin: left;
  transition: transform 0ms;
  ${props => props.active && css`
    transform: translateX(110%);
    transition: ${({ theme }) => `
      transform ${theme.animate.skillsRevealDuration} ${theme.animate.easeInOut}
    `};
  `};
`;
