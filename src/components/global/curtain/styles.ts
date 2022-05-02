import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { superCenter } from '@styles/utils/global';
import Logo from '@components/global/logo';

// keyframes
const showSplashLogo = keyframes`
  0% {
    opacity: 0;
    stroke-dashoffset: 36;
  }
  1% {
    opacity: 1;
    stroke-dashoffset: 36;
  }
  100% {
    opacity: 1;
    stroke-dashoffset: 0;
  }
`;

const hideLogo = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-110%, 0, 0);
  }
`;

// types
type InnerBlockProps = {
  duration?: string;
};

type CurtainOverlayProps = {
  finished?: boolean;
};

// components
export const CurtainOverlay = styled('div')<CurtainOverlayProps>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 80;
  pointer-events: none;
`;

export const CurtainWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  pointer-events: none;
  z-index: 80;
  display: grid;
  grid-template-columns: 8% 17% 8% 17% 33.75% 8% 8%;
  grid-template-rows: repeat(7, 1fr);
  pointer-events: none;
`;

export const Block = styled.div`
  position: relative;
  overflow: hidden;
`;

export const InnerBlock = styled(motion.div)<InnerBlockProps>`
  background-color: ${({ theme }) => theme.palette.matteBlack};
`;

export const LogoOutterWrapper = styled.div`
  ${superCenter()}
  width: auto;
  height: auto;
  overflow: hidden;
  z-index: 81;
`;

export const StyledLogo = styled(Logo)<{ debug: boolean }>`
  margin: 0 auto;
  width: 6em;
  transform: translate3d(0, 0, 0);
  ${({ theme }) =>
    css`
      animation: ${hideLogo} ${theme.animate.moderate} ${theme.animate.logoIn} forwards;
    `}
  animation-delay: 3425ms;
  ${(props) => props.debug && 'animation-delay: 3000000ms;'}
  path {
    stroke-dasharray: 36;
    stroke-dashoffset: 36;
    opacity: 0;
    ${({ theme }) =>
      css`
        animation: ${showSplashLogo} 1000ms ${theme.animate.logoIn} forwards;
      `}
    animation-delay: 1000ms;
  }
`;
