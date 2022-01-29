import styled, { css } from 'styled-components';
import rgbHex from 'hex-to-rgba';
import { shade } from 'polished';
import siteTheme from '../../../styles/theme';
import { media } from '../../../styles/breakpoints';
import Button from '../button';
import { InnerWrapper, Line, Text as ButtonText } from '../button/styles';

interface ItemInfoProps {
  stopped?: boolean;
}

export const ItemInfoWrapper = styled('div')<ItemInfoProps>`
  width: 84vw;
  margin-left: ${(props) => `${props.theme.gridSizes.s}%`};
  text-align: left;
  color: ${(props) => rgbHex(props.theme.palette.white, 0.87)};
  background-color: ${(props) => props.theme.palette.darkBlack};
  border-width: 0.6em;
  border-style: solid;
  padding: 2.25em 1.75em 0.2em;
  transition: ${({ theme }) => `border-color ${theme.animate.fast} ${theme.animate.easeInOut},
    color ${theme.animate.fast} ${theme.animate.easeInOut}`};
  ${media.tablet`
    width: ${({ theme }) => `calc(${theme.gridSizes.s}vw + ${theme.gridSizes.m}vw)`};
    margin-left: 0;
    border-width: 0.45em;
  `}
  ${(props) =>
    !props.stopped &&
    css`
      color: ${rgbHex(props.theme.palette.white, 0.4)};
      border-color: ${shade(0.7, props.theme.corePalette.purple)};
    `}
  ${(props) =>
    props.stopped &&
    css`
      color: ${rgbHex(props.theme.palette.white, 0.87)};
      border-color: ${shade(0.4, props.theme.corePalette.purple)};
    `}
`;

export const Title = styled.h5`
  margin: 0 0 1em;
  font-family: ${(props) => props.theme.fonts.futura};
  font-size: 1rem;
  font-weight: 200;
  text-transform: uppercase;
  color: inherit;
  ${media.tablet`
    font-size: 1.5rem;
  `}
`;

export const Description = styled.p`
  margin: 0 0 1.5em;
  font-family: ${(props) => props.theme.fonts.inconsolata};
  font-size: 1rem;
  line-height: 1.75;
  color: inherit;
  opacity: 0.6;
`;

interface StyledButtonProps {
  isParallax: boolean;
  stopped: boolean;
}

const btnColor = siteTheme.corePalette.purple;

export const StyledButton = styled(Button)<StyledButtonProps>`
  ${InnerWrapper} {
    color: ${btnColor};
    ${Line} {
      background-color: ${btnColor};
    }
    ${ButtonText} {
      color: ${btnColor};
    }
  }
  ${(props) =>
    !props.isParallax &&
    props.stopped &&
    css`
    ${InnerWrapper} {
        transition: transform 1s ease-in-out ${props.theme.animate.fast};
        ${ButtonText} {
          transform: translate3d(0, 0, 0);
          transition: transform ${props.theme.animate.fast} ${props.theme.animate.easeInOut};
        }
        ${Line} {
          transform: translate3d(0, 0.01em, 0);
          transition: transform ${props.theme.animate.fast} ${props.theme.animate.easeInOut};
        }
      }
      &:hover {
        ${InnerWrapper}
          cursor: pointer;
          ${ButtonText} {
            transform: translate3d(1em, 0, 0);
          }
          ${Line} {
            transform: translate3d(1em, 0.01em, 0);
          }
        }
      }
  `}
  ${(props) =>
    !props.isParallax &&
    !props.stopped &&
    css`
      ${InnerWrapper} {
        transform: translate3d(50%, 0, 0);
      }
    `}
  ${(props) =>
    props.isParallax &&
    props.stopped &&
    css`
      opacity: 1;
    `}
  ${(props) =>
    props.isParallax &&
    !props.stopped &&
    css`
      opacity: 0;
      transition: opacity ${props.theme.animate.fast} ${props.theme.animate.easeIn};
    `}
`;
