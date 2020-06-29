import styled, { css, keyframes } from 'styled-components';
import { ECurtainTransition } from '../../../../types/global';

// types
interface InnerBlockProps {
    transition: keyof typeof ECurtainTransition | null;
    enterType?: string;
    exitType?: string;
    delay?: string;
    duration?: string;
}

// keyframes
const splashBlockEnter = keyframes`
  0% {
    transform: translate3d(110%, 0, 0);
  }
  100% {
    transform: translate3d(-5%, 0, 0);
  }
`;

const splashBlockExit = keyframes`
  0% {
    transform: translate3d(-5%, 0, 0);
  }
  100% {
    transform: translate3d(-110%, 0, 0);
  }
`;

// components
export const CurtainWrapper = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 8% 17% 8% 17% 34.3% 8% 8%;
    grid-template-rows: repeat(7, 1fr);
    width: 100%;
    height: 100%;
    min-height: 100vh;
    pointer-events: none;
`;

export const Block = styled.div`
    position: relative;
    overflow: hidden;
`;

export const InnerBlock = styled('div')<InnerBlockProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 110%;
  background-color: ${props => props.theme.palette.matteBlack};
  transform: translate3d(-5%, 0, 0);
  animation-delay: 0ms;
  animation-fill-mode: forwards;
  animation-duration: ${props => props.duration || props.theme.animate.slow};
  ${props => props.transition === 'enter' && 'transform: translate3d(110%, 0, 0);'}
  ${props => props.transition === 'exit' && 'transform: translate3d(0, 0, 0);'}
  ${props =>
      props.transition === 'enter' &&
      css`
          animation-name: ${splashBlockEnter};
          animation-timing-function: ${props.enterType === 'full' ? 'ease-in-out' : 'ease-in'};
      `}
  ${props =>
      props.transition === 'exit' &&
      css`
          animation-name: ${splashBlockExit};
          animation-timing-function: ${props.exitType === 'full' ? 'ease-in-out' : 'ease-in'};
      `}
  ${props => props.delay && `animation-delay: ${props.delay};`}
`;
