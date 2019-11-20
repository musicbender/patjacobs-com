import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';
import { superCenter } from '../../../styles/style-utils';

const iconSize: string = '5em';
const iconOpacity: number = 0.675;

export const ToolBarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.theme.sizes.toolbarHeight};
  background-color: transparent;
  z-index: 9;
  @media (${media.tablet}) {
    position: fixed;
  }
`; 

export const InnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  > svg {
    @mixin super-center $grid-s, 0, -50%, 0;
    display: inline-block;
    width: 1.85em;
    fill: ${props => props.theme.palette.white};
    opacity: ${iconOpacity};
    @media (${media.tablet}) {
      left: calc(${} / 2);
    }
  }
`;

.toolbar {
  $icon-size: 5em;
  $icon-opacity: 0.675;
  position: relative;
  width: 100%;
  height: $toolbar-height;
  background-color: transparent;
  z-index: 9;
  @media (min-width: $tablet-width) {
    position: fixed;
  }
  > .inner-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    > .toolbar-logo {
      @mixin super-center $grid-s, 0, -50%, 0;
      display: inline-block;
      width: 1.85em;
      fill: $white;
      opacity: $icon-opacity;
      @media (min-width: $tablet-width) {
        left: calc($(grid-s) / 2);
      }
    }
    > .hamburger {
      @mixin super-center auto;
      right: calc($(grid-s) / 2);
      height: $icon-size;
      width: $icon-size;
      min-width: $grid-s;
      min-height: $grid-s;
      opacity: $icon-opacity;
      > [class^="bar"] {
        position: absolute;
        left: 0;
        width: 100%;
        height: 0.05em;
        background-color: rgba($white, 0.87);
      }
      > .bar1 {
        top: 0;
      }
      > .bar2 {
        top: 1em;
      }
    }
  }
}
