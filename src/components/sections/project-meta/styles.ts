import styled, { css } from 'styled-components';
import { media } from '@styles/breakpoints';
import { getRandomColor } from '@util/colors';
import { CoreColors } from '@types';
import GitHubIcon from '@components/icons/github';
import StorybookIcon from '@components/icons/storybook';

type ContentProps = {
  color?: CoreColors;
};

const conf = {
  desktopMargin: 2.25,
  mobileMargin: 2.25,
};

export const ProjectMetaWrapper = styled.div`
  overflow: hidden;
`;

export const ContentWrapper = styled('div')<ContentProps>`
  width: 100%;
  margin: ${`${conf.mobileMargin}em auto 0`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.corePalette[props.color]};
  ${media.tablet`
        margin: ${`${conf.desktopMargin}em auto 0`};
    `}
`;

const content = css`
  display: block;
  margin: 0.2em 0;
  font-weight: 200;
  font-size: 0.9rem;
  letter-spacing: 4px;
  white-space: nowrap;
  line-height: 2.05;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Label = styled.p`
  ${content}
  display: block;
  color: ${({ theme }) => theme.palette.white};
`;

export const ContentValue = styled.p`
  ${content}
  color: inherit;
  &:nth-child(3) {
    margin-left: 0.75em;
    ${media.tablet`
      display: none;
    `}
    ${media.desktopM`
      display: inline-block;
    `}
  }
`;

export const ContentValueLink = styled.a`
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

export const StyledGithubIcon = styled(GitHubIcon)`
  width: 2em;
  fill: ${({ theme }) => theme.palette.white};
  transition: ${({ theme }) => `fill ${theme.animate.fast}`};
`;

export const StyledStorybookIcon = styled(StorybookIcon)`
  width: 2em;
  fill: ${({ theme }) => theme.palette.white};
  transition: ${({ theme }) => `fill ${theme.animate.fast}`};
`;
