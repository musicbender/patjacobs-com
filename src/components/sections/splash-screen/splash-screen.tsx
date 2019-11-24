import React from 'react';
import Logo from '../../global/logo';
import Curtain from '../../global/curtain';

const SplashScreen = () => (
  <div className={cx(style.splashScreen)}>
    <Curtain duration={config.splashScreenDebug ? 3000000 : 3000}/>
    <div className={cx(
      style.logoWrapper,
      { [style.debug]: config.splashScreenDebug }
    )}>
      <Logo color="aqua" />
    </div>
  </div>
);

export default SplashScreen;
