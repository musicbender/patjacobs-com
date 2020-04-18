import styled from 'styled-components';
import { media } from '../src/styles/breakpoints';

export const OutterWrapper = styled.div`
    position: relative;
    z-index: 1;
`;

export const InnerWrapper = styled.div`
    position: relative;
    padding: 2em;
    height: auto;
    ${media.tablet`
        padding-top: ${props => props.theme.sizes.toolbarHeight};
    `}
`;