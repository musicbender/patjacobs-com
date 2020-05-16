import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';
import { superCenter, gridValue } from '../../../styles/utils/global';

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
        ${superCenter('auto', '0', '-50%', '0')}
        right: ${gridS};
        display: inline-block;
        width: 1.85em;
        fill: ${props => props.theme.palette.white};
        opacity: ${iconOpacity};
        ${media.tablet`
          right: ${`calc(${gridS} / 2)`};
        `}
    }
`;
