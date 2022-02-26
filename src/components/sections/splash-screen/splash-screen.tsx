import { FC } from 'react';
import Curtain from '@components/global/curtain';
import settings from '@configs/settings.json';
import { SplashScreenWrapper, LogoOutterWrapper, StyledLogo } from './styles';

const SplashScreen: FC = () => {
  const splashDuration = settings.splashScreenDebug ? 300 : 3;
  return (
    <SplashScreenWrapper>
      <Curtain durations={[0, 3, 3]} withLogo />
    </SplashScreenWrapper>
  );
};

export default SplashScreen;
