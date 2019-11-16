import styled from 'styled-components';
import { devices } from '../../../styles/breakpoints';

export const HomePage = styled.main`
  position: relative;
`;

export const OutterWrapper = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.sizes.footerHeightM};
  @media (min-width: ${devices.tablet}) {
    margin-bottom: ${props => props.theme.sizes.footerHeightD};
  }
`;

export const InnerWrapper = styled.div`
  padding: 0;
`;


