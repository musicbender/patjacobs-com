import styled, { keyframes, css } from 'styled-components';
import { superCenter } from '../../../styles/utils/global';
import Logo from '../../global/logo'

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
`

// components
export const SplashScreenWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: transparent;
  z-index: 10;
`;

export const LogoOutterWrapper = styled.div`
  ${superCenter()}
  width: auto;
  height: auto;
  overflow: hidden;
`;

export const StyledLogo = styled(Logo)<{ debug: boolean }>`
  margin: 0 auto;
  width: 6em;
  transform: translate3d(0, 0, 0);
  ${({ theme }) => css`animation: ${hideLogo} ${theme.animate.moderate} ${theme.animate.logoIn} forwards;`}
  animation-delay: 3425ms;
  ${props => props.debug && `animation-delay: 3000000ms;`}
  path {
    stroke-dasharray: 36;
    stroke-dashoffset: 36;
    opacity: 0;
    ${({ theme }) => css`animation: ${showSplashLogo} 1000ms ${theme.animate.logoIn} forwards;`}
    animation-delay: 1000ms;
  }
`;
