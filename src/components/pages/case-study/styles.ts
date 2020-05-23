import styled, { css, keyframes } from 'styled-components';
// import { media } from '../../../styles/breakpoints';
import RevealBlock from '../../global/reveal-block';
import { superCenter } from '../../../styles/utils/global';
import Heading from '../../global/heading';

// types
interface TitleProps {
    isBig?: boolean;
}

interface ScrollLineWrapperProps {
    atTop?: boolean;
}

// keyframes
const scrollLineLoop = keyframes`
    0%, 80% { transform: translate(-50%, 0); }
    90% { transform: translate(-50%, 2em); }
    100% { transform: translate(-50%, 0); }
`;

// styled components
export const CaseStudyPage = styled.div`
    position: relative;
    min-height: 600vh;
`;

export const InfoWrapper = styled.div`
    position: fixed;
    top: 5em;
    left: ${({ theme }) => `${theme.gridSizes.s}%`};
    width: ${({ theme }) => `${theme.gridSizes.m + theme.gridSizes.s}%`};
`;

export const Title = styled('h1')<TitleProps>`
    ${props =>
        props.isBig &&
        css`
            font-size: 5rem;
        `};
    ${props =>
        !props.isBig &&
        css`
            font-size: 1.75rem;
        `};
    margin: 0;
    white-space: nowrap;
    color: ${({ theme }) => theme.palette.white};
    font-family: ${({ theme }) => theme.fonts.futura};
    will-change: font-size;
    transition: ${({ theme }) => `font-size ${theme.animate.slow}`};
`;

export const MetaOutterWrapper = styled.div`
    width: ${({ theme }) => `${theme.gridSizes.m}vw`};
`;

export const Main = styled.main`
    position: relative;
`;

export const Top = styled.div`
    position: relative;
    padding-top: 10em;
    height: ${({ theme }) => `calc(100vh - ${theme.sizes.toolbarHeight})`};
    /* height: 600vh; */
`;

export const ScrollLineWrapper = styled('div')<ScrollLineWrapperProps>`
    ${superCenter('50%', 'auto', '-50%', '0')}
    bottom: 0;
    height: 20em;
    width: 5em;
    overflow: hidden;
    animation: none;
    ${props =>
        props.atTop &&
        css`
            animation: ${css`
                ${scrollLineLoop} 3000ms infinite
            `};
        `};
`;

export const ScrollLineRevealBlock = styled(RevealBlock)`
    transform: rotate(90deg);
    transform-origin: 2.5% 1.8em;
`;

export const ScrollLine = styled.div`
    height: 3px;
    background-color: ${({ theme }) => theme.palette.white};
`;

export const Section = styled.div`
    margin: 2em auto;
`;

export const StyledHeading = styled(Heading)`
    margin: 0;
    font-weight: bold;
`;

export const Paragraph = styled.p`
    font-size: 1em;
`;
