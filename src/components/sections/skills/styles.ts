import styled, { css } from 'styled-components';
import { media } from '@styles/breakpoints';
import DotFormation from '../../particles/dot-formation';

type StyledDotFormationProps = {
  breakpoint: 'mobile' | 'desktop';
};

export const SkillsWrapper = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  padding-bottom: 238%;
  overflow: hidden;
  ${media.tablet`
    height: 73em;
    margin-top: 15em;
    padding: 0;
  `}
`;

export const DotWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const StyledDotFormation = styled(DotFormation)<StyledDotFormationProps>`
  position: absolute;
  transition: ${({ theme }) => `filter ${theme.animate.slow} linear`};
  width: ${({ theme }) => {
    const { s, m, l } = theme.gridSizes;
    return `calc(${m}% + ${s}% + ${m}% + ${l}% + ${s}%)`;
  }};
  left: 92%;
  transform: translateX(-100%);
  ${props =>
    props.breakpoint === 'mobile' &&
    css`
      padding-bottom: 225%;
      ${media.tablet`display: none;`}
    `};
  ${props =>
    props.breakpoint === 'desktop' &&
    css`
      display: none;
      padding-bottom: 41.5%;
      ${media.tablet`display: block;`}
    `};
`;
