import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';
import { superCenter, gridValue } from '../../../styles/utils/global';

const iconSize = '5em';
const iconOpacity = 0.675;
const gridS: string = gridValue('s');

export const ToolBarWrapper = styled.div`
    position: relative;
    width: 100%;
    height: ${props => props.theme.sizes.toolbarHeight};
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
    svg {
        ${superCenter(gridS, '0', '-50%', '0')}
        display: inline-block;
        width: 1.85em;
        fill: ${props => props.theme.palette.white};
        opacity: ${iconOpacity};
        ${media.tablet`
      left: ${`calc(${gridS} / 2)`};
    `}
    }
`;

export const Hamburger = styled.div`
  ${superCenter('auto')}
  right: calc(${gridS} / 2);
  height: ${iconSize};
  width: ${iconSize};
  min-width: ${gridS};
  min-height: ${gridS};
  opacity: ${iconOpacity};
`;

export const HamburbarBar = styled('div')<{ barNum: number }>`
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.05em;
    background-color: ${props => `rgba(${props.theme.palette.white}, 0.87)`};
    top: ${props => props.barNum * 1}em;
`;
