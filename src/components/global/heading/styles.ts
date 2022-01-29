import styled from 'styled-components';
import hexRgb from 'hex-to-rgba';
import { media } from '../../../styles/breakpoints';

export const HeadingWrapper = styled.h3`
  color: ${({ theme }) => hexRgb(theme.palette.white, 0.87)};
  margin: ${({ theme }) => `0 0 4em ${theme.gridSizes.s}%`};
  padding: 0;
  font-size: 1.25rem;
  font-weight: 100;
  letter-spacing: 0.5em;
  ${media.tablet`
    font-size: 1.5rem;
    margin-bottom: 6em;
  `}
`;
