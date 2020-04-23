import styled, { css } from 'styled-components';
import { RevealBlockContentType } from '../../../../types';
import { media } from '../../../styles/breakpoints';

interface RevealBlockWrapperProps {
    gridWidth: number;
    position?: number;
}

interface WrapperProps {
    active?: boolean;
}

interface ContentWrapperProps {
    contentType: RevealBlockContentType;
    gridWidth?: number;
}

export const RevealBlockWrapper = styled('div')<RevealBlockWrapperProps>`
    position: absolute;
    left: ${props => `${props.position || 0}%;`};
    width: ${props => `${props.gridWidth || 0}vw`};
    overflow: hidden;
`;

const Wrapper = styled('div')<WrapperProps>`
    will-change: transform;
    visibility: hidden;
    transition: ${({ theme }) =>
        `transform ${theme.animate.superSlow} ${theme.animate.superEaseOut}, visibility ${theme.animate.superSlow};`};
`;

export const OutterWrapper = styled(Wrapper)`
    overflow: hidden;
    transform: translateX(-100%);
    ${props =>
        props.active &&
        css`
            transform: none;
            visibility: visible;
        `};
`;

export const InnerWrapper = styled(Wrapper)`
    transform: translateX(75%);
    ${props =>
        props.active &&
        css`
            transform: none;
            visibility: visible;
        `};
`;

export const ContentWrapper = styled('div')<ContentWrapperProps>`
    ${props =>
        props.contentType === 'text' &&
        css`
            margin-top: 2em;
            max-width: ${`${props.gridWidth}vw`};
        `};
`;

export const Content = styled('div')<ContentWrapperProps>`
    ${props =>
        props.contentType === 'generic' &&
        `
            > * {
                position: relative;
                width: 100%;
                min-height: 1.5em;
                padding: 1.5em;
            }
        `};
    ${props =>
        props.contentType === 'text' &&
        `
            font-size: 16px;
            margin-bottom: 2em;
            ${media.tablet`
              font-size: calc(.55556vw + 12px);
            `}
            > p {
                margin-top: 1em;
                margin-bottom: 1em;
            }
        `};
    ${props =>
        (props.contentType === 'video' || props.contentType === 'img') &&
        ` 
          padding-bottom: 56.25%;
          height: 0;
          position: relative;
          &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${props.theme.modes.dark.bg};
            opacity: 0.07;
          }
          > video, > img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        `};
`;
