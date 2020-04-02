import { createGlobalStyle } from 'styled-components'
import { sizes } from './breakpoints';
import { ITheme } from '../../types/styles';
import Fonts from './fonts';

type GlobalStyles = {
  theme: ITheme
  media?: any
}

export default createGlobalStyle<GlobalStyles>`
  @font-face {
    font-family: 'Futura';
    font-weight: normal;
    src: url(${Fonts.FuturaMediumWOFF2}) format('woff2'),
      url(${Fonts.FuturaMediumWOFF}) format('woff'),
      url(${Fonts.FuturaMediumTTF}) format('truetype');
  }
  @font-face {
    font-family: 'Futura';
    font-weight: bold;
    src: url(${Fonts.FuturaBoldWOFF2}) format('woff2'),
      url(${Fonts.FuturaBoldWOFF}) format('woff'),
      url(${Fonts.FuturaBoldTTF}) format('truetype');
  }
  @font-face {
    font-family: 'Inconsolata';
    font-weight: normal;
    src: local("Inconsolata"),
        url(${Fonts.InconsolataWOFF2}) format('woff2'),
        url(${Fonts.InconsolataWOFF}) format('woff'),
        url(${Fonts.InconsolataTTF}) format('truetype');
  }
  html {
    -webkit-font-smoothing: antialiased;
    margin: 0;
    background: ${props => props.theme.modes.dark.bg}; 
    box-sizing: border-box;
    font-size: 16px;
    @media (${sizes.tablet}) {
      font-size: 17px;
    }
  }
  body {
    position: relative;
    padding: 0;
    &::-webkit-scrollbar {
      width: 3px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.17);
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  p, h1, h2, h3, h4, h5, h6, div, input, form, span {
    font-family: "Inconsolata", "serif";
    color: rgba(255, 255, 255, 0.87);
  }
`;
