import styled from 'styled-components';
import { media } from '../styles/breakpoints';

export const AppWrapper = styled.div`
  position: relative;
`;

export const MainWrapper = styled.main`
  position: relative;
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


