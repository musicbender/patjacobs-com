import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Curtain from '../../global/curtain';
import { SplashScreenWrapper, LogoOutterWrapper, StyledLogo } from './styles';

const SplashScreen: React.SFC = () => {
  const data = useStaticQuery(graphql`
    query {
      configs {
        settings {
          splashScreenDebug
        }
      }
    }
  `);

  return (
    <SplashScreenWrapper>
      <Curtain duration={data.configs.settings.splashScreenDebug ? 3000000 : 3000} />
      <LogoOutterWrapper>
        <StyledLogo color="aqua" debug={data.configs.settings.splashScreenDebug } />
      </LogoOutterWrapper>
    </SplashScreenWrapper>
  );
};

export default SplashScreen;
