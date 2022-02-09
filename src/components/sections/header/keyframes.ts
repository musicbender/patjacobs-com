import { keyframes } from 'styled-components';
import theme from '@styles/theme';

export const titleEnter = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -1em, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const subtitleEnter = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 2em, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const triangleEnter = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-100%, 2em, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }
`;

export const moveLilSquare = keyframes`
  0% {
    transform: translate3d(-30vw, -24em, 0) rotate(0deg);
    border-color: ${theme.corePalette.yellow};
  }
  4% {
    transform: translate3d(-30vw, -25em, 0) rotate(0deg);
  }
  8%{
    transform: translate3d(-30vw, -26em, 0) rotate(0deg);
  }
  12% {
    transform: translate3d(-30vw, -27em, 0) rotate(0deg);
    border-color: ${theme.palette.grey};
  }
  16% {
    transform: translate3d(-22vw, -35em, 0) rotate(45deg);
  }
  20% {
    transform: translate3d(-22vw, -34em, 0) rotate(0deg);
    border-color: ${theme.corePalette.orange};
  }
  24% {
    transform: translate3d(-30vw, -24em, 0) rotate(0deg);
  }
  28% {
    transform: translate3d(-30vw, -24em, 0) rotate(0deg);
    border-color: ${theme.palette.white};
  }
  32% {
    transform: translate3d(-30vw, -24em, 0) rotate(0deg);
    border-color: ${theme.corePalette.yellow};
  }
  36% {
    transform: translate3d(-30vw, -24em, 0) rotate(0deg);
    height: 25em;
  }
  40% {
    transform: translate3d(-30vw, -1em, 0) rotate(0deg);
    height: 1.25em;
  }
  44% {
    transform: translate3d(-33vw, 0, 0) rotate(0deg);
  }
  48% {
    transform: translate3d(-33vw, 0, 0) rotate(0deg);
    border-color: ${theme.corePalette.orange};
  }
  52% {
    transform: translate3d(-33vw, 0, 0) rotate(0deg);
    border-color: ${theme.palette.white};
  }
  56% {
    transform: translate3d(-33vw, 0, 0) rotate(0deg);
    border-color: ${theme.palette.grey};
  }
  60% {
    transform: translate3d(-33vw, 0, 0) rotate(0deg);
    width: 34em;
  }
  64% {
    transform: translate3d(0, 0, 0) rotate(0deg);
    width: 1.25em;
  }
  68% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  72% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  76% {
    transform: translate3d(0, 0, 0) rotate(0deg);
    border-color: ${theme.corePalette.orange};
  }
  80%, 84%, 88% {
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  92% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  96% {
    transform: translate3d(0, 0, 0) rotate(0deg);
    border-color: ${theme.palette.grey};
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
`;
