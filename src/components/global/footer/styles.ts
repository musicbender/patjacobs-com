import styled, { css } from 'styled-components';
import { media, sizes } from '../../../styles/breakpoints';
import Social from '../social';

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.sizes.footerHeightM};
  background-color: ${({ theme }) => theme.modes.dark.lines};
  z-index: -1;
  ${media.tablet`
    height: ${({ theme }) => theme.sizes.footerHeightD};
  `}
  > * {
    display: inline-block;
    margin-top: ${({ theme }) => `calc(${theme.sizes.footerHeightM} - 4.5em)`};
    ${media.tablet`
      margin-top: ${({ theme }) => `calc(${theme.sizes.footerHeightD} - 3em)`};
    `}
  }
`;

export const StyledSocial = styled(Social)`
  width: 50%;
  ${media.tablet`
    width: 75%;
  `}
`;

export const TriangleWrapper = styled.div`
  margin-left: 2.5em;
  margin-right: 2.5em;
  float: right;
  transition: ${({ theme }) => `transform ${theme.animate.fast} ${theme.animate.easeInOut}`};
  @media (max-width: ${sizes.tablet}) {
    margin-top: 4em;
  }
  @media (hover: hover) {
    &:hover,
    &:focus {
      cursor: pointer;
      transform: rotate(-45deg);
    }
  }
`;
