import styled, { css } from 'styled-components';
import { shade } from 'polished';
import WorkItemInfo from '../work-item-info';
import { media } from '../../../styles/breakpoints';

interface WorkItemWrapperProps {
  isStopped?: boolean;
}

interface ParallaxProps {
  index?: number;
  isStopped?: boolean;
}

interface ImageProps {
  index: number;
  bgImage: string;
}

interface ImageCoverProps {
  isStopped?: boolean;
}

export const WorkItemWrapper = styled('div')<WorkItemWrapperProps>`
  position: relative;
  margin-bottom: 0;
  height: 15em;
  ${media.tablet`
        height: 23.5em;
        margin-bottom: 10em;
    `}
`;

export const ImageOutterWrapper = styled('div')<ParallaxProps>`
  display: none;
  position: relative;
  width: 59.52%;
  height: 100%;
  ${media.tablet`
        display: block;
    `}
  > .parallax {
    position: absolute;
    height: 100%;
    &.index-0 {
      left: 0;
      width: ${(props) => `calc(${props.theme.gridSizes.m}% * 4)`};
    }
    &.index-1 {
      left: ${(props) => `calc(${props.theme.gridSizes.m}% * 4)`};
      width: ${(props) => `calc(${props.theme.gridSizes.s}% * 4)`};
    }
  }
`;

export const ImageParallaxInner = styled('div')<ParallaxProps>`
  position: relative;
  width: 100%;
  height: 0;
  ${(props) =>
    props.index === 0 &&
    css`
      padding-top: calc(1 / 1 * 145%);
    `}
  ${(props) =>
    props.index === 1 &&
    css`
      padding-top: calc(1 / 1 * 308%);
    `}
`;

export const ImageInnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 101.3%;
  overflow-x: hidden;
  overflow-y: auto;
  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const WorkImage = styled('div')<ImageProps>`
  display: none;
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  background-image: ${(props) => props.bgImage};
  ${media.tablet`
    display: block;
  `}
  ${(props) =>
    props.index === 0 &&
    css`
      background-position: left;
    `}
  ${(props) =>
    props.index === 1 &&
    css`
      background-position: right;
    `}
`;

export const ImageFilter = styled.div`
  background-color: ${({ theme }) => theme.corePalette.purple};
  opacity: 0.1;
`;

export const ImageCover = styled('div')<ImageCoverProps>`
  background-color: ${({ theme }) => shade(0.6, theme.corePalette.purple)};
  opacity: 0.75;
  transform: translate3d(0, 0, 0);
  transition: ${(props) => `transform 450ms ${props.theme.animate.easeOut}`};
  ${(props) =>
    props.isStopped &&
    css`
      transform: translate3d(-101%, 0, 0);
      transition: transform 450ms ${props.theme.animate.easeInOut};
    `}
`;

export const StyledWorkItemInfo = styled(WorkItemInfo)`
  ${(props) =>
    !props.isParallax &&
    css`
      visibility: hidden;
      position: absolute;
      top: 0;
      ${media.tablet`
      left: calc(17% * 4);
      top: auto;
    `}
    `}
  ${(props) =>
    props.isParallax &&
    props.isStopped &&
    css`
      visibility: hidden;
    `}
  ${(props) =>
    !props.isParallax &&
    props.isStopped &&
    css`
      visibility: visible;
    `}
`;

export const InfoOutterWrapper = styled('div')<ParallaxProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${media.tablet`
        top: 6em;
        width: 59.52%;
    `}
  > .parallax {
    position: absolute;
    ${StyledWorkItemInfo} {
      margin: 0;
    }
    &.index-0 {
      ${({ theme }) => css`
        left: ${`${theme.gridSizes.s}%`};
        width: ${`calc(${theme.gridSizes.m}% + ${theme.gridSizes.s}% + ${theme.gridSizes.m}%)`};
        ${media.tablet`
          left: ${`calc(${theme.gridSizes.m}% * 4)`};
          width: ${`calc(${theme.gridSizes.s}% * 4)`};
        `}
      `}
    }
    &.index-1 {
      ${({ theme }) => css`
        left: 50vw;
        width: calc(42vw);
        ${StyledWorkItemInfo} {
          transform: translateX(-42vw);
        }
        ${media.tablet`
        left: ${`calc((${theme.gridSizes.m}% * 4) + (${theme.gridSizes.s}% * 4))`};
        width: ${`calc(${theme.gridSizes.m}% * 4)`};
        ${StyledWorkItemInfo} {
          transform: ${`translateX(-${theme.gridSizes.s}vw)`};
        }
      `}
      `}
    }
    ${(props) =>
      props.isStopped &&
      css`
        visibility: hidden;
      `}
  }
`;

export const InfoParallaxInner = styled.div`
  position: relative;
  width: 100%;
`;

export const InfoInnerWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;
