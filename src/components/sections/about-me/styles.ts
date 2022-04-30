import styled from 'styled-components';
import { media } from '@styles/breakpoints';
import Heading from '@components/global/heading';
import hexRgb from 'hex-to-rgba';

export const AboutMeSection = styled.div`
  position: relative;
  margin: 0 auto 10em;
  overflow: hidden;

  ${media.tablet`
      width: 42%;
      height: 52em;
      margin: 0 0 0 50%;
      overflow: visible;
  `}
`;

export const StyledHeading = styled(Heading)`
  ${media.tablet`
    margin-left: 0;
  `}
`;

export const ContentBox = styled.div`
  padding: 2em;
  margin: ${({ theme }) => `0 ${theme.gridSizes.s}%`};
  background-color: ${({ theme }) => theme.palette.darkerBlack};

  ${media.tablet`
    margin: 0;
    padding: 1.25em 2em;
  `}

  ${media.desktopL`
    padding: 2em 4em;
  `}

  > p {
    line-height: 1.65;
    font-size: 1rem;
    color: ${({ theme }) => hexRgb(theme.palette.white, 0.67)};

    ${media.tablet`
        font-size: 0.9rem;
        line-height: 1.7;
    `}

    ${media.desktopS`
        font-size: 1.1rem;
        line-height: 1.7;
    `}

    ${media.desktopL`
        font-size: 1.2rem;
        line-height: 1.87;
    `}
  }
`;
