import styled, { css } from 'styled-components';
import rgbHex from 'hex-to-rgba';
import { media } from '@styles/breakpoints';
import { ButtonTypes, Theme } from '@types';
import Link from 'next/link';

type ButtonProps = {
  type: ButtonTypes;
};

const buttonStyles = (props: ButtonProps & { theme: Theme }) => css`
  color: ${rgbHex(props.theme.palette.white, 0.87)};
  &:hover {
    cursor: pointer;
  }
  ${props.type === 'ridicularge-XL' &&
    css`
      padding: 1.5em 2em;
      font-size: 3rem;
      background-color: ${props.theme.palette.black};
    `}
  ${props.type === 'line' &&
    css`
      position: relative;
      display: inline-block;
      max-width: 12em;
      width: 80%;
      overflow-x: hidden;
      ${media.tablet`
                width: 100%;
            `}
      ${media.desktopS`
                width: 80%;
            `}
             &:hover {
        ${Text} {
          cursor: pointer;
          transform: translate3d(1em, 0, 0);
          transition: transform ${props.theme.animate.fast} ${props.theme.animate.easeInOut};
        }
      }
    `}
`;

export const InnerWrapper = styled('div')<ButtonProps>`
  ${props =>
    props.type === 'line' &&
    css`
      width: 250%;
      white-space: nowrap;
      transform: translate3d(-63%, 0, 0);
      ${Text} {
        display: inline-block;
        text-transform: uppercase;
        font-weight: bold;
      }
      ${Line} {
        display: inline-block;
        width: 70%;
        height: 0.075em;
        background-color: ${rgbHex(props.theme.palette.white, 0.87)};
        transform: translate3d(0, 0.01em, 0);
      }
    `}
`;

export const ButtonA = styled('a')<ButtonProps>`
  ${props => buttonStyles(props)}
`;

export const ButtonLink = styled(Link)<ButtonProps>`
  ${props => buttonStyles(props)}
`;

export const ButtonDiv = styled('div')<ButtonProps>`
  ${props => buttonStyles(props)}
`;

export const Line = styled('span')`
  display: inline-block;
  width: 70%;
  height: 0.075em;
  background-color: ${props => rgbHex(props.theme.palette.white, 0.87)};
  transform: translate3d(0, 0.01em, 0);
`;

export const Text = styled('p')`
  display: inline-block;
`;
