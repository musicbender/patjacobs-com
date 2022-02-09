import styled from 'styled-components';
import hexToRgb from 'hex-to-rgba';
import { media } from '@styles/breakpoints';

export const SocialWrapper = styled.div`
  height: 1.15em;
`;

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  ${media.tablet`
    display: inline-block;
    width: auto;
    &:before {
      content: '';
      display: table;
      clear: both;
    }
  `}
`;

export const LinkText = styled.a`
  display: inline-block;
  margin: 0;
  color: ${({ theme }) => hexToRgb(theme.palette.white, 0.7)};
  text-decoration: none;
  justify-self: center;
  transform: rotate(-90deg);
  &:hover,
  &:focus {
    cursor: pointer;
    text-decoration: underline;
  }
  ${media.tablet`
    margin: 0 2.5em;
    transform: none;
    float: left;
  `}
`;
