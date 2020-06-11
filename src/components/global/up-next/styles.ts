import styled, { css } from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';
import { media } from '../../../styles/breakpoints';

interface LineProps {
    active?: boolean;
}

export const UpNextWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-top: 7em;
    ${media.tablet`
        width: 67vw;
        padding-top: 11em;
    `}
`;

export const NextText = styled.h6`
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    transform: rotate(90deg) translateY(0.2em);
    transform-origin: bottom left;
    font-size: 1rem;
    letter-spacing: 0.5em;
    ${media.tablet`
        font-size: 1.65rem;
    `}
`;

export const LinkWrapper = styled.div`
    position: relative;
    max-width: 59vw;
    padding-bottom: 0.85em;
    overflow: hidden;
`;

export const StyledLink = styled(TransitionLink)`
    font-size: 1.75rem;
    color: ${({ theme }) => theme.palette.white};
    text-decoration: none;
    transition: ${({ theme }) => `color ${theme.animate.moderate} ${theme.animate.easeInOut}`};
    &:hover {
        color: ${({ theme }) => theme.corePalette.aqua};
    }
    ${media.tablet`
        font-size: 2rem;
    `}
    ${media.desktopM`
        font-size: 3rem;
    `}
    ${media.desktopM`
        font-size: 4rem;
    `}
    ${media.desktopXL`
        font-size: 5rem;
    `}
`;

export const Line = styled('div')<LineProps>`
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.37em;
    width: 100%;
    background-color: ${({ theme }) => theme.corePalette.aqua};
    transform: translateX(0%);
    transition: ${({ theme }) => `transform ${theme.animate.moderate} ${theme.animate.easeInOut}`};
    ${media.tablet`
        bottom: 1em;
        transform: translateX(-75%);
    `}
    ${props =>
        props.active &&
        css`
            ${media.tablet`
                transform: translateX(0%);
            `}
        `};
`;
