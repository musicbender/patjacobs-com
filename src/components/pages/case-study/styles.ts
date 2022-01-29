import styled, { css } from 'styled-components';
import { media } from '../../../styles/breakpoints';
import { gridPosition } from '../../../styles/utils/global';
import Heading from '../../global/heading';
import UpNext from '../../global/up-next';

// types
interface MetaProps {
  atTop?: boolean;
}

interface UpNextProps {
  gridLines: number[];
}

// styled components
export const CaseStudyPage = styled.div`
  position: relative;
  min-height: 150vh;
  padding: ${({ theme }) => `4em ${theme.gridSizes.s}vw 0`};
  ${media.tablet`
        padding: 0;
    `}
`;

export const InfoWrapper = styled.div`
  ${media.tablet`
        position: fixed;
        top: 7em;
        left: ${({ theme }) => `${theme.gridSizes.s - 3}%`};
        width: ${({ theme }) => `${theme.gridSizes.m + theme.gridSizes.s + 3}%`};
        z-index: 2;
    `}
  ${media.desktopS`
        left: ${({ theme }) => `${theme.gridSizes.s}%`};
        width: ${({ theme }) => `${theme.gridSizes.m + theme.gridSizes.s}%`};
    `}
`;

export const Title = styled('h1')<MetaProps>`
  ${(props) =>
    props.atTop &&
    css`
      ${media.tablet`
                 transform: scale(3);
            `}
    `};
  ${(props) =>
    !props.atTop &&
    css`
      ${media.tablet`
                transform: scale(1);
            `}
    `};
  margin: 0 0 1em 0;
  width: 100%;
  color: ${({ theme }) => theme.palette.white};
  font-size: 1.75rem;
  font-family: ${({ theme }) => theme.fonts.futura};
  will-change: transform;
  transition: ${({ theme }) => `transform ${theme.animate.slow} 50ms`};
  transform-origin: top left;
  ${media.tablet`
        width: ${({ theme }) => `${theme.gridSizes.m + theme.gridSizes.s - 3}vw`};
        margin-bottom: 0.5em;
        font-size: 1.35rem;
    `}
`;

export const MetaOutterWrapper = styled('div')<MetaProps>`
  width: 100%;
  transition: ${({ theme }) => `transform ${theme.animate.slow} 50ms`};
  ${media.tablet`
        width: ${({ theme }) => `${theme.gridSizes.m}vw`};
    `}
  ${(props) =>
    props.atTop &&
    css`
      ${media.tablet`
                 transform: translate3d(0,5em,0);
            `}
    `};
  ${(props) =>
    !props.atTop &&
    css`
      ${media.tablet`
                transform: translate3d(0,0,0);
            `}
    `};
`;

export const Main = styled.main`
  position: relative;
  padding-bottom: 10em;
  overflow: hidden;
`;

export const Top = styled.div`
  display: none;
  position: relative;
  padding-top: 10em;
  height: ${({ theme }) => `calc(100vh - ${theme.sizes.toolbarHeight})`};
  ${media.tablet`
      display: block;
    `}
`;

export const Middle = styled.div``;

export const Section = styled.div`
  margin: 3em auto;
  ${media.tablet`
        margin: 10em auto;
    `}
`;

export const StyledHeading = styled(Heading)`
  margin: 0 0 1em 0;
  font-weight: bold;
  ${media.tablet`
        margin: 0 0 4em 0;
    `}
`;

export const Paragraph = styled.p`
  font-size: 1em;
  margin: 0 auto 4em !important;
  ${media.tablet`
        margin: 0 auto 8em !important;
    `}
`;

export const StyledUpNext = styled(UpNext)<UpNextProps>`
  margin-top: 8em;
  ${media.tablet`
        margin-top: 0;
    `}
  ${(props) =>
    css`
      left: 0;
      ${media.tablet`
                ${gridPosition({
                  gridLines: props.gridLines,
                  index: 2,
                  unit: 'vw',
                })}
            `}
    `};
`;
