import styled, { css, keyframes } from 'styled-components';
import RevealBlock from '@components/global/reveal-block';
import { superCenter } from '@styles/utils/global';

// types
type ScrollLineProps = {
  active?: boolean;
};

type HelperTextProps = {
  active?: boolean;
};

// keyframes
const scrollLineLoop = keyframes`
    0%, 80% { transform: translate(-50%, 0); }
    90% { transform: translate(-50%, 2em); }
    100% { transform: translate(-50%, 0); }
`;

const showText = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const hideText = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

// components
export const ScrollLineWrapper = styled.div`
  ${superCenter('50%', 'auto', '-50%', '0')}
  bottom: 6em;
  height: 14em;
  width: 5em;
  text-align: center;
`;

export const HelperText = styled('p')<HelperTextProps>`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  ${props =>
    props.active &&
    css`
      opacity: 0;
      animation: ${css`
        ${showText} ${props.theme.animate.slow} ease-out ${props.theme.animate.slow} forwards
      `};
    `};
  ${props =>
    !props.active &&
    css`
      opacity: 1;
      animation: ${css`
        ${hideText} ${props.theme.animate.slow} ease-out ${props.theme.animate.slow} forwards
      `};
    `};
`;

export const InnerWrapper = styled('div')<ScrollLineProps>`
  ${superCenter('50%', '2.5em', '-50%', '0')}
  height: 100%;
  width: 100%;
  overflow: hidden;
  animation: none;
  ${props =>
    props.active &&
    css`
      animation: ${css`
        ${scrollLineLoop} 3000ms infinite
      `};
    `};
`;

export const ScrollLineRevealBlock = styled(RevealBlock)`
  transform: rotate(90deg);
  transform-origin: 2.35% 1.8em;
`;

export const Line = styled.div`
  height: 3px;
  background-color: ${({ theme }) => theme.palette.white};
`;
