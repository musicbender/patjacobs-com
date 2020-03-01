import { createGlobalStyle } from 'styled-components'
import { media } from './breakpoints';
import { ITheme } from '../../types/styles';

type GlobalStyles = {
  theme: ITheme
  media?: any
}

export default createGlobalStyle<GlobalStyles>`
  html {
    -webkit-font-smoothing: antialiased;
    margin: 0;
    background: ${props => props.theme.modes.dark.bg}; 
    box-sizing: border-box;
    font-size: 16px;
    @media (${media.tablet}) {
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
