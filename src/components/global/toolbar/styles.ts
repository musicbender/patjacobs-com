import styled from 'styled-components';
import { media } from '@styles/breakpoints';
import { superCenter } from '@styles/utils/global';

const iconOpacity = 0.675;

export const ToolBarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.sizes.toolbarHeight};
  background-color: transparent;
  z-index: 9;

  ${media.tablet`
    position: fixed;
  `}
`;

export const InnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const LogoWrapper = styled.a`
  ${superCenter('92%')}
  display: inline-block;
  width: 1.85em;

  ${media.tablet`
    left: 96%;
  `}

  svg {
    fill: ${({ theme }) => theme.palette.white};
    opacity: ${iconOpacity};
    width: 100%;
  }
`;
