import React from 'react';
import Logo from '../logo';
import { EModes } from '../../../types/state';

interface IProps {
  pageLoaded: boolean,
  mode: EModes,
  menuOpen: boolean,
  handleMode: any,
  handleMenu: any
}

const Toolbar = ({
  pageLoaded,
  mode,
  menuOpen,
  handleMode,
  handleMenu
}: IProps) => {
  const renderHamburger = () => {
    return (
      <div className={cx(style.hamburger)}>
        <div className={cx(style.bar1)}></div>
        <div className={cx(style.bar2)}></div>
      </div>
    );
  }

  return (
    <div className={cx(style.toolbar)}>
      <div className={cx(style.innerWrapper)}>
        <Logo classNames={cx(style.toolbarLogo)} color="white"/>
      </div>
    </div>
  );
}

Toolbar.defaultProps = {
  mode: 'dark',
  menuOpen: false
}

export default Toolbar;
