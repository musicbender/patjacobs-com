import styled, { css } from 'styled-components';
import rgbHex from 'hex-to-rgba';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import { media } from '../../../styles/breakpoints';
import { ButtonTypes, ITheme } from '../../../../types';
import hexToRgba from 'hex-to-rgba';

type ButtonProps = {
  type: ButtonTypes,
}

export const buttonStyles = (props: ButtonProps & { theme: ITheme} ) => css`
  color: ${rgbHex(props.theme.palette.white, 0.87)};
  &:hover {
    cursor: pointer;
  }
  ${props.type === 'ridicularge-XL' && css`
    padding: 1.5em 2em;
    font-size: 3rem;
    background-color: ${props.theme.palette.black};
  `}
  ${props.type === 'line' && css`
    position: relative;
    display: inline-block;
    max-width: 10em;
    width: 75%;
    overflow-x: hidden;
    ${media.tablet`
      width: 100%;
    `}
    ${media.desktopS`
      width: 75%;
    `}
    ${InnerWrapper} {
      width: 250%;
      transform: translate3d(-63%, 0, 0);
      > p {
        display: inline-block;
      }
      > .line {
        display: inline-block;
        width: 70%;
        height: 0.075em;
        background-color: rgba($white, 0.87);
        transform: translate3d(0, 0.01em, 0);
      }
    }
  `}
`;

export const InnerWrapper = styled('div')<ButtonProps>`
  ${props => props.type === 'line' && css`
     width: 250%;
     transform: translate3d(-63%, 0, 0);
  `}
`;

export const ButtonA = styled('a')<ButtonProps>`
  ${props => buttonStyles(props)}
`;

export const ButtonLink = styled(GatsbyLink)<ButtonProps & GatsbyLinkProps<any>>`
  ${props => buttonStyles(props)}
`;

export const ButtonDiv = styled('div')<ButtonProps>`
  ${props => buttonStyles(props)}
`;

export const Line = styled('span')`
  display: inline-block;
  width: 70%;
  height: 0.075em;
  background-color: ${props => hexToRgba(props.theme.palette.white, 0.87)};
  transform: translate3d(0, 0.01em, 0);
`;

export const Text = styled('p')`
  display: inline-block;
`;



.btn {
  color: rgba($white, 0.87);
  &:hover {
    cursor: pointer;
  }
  > .inner-wrapper {
    p {
      margin: 0;
      padding: 0;
      text-align: center;
      color: inherit;
      text-transform: uppercase;
      font-size: 1rem;
    }
  }
  &.line {
    position: relative;
    display: inline-block;
    max-width: 10em;
    width: 75%;
    overflow-x: hidden;
    @media (min-width: $tablet-width) {
      width: 100%;
    }
    @media (min-width: $small-desktop-width) {
      width: 75%;
    }
    > .inner-wrapper {
      width: 250%;
      transform: translate3d(-63%, 0, 0);
      > p {
        display: inline-block;
      }
      > .line {
        display: inline-block;
        width: 70%;
        height: 0.075em;
        background-color: rgba($white, 0.87);
        transform: translate3d(0, 0.01em, 0);
      }
    }
    &[class*="work"] {
      $color: $purple;
      > .inner-wrapper {
        color: $color;
        > .line {
          background-color: $color;
        }
      }
      &[class*="static"] {
        &[class*="stopped"] {
          > .inner-wrapper {
            transition: transform 1s ease-in-out $fast;
            > p {
              transform: translate3d(0, 0, 0);
              transition: transform $fast $easeInOut;
            }
            > .line {
              transform: translate3d(0, 0.01em, 0);
              transition: transform $fast $easeInOut;
            }
          }
          &:hover {
            > .inner-wrapper {
              cursor: pointer;
              > p {
                transform: translate3d(1em, 0, 0);
              }
              > .line {
                transform: translate3d(1em, 0.01em, 0);
              }
            }
          }
        }
        &[class*="not-stopped"] {
          /* $x: calc(100% + $(r-padding)); */
          > .inner-wrapper {
            transform: translate3d(50%, 0, 0);
            /* > p {
              transform: translate3d($x, 0, 0);
              transition: transform $fast $easeInOut;
            }
            > .line {
              width: 100%;
              transform: translate3d($x, 0, 0);
            } */
          }
        }
      }
      &[class*="parallax"] {
        &[class*="stopped"] {
          opacity: 1;
        }
        &[class*="not-stopped"] {
          opacity: 0;
          transition: opacity $fast $easeIn;
        }
      }
    }
    &:hover {
      > .inner-wrapper {
        > p {
          cursor: pointer;
          transform: translate3d(1em, 0, 0);
          transition: transform $fast $easeInOut;
        }
      }
    }
  }
  &.ridicularge-XL {
    padding: 1.5em 2em;
    font-size: 3rem;
    background-color: $black;
  }
}
