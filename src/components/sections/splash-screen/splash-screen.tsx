import React from 'react';
import Curtain from '../../global/curtain';
import { SplashScreenWrapper, LogoOutterWrapper, StyledLogo } from './styles';

const SplashScreen: React.SFC = () => {
    const splashDuration = 3000;

    return (
        <SplashScreenWrapper>
            <Curtain
                duration={data.configs.settings.splashScreenDebug ? 3000000 : splashDuration}
            />
            <LogoOutterWrapper>
                <StyledLogo color="aqua" debug={data.configs.settings.splashScreenDebug} />
            </LogoOutterWrapper>
        </SplashScreenWrapper>
    );
};

export default SplashScreen;
