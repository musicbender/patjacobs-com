import styled, { css } from 'styled-components';
import { media } from '../../../styles/breakpoints';
import { getRandomColor } from '../../../util/colors';
import { CoreColors } from '../../../../types';

interface ContentProps {
    color?: CoreColors;
}

const conf = {
    desktopMargin: '3em',
    mobileMargin: '1.75em',
};

export const ProjectMetaWrapper = styled.div`
    overflow: hidden;
`;

export const ContentWrapper = styled('div')<ContentProps>`
    width: 100%;
    margin: ${`${conf.mobileMargin} auto`};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${props => props.theme.corePalette[props.color]};
    ${media.tablet`
        margin: ${`${conf.desktopMargin} auto`};
    `}
`;

const content = css`
    margin: 0;
    font-weight: 200;
    font-size: 0.9rem;
    letter-spacing: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${media.tablet`
        margin: 0.65em 0;
    `}
`;

export const Label = styled.p`
    ${content}
    color: ${({ theme }) => theme.palette.white};
`;

export const ContentValue = styled('p')<ContentProps>`
    ${content}
    color: inherit;
`;

export const ContentValueLink = styled('a')<ContentProps>`
    ${content}
    color: inherit;
    text-decoration: none;
    &:focus,
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const IconsWrapper = styled.div`
    width: 100%;
    max-width: 12em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    margin: ${`${conf.desktopMargin} 0`};
`;

export const IconWrapper = styled.a`
    justify-self: center;
    &:first-child {
        justify-self: left;
    }
    &:nth-child(3) {
        justify-self: right;
    }
    &:focus,
    &:hover {
        > svg {
            fill: ${getRandomColor()};
        }
    }
`;

export const Icon = styled.svg`
    width: 2em;
    fill: ${({ theme }) => theme.palette.white};
    transition: ${({ theme }) => `fill ${theme.animate.fast}`};
`;
