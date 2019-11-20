import styled, { css } from 'styled-components';
import { media } from '../styles/breakpoints';

interface IMainWrapperProps {
  splashOpen?: boolean
  mode?: string,
}

export const AppWrapper = styled.div`
  position: relative;
`;

export const MainWrapper = styled('main')<IMainWrapperProps>`
  position: relative;
  ${(props) => props.splashOpen && `overflow: hidden;`}
  ${(props) => props.mode === 'light' && css`
    background-color: ${props.theme.modePalette.lightBg};
    p, h1, h2, h3, h4, h5, h6, div, input, form, span, div {
      color: rgba(${props.theme.palette.matteBlack}, 0.87);
    }
  `}
`;

export const OutterWrapper = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.sizes.footerHeightM};
  @media (min-width: ${media.tablet}) {
    margin-bottom: ${props => props.theme.sizes.footerHeightD};
  }
`;

export const InnerWrapper = styled.div`
  padding: 0;
`;


