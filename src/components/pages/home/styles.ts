import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const HomePage = styled.main`
  position: relative;
`;

export const OutterWrapper = styled.div`
  position: relative;
  margin-bottom: ${(props) => props.theme.sizes.footerHeightM};
  ${media.tablet`
    margin-bottom: ${(props) => props.theme.sizes.footerHeightD};
  `}
`;

export const DotSequenceWrapper = styled.div`
  padding: 0;
`;
