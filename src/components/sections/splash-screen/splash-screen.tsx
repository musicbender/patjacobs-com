import { FC } from 'react';
import Curtain from '@components/global/curtain';
import settings from '@configs/settings.json';
import { SplashScreenWrapper, LogoOutterWrapper, StyledLogo } from './styles';

const SplashScreen: FC = () => {
  const splashDuration = 3000;

  return (
    <SplashScreenWrapper>
      <Curtain duration={settings.splashScreenDebug ? 3000000 : splashDuration} />
      <LogoOutterWrapper>
        <StyledLogo color="aqua" debug={settings.splashScreenDebug} />
      </LogoOutterWrapper>
    </SplashScreenWrapper>
  );
};

export default SplashScreen;
