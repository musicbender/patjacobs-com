import styled from 'styled-components';

export const HomePage = styled.main`
  position: relative;
`;

export const OutterWrapper = styled.div`
  position: relative;
  margin-bottom: $footer-height-m;
  @media (min-width: $tablet-width) {
    margin-bottom: $footer-height;
  }
`;

export const InnerWrapper = styled.div`
  padding: 0;
`;


