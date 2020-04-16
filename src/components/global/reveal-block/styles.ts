import styled, { css } from 'styled-components';
import { RevealBlockContentType } from '../../../../types';
import { media } from '../../../styles/breakpoints';

interface RevealBlockWrapperProps {
    blockWidth?: number;
}

interface WrapperProps {
    active?: boolean;
}

interface ContentWrapperProps {
    contentType: RevealBlockContentType;
}

export const RevealBlockWrapper = styled('div')<RevealBlockWrapperProps>`
    width: ${props => `${props.blockWidth}vw;`};
    overflow: hidden;
`;

const Wrapper = styled('div')<WrapperProps>`
    will-change: transform;
    visibility: hidden;
    transition: ${({ theme }) =>
        `transform ${theme.animate.superSlow} ${theme.animate.superEaseOut}, visibility ${theme.animate.superSlow}`};
    ${props =>
        props.active &&
        css`
            transform: none;
            visibility: visible;
        `};
`;

export const OutterWrapper = styled(Wrapper)`
    transform: translateX(-100%);
`;

export const InnerWrapper = styled(Wrapper)`
    transform: translateX(75%);
`;

export const ContentWrapper = styled('div')<ContentWrapperProps>`
    ${props =>
        props.contentType === 'text' &&
        css`
            margin-top: 2em;
        `};
`;

export const Content = styled('div')<ContentWrapperProps>`
    ${props =>
        props.contentType === 'text' &&
        `
            font-size: 16px;
            margin-bottom: 2em;
            max-width: 30em;
            ${media.tablet`
              font-size: calc(.55556vw + 12px);
            `}
        `};
    ${props =>
        props.contentType === 'video' &&
        `
          padding-bottom: 56.25%;
          height: 0;
          position: relative;
        `};
`;
