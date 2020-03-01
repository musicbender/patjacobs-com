import styled, { css } from 'styled-components';
import hexRgb from 'hex-to-rgba';
import { media, sizes } from '../styles/breakpoints';

type AppWrapperProps = {
  splashOpen?: boolean
  mode?: string,
}

export const AppWrapper = styled('div')<AppWrapperProps>`
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${props => props.theme.modes[props.mode].bg};
  max-width: ${sizes.desktopXXL}px;
  ${(props) => props.splashOpen && `overflow: hidden;`}
  ${(props) => {
    const { bg, text } = props.theme.modes[props.mode];
    return css`
      background-color: ${bg};
      p, h1, h2, h3, h4, h5, h6, div, input, form, span, div {
        color: ${hexRgb(text, 0.87)};
      }
    `
  }}
`;

export const OutterWrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: ${props => props.theme.sizes.footerHeightM};
  ${media.tablet`
    margin-bottom: ${props => props.theme.sizes.footerHeightD};
  `}
`;

export const InnerWrapper = styled.div`
  padding: 0;
  height: auto;
  ${media.tablet`
    padding-top: ${props => props.theme.sizes.toolbarHeight};
  `}
`;


