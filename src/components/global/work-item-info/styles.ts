@import '../../style/helpers/variables';
@import '../../style/helpers/mixins';

.item-info {
  width: 84vw;
  margin-left: $grid-s;
  text-align: left;
  color: rgba($white, 0.87);
  background-color: $dark-black;
  border-width: 0.6em;
  border-style: solid;
  padding: 1em;
  transition: border-color $fast $easeInOut,
    color $fast $easeInOut;
  @media (min-width: $tablet-width) {
    width: calc($(s)vw + $(m)vw);
    margin-left: 0;
    border-width: 0.45em;
  }
  &:not(.stopped) {
    color: rgba($white, 0.4);
    border-color: color($purple shade(60%))
  }
  &.stopped {
    color: rgba($white, 0.87);
    border-color: color($purple shade(40%))
  }
  > h5 {
    margin: 0 0 1em;
    font-family: $futura;
    font-size: 1rem;
    font-weight: 200;
    text-transform: uppercase;
    color: inherit;
    @media (min-width: $tablet-width) {
      font-size: 1.5rem;
    }
  }
  > p {
    margin: 0 0 1.5em;
    font-family: $inconsolata;
    font-size: 1rem;
    color: inherit;
    opacity: 0.6;
  }
}

// button styles
&[class*="work"] {
  $color: $purple;
  > .inner-wrapper {
    color: $color;
    > .line {
      background-color: $color;
    }
  }
  &[class*="static"] {
    &[class*="stopped"] {
      > .inner-wrapper {
        transition: transform 1s ease-in-out $fast;
        > p {
          transform: translate3d(0, 0, 0);
          transition: transform $fast $easeInOut;
        }
        > .line {
          transform: translate3d(0, 0.01em, 0);
          transition: transform $fast $easeInOut;
        }
      }
      &:hover {
        > .inner-wrapper {
          cursor: pointer;
          > p {
            transform: translate3d(1em, 0, 0);
          }
          > .line {
            transform: translate3d(1em, 0.01em, 0);
          }
        }
      }
    }
    &[class*="not-stopped"] {
      /* $x: calc(100% + $(r-padding)); */
      > .inner-wrapper {
        transform: translate3d(50%, 0, 0);
        /* > p {
          transform: translate3d($x, 0, 0);
          transition: transform $fast $easeInOut;
        }
        > .line {
          width: 100%;
          transform: translate3d($x, 0, 0);
        } */
      }
    }
  }
  &[class*="parallax"] {
    &[class*="stopped"] {
      opacity: 1;
    }
    &[class*="not-stopped"] {
      opacity: 0;
      transition: opacity $fast $easeIn;
    }
  }
}
